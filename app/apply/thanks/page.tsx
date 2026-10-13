import type { Metadata } from "next";
import PrimaryCTA from "@/components/PrimaryCTA";
import PayButton from "@/components/PayButton";

export const metadata: Metadata = {
  title: "Application received",
  robots: { index: false, follow: false },
};

// After /apply: the call first. The refundable deposit (the existing Stripe
// deposit link) is offered only to families who've already spoken with us.
export default function ApplyThanksPage() {
  return (
    <section className="page-hero">
      <div className="wrap apply-thanks">
        <span className="eyebrow">Application received</span>
        <h1>Thanks — next step is a 20-minute call with Tyler.</h1>
        <div className="cta-block">
          <PrimaryCTA location="apply">Book your call</PrimaryCTA>
        </div>
        <p className="apply-thanks-deposit">
          Already spoken with us? <PayButton className="">Reserve your seat with the refundable deposit.</PayButton>
        </p>
      </div>
    </section>
  );
}
