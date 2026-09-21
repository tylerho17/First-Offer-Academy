import type { Metadata } from "next";
import Link from "next/link";
import Ornament from "@/components/Ornament";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = { title: "Deposit not completed", robots: { index: false, follow: false } };

export default function DepositCanceledPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="card contact-card" style={{ textAlign: "center" }}>
          <Ornament className="is-center" />
          <h1>No payment was taken.</h1>
          <p className="lede center">You left checkout before paying, so nothing was charged. If you have questions before holding a seat, talk them through with Tyler.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <CallLink className="btn btn-primary">Book a call with Tyler</CallLink>
            <Link href="/pricing" className="btn btn-secondary">Back to pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
