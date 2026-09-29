import type { Metadata } from "next";
import Link from "next/link";
import { depositLine, site } from "@/content/site";
import { balance } from "@/lib/payments";
import { externshipBlock, pricingIncludes } from "@/content/program";
import FaqList from "@/components/sections/FaqList";
import CallLink from "@/components/CallLink";
import ExternshipNote from "@/components/sections/ExternshipNote";
import PayOptions from "@/components/PayOptions";
import VideoTestimonial from "@/components/VideoTestimonial";
import { videosFor } from "@/content/videoTestimonials";
import { Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: `First Offer Academy tuition: ${site.cohort.price} for the 8-week program, or ${site.cohort.plan}, with a ${site.cohort.deposit} deposit to hold a seat, refundable until ${site.depositRefundDeadline}.`,
};

export default function PricingPage() {
  const c = site.cohort;
  const priceVideo = videosFor("pricing")[0];
  return (
    <>
      <section className="page-hero center-hero">
        <div className="wrap">
          <span className="proof-chip">{c.seats} seats · {c.name} · {c.start}</span>
          <h1>Clear pricing. <em>No surprises.</em></h1>
          <p className="lede">One program, one price. Join the 8-week program when your student is ready to run a real search.</p>
          <div className="tab-row">
            <a href="#plan" className="tab is-active">The price</a>
            <a href="#payment" className="tab">Payment options</a>
            <a href="#faq" className="tab">FAQ</a>
          </div>
        </div>
      </section>

      <section className="section" id="plan" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <article className="card price-card">
            <span className="eyebrow">8-week program</span>
            <p className="price-amount">{c.price}</p>
            <p className="price-sub">for the 8-week program, or {c.plan}</p>
            <p className="price-line">{depositLine()}</p>
            <p className="price-line">{c.name}: {c.start} · {c.seats} seats · {c.sections}</p>
            <p className="price-note">This is founding-cohort pricing. It goes up for the next cohort.</p>

            <p className="includes-title">What&apos;s included</p>
            <ul className="plan-list">
              {pricingIncludes.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>

            <ExternshipNote block={externshipBlock} />

            {priceVideo && <VideoTestimonial video={priceVideo} label="A parent on the price" />}

            <PayOptions className="price-pay" />
            <p className="pay-note balance-note">
              Already paid the deposit? Your balance is {balance.full}, or {balance.plan}. We&apos;ll email your balance link.
            </p>

            <div className="btn-row price-actions">
              <Link href="/apply" className="btn btn-secondary">Apply first</Link>
              <CallLink className="btn btn-secondary" />
            </div>
            <p className="price-free">
              Not ready? The Playbook, every template, parent info sessions, and student workshops are{" "}
              <Link href="/free-resources">free</Link>.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="payment" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Payment options</span>
            <h2>Three ways to pay</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Pay in full</h3>
              <p className="pay-amt">{c.price}</p>
              <p>One payment before the cohort starts.</p>
            </div>
            <div className="card">
              <h3>Payment plan</h3>
              <p className="pay-amt">{c.plan}</p>
              <p>Spread across the program.</p>
            </div>
            <div className="card">
              <h3>Hold a seat</h3>
              <p className="pay-amt">{c.deposit} deposit</p>
              <p>{site.refundTerms}</p>
              <p style={{ marginTop: 12 }}>Already paid it? Your balance is {balance.full}, or {balance.plan}. We&apos;ll email your balance link.</p>
              <p style={{ marginTop: 12 }}><Link href="/refunds">Refund &amp; payment policy →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <FaqList />
    </>
  );
}
