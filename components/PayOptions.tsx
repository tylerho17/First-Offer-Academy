import Link from "next/link";
import { site } from "@/content/site";

// The only place Stripe payment links are rendered. The refund line is part of
// this component on purpose: a page cannot show a payment button without it.
// URLs live in content/site.ts (site.stripe); never paste one into a page.

function PayNote() {
  return (
    <p className="pay-note">
      Fully refundable until {site.depositRefundDeadline}.{" "}
      <Link href="/terms">Read the enrollment terms →</Link>
    </p>
  );
}

export default function PayOptions({ className = "" }: { className?: string }) {
  const c = site.cohort;
  return (
    <div className={`pay-options ${className}`.trim()}>
      <a href={site.stripe.deposit} className="btn btn-primary" target="_blank" rel="noopener noreferrer" data-event="deposit_click">
        Hold a seat — {c.deposit} deposit
      </a>
      <p className="pay-alts">
        <a href={site.stripe.full} target="_blank" rel="noopener noreferrer" data-event="pay_full_click">Pay in full ({c.price})</a>
        <span aria-hidden="true"> · </span>
        <a href={site.stripe.plan} target="_blank" rel="noopener noreferrer" data-event="pay_plan_click">Pay in three ($1,700 × 3)</a>
      </p>
      <PayNote />
    </div>
  );
}
