import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";
import { site } from "@/content/site";
import { depositEnabled } from "@/lib/deposit";

// Creates a Stripe Checkout Session for the refundable deposit. Only the
// deposit: there is no tuition flow on the site. 503 when STRIPE_SECRET_KEY
// isn't set.

const body = z.object({ email: z.email().optional().or(z.literal("")) }).partial();

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !depositEnabled()) return NextResponse.json({ error: "Not connected yet." }, { status: 503 });

  const parsed = body.safeParse(await req.json().catch(() => ({})));
  const email = parsed.success && parsed.data.email ? parsed.data.email : undefined;
  const origin = new URL(req.url).origin;
  const c = site.cohort;

  try {
    const session = await new Stripe(key).checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: c.depositCents,
            product_data: {
              name: `Refundable deposit: ${c.name}, ${c.start}`,
              description: `Holds one seat. Credited toward ${c.price} tuition. Refund terms: ${origin}/refunds`,
            },
          },
        },
      ],
      customer_email: email,
      customer_creation: "always",
      payment_intent_data: { description: `${site.name} deposit (${c.name}, ${c.start})`, metadata: { purpose: "deposit", cohort: c.start } },
      metadata: { purpose: "deposit", cohort: c.start },
      success_url: `${origin}/deposit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/deposit/canceled`,
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("[checkout] Stripe error:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
  }
}
