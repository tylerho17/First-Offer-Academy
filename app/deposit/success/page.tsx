import type { Metadata } from "next";
import Link from "next/link";
import Ornament from "@/components/Ornament";
import CallLink from "@/components/CallLink";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Deposit received", robots: { index: false, follow: false } };

export default function DepositSuccessPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="card contact-card" style={{ textAlign: "center" }}>
          <Ornament className="is-center" />
          <h1>Your seat is held.</h1>
          <p className="lede center">
            Thank you. Your {site.cohort.deposit} refundable deposit went through, and Stripe will email you a receipt.
            It counts toward tuition for the {site.cohort.name.toLowerCase()} ({site.cohort.start}).
          </p>
          <p style={{ marginTop: 16 }}>Tyler will be in touch with next steps. Refund terms are in the <Link href="/refunds">Refund &amp; Payment Policy</Link>.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <CallLink className="btn btn-primary">Book a call with Tyler</CallLink>
            <Link href="/program" className="btn btn-secondary">Review the program</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
