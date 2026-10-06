import type Stripe from "stripe";
import { supabaseAdmin } from "./supabase";
import { sendEmail } from "./emails/send";
import { depositConfirmation, depositNotify } from "./emails/templates";
import { site } from "@/content/site";

// Paid Stripe Payment Links → a row in public.deposits (migrations/003, 004)
// and two emails: the parent's confirmation and Tyler's notification.
//  - DEPOSIT_PAYMENT_LINK_IDS: the $1,000 deposit links (payment_type 'deposit')
//  - FULL_PAYMENT_LINK_IDS: the $5,000 pay-in-full links (payment_type 'full')
//
// Idempotent on the Checkout Session id: the row is inserted once, and each
// email is "claimed" (its timestamp set only where it's still null) before it
// sends, so a replayed or concurrent delivery can't send it twice. A failed or
// skipped send releases the claim, so a later retry can send it.

const ids = (v: string | undefined) => (v ?? "").split(",").map((s) => s.trim()).filter(Boolean);
export const depositLinkIds = () => ids(process.env.DEPOSIT_PAYMENT_LINK_IDS);
export const fullLinkIds = () => ids(process.env.FULL_PAYMENT_LINK_IDS);

export type PaymentType = "deposit" | "full";

export const ownerEmail = () => process.env.OWNER_NOTIFY_EMAIL || site.email;

const linkId = (s: Stripe.Checkout.Session) => (typeof s.payment_link === "string" ? s.payment_link : s.payment_link?.id ?? null);

// "deposit" or "full" for a paid session from one of our links; null otherwise.
export function paymentType(s: Stripe.Checkout.Session): PaymentType | null {
  const id = linkId(s);
  if (s.payment_status !== "paid" || !id) return null;
  if (depositLinkIds().includes(id)) return "deposit";
  if (fullLinkIds().includes(id)) return "full";
  return null;
}

export const formatAmount = (cents: number, currency: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: currency.toUpperCase(), minimumFractionDigits: cents % 100 ? 2 : 0 }).format(cents / 100);

const formatTime = (unix: number) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", dateStyle: "medium", timeStyle: "short" }).format(new Date(unix * 1000)) + " PT";

type Outcome = { status: number; note: string };

export async function recordDeposit(s: Stripe.Checkout.Session, type: PaymentType = "deposit"): Promise<Outcome> {
  const db = supabaseAdmin();
  if (!db) {
    console.error("[stripe] deposit not saved: Supabase isn't configured");
    return { status: 500, note: "db not configured" };
  }
  const email = s.customer_details?.email;
  if (!email) {
    console.error(`[stripe] deposit ${s.id} has no customer email`);
    return { status: 200, note: "no email on session" };
  }

  // 1. The row (once per session). If payment_type doesn't exist yet
  //    (migration 004 not run), the row is saved without it.
  const row: Record<string, unknown> = {
    stripe_session_id: s.id,
    email,
    name: s.customer_details?.name ?? null,
    phone: s.customer_details?.phone ?? null,
    amount_cents: s.amount_total ?? 0,
    currency: s.currency ?? "usd",
    payment_link_id: linkId(s),
    payment_type: type,
  };
  const insert = () => db.from("deposits").upsert(row, { onConflict: "stripe_session_id", ignoreDuplicates: true });
  let { error: insertError } = await insert();
  if (insertError?.code === "PGRST204" && /'payment_type' column/.test(insertError.message)) {
    console.warn(`[stripe] deposits.payment_type missing (run migration 004); saved ${s.id} without it`);
    delete row.payment_type;
    ({ error: insertError } = await insert());
  }
  if (insertError) {
    console.error(`[stripe] deposit ${s.id} insert failed:`, insertError.message);
    return { status: 500, note: "db insert failed" };
  }

  // 2. Each email at most once: claim its column, send, release on failure.
  const claim = async (column: "confirmation_sent_at" | "owner_notified_at") => {
    const { data, error } = await db.from("deposits").update({ [column]: new Date().toISOString() }).eq("stripe_session_id", s.id).is(column, null).select("id");
    if (error) console.error(`[stripe] deposit ${s.id} claim ${column} failed:`, error.message);
    return !error && !!data && data.length > 0;
  };
  const release = (column: "confirmation_sent_at" | "owner_notified_at") =>
    db.from("deposits").update({ [column]: null }).eq("stripe_session_id", s.id);

  const sent: string[] = [];
  const send = async (column: "confirmation_sent_at" | "owner_notified_at", msg: Parameters<typeof sendEmail>[0]) => {
    if (!(await claim(column))) return; // already sent (or being sent) for this session
    try {
      if (await sendEmail(msg)) sent.push(column);
      else await release(column); // email not set up: leave it unsent
    } catch (e) {
      console.error(`[stripe] deposit ${s.id} ${column} email failed:`, e);
      await release(column);
    }
  };

  const amount = formatAmount(s.amount_total ?? 0, s.currency ?? "usd");
  await send("confirmation_sent_at", { to: email, replyTo: site.email, ...depositConfirmation({ name: s.customer_details?.name, type }) });
  await send("owner_notified_at", {
    to: ownerEmail(),
    replyTo: email,
    ...depositNotify({ name: s.customer_details?.name, email, phone: s.customer_details?.phone, amount, time: formatTime(s.created), sessionId: s.id, type }),
  });
  // The row is saved, so this is a 200 even if an email failed: Stripe
  // shouldn't retry forever over an email outage (the failure is logged).
  return { status: 200, note: sent.length ? `sent ${sent.join(", ")}` : "nothing new to send" };
}
