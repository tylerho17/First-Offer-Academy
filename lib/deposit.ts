import { site } from "@/content/site";

// The deposit button shows only when Stripe is configured AND the refund
// deadline is published. /refunds promises the terms are in writing before
// anyone pays, so no key + terms, no checkout.
// Pages read this at build time: redeploy after adding STRIPE_SECRET_KEY.
export const depositEnabled = () => !!process.env.STRIPE_SECRET_KEY && !!site.depositRefundDeadline;
