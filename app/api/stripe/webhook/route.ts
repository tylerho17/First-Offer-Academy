import { NextResponse } from "next/server";
import Stripe from "stripe";
import { isDeposit, recordDeposit } from "@/lib/deposits";

// Stripe webhook: checkout.session.completed for the $1,000 deposit Payment
// Links → deposit row + confirmation and owner emails (lib/deposits.ts).
// The signature is checked against the raw body; anything unverified is a 400.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[stripe] STRIPE_WEBHOOK_SECRET isn't set");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 });
  }
  const signature = req.headers.get("stripe-signature");
  const raw = await req.text(); // the exact bytes Stripe signed
  let event: Stripe.Event;
  try {
    // Verifying a signature needs no API key; the secret key is only a placeholder here.
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_unused");
    event = stripe.webhooks.constructEvent(raw, signature ?? "", secret);
  } catch (e) {
    console.warn("[stripe] rejected webhook:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") return NextResponse.json({ ignored: event.type });
  const session = event.data.object as Stripe.Checkout.Session;
  if (!isDeposit(session)) return NextResponse.json({ ignored: "not a deposit payment link" });

  const outcome = await recordDeposit(session);
  return NextResponse.json({ ok: outcome.status === 200, note: outcome.note }, { status: outcome.status });
}
