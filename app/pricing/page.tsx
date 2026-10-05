import type { Metadata } from "next";
import Link from "next/link";
import { depositLine, site } from "@/content/site";
import { externshipBlock, offerOrRefund, pricingIncludes } from "@/content/program";
import FaqList from "@/components/sections/FaqList";
import Comparison from "@/components/sections/Comparison";
import CallLink from "@/components/CallLink";
import ExternshipNote from "@/components/sections/ExternshipNote";
import PayOptions from "@/components/PayOptions";
import VideoCard from "@/components/VideoCard";
import { videoAt } from "@/content/videoTestimonials";
import { Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: `First Offer Academy tuition: ${site.cohort.price}, everything included. A ${site.cohort.deposit} deposit holds a seat, fully refundable through ${site.depositRefundDeadline}; the ${site.cohort.balance} balance is due before Week 1. Offer-or-refund.`,
};

export default function PricingPage() {
  const c = site.cohort;
  // The purchase section's three clips, all on whether it was worth it.
  const priceVideo = videoAt("pricing-hero");
  const worthPair = [videoAt("pricing-priceless"), videoAt("pricing-worth-student")].filter((v) => !!v);
  return (
    <>
      <section className="page-hero center-hero">
        <div className="wrap">
          <span className="proof-chip">{c.seats} seats · {c.name} · {c.start}</span>
          <h1>Clear pricing. <em>No surprises.</em></h1>
          <p className="lede">One program, one price, everything included: training, the Offer Sprint, and weekly check-ins and mocks until your student lands an offer.</p>
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
            <div className={priceVideo ? "price-top" : undefined}>
              <div>
                <span className="eyebrow">Everything included</span>
                <p className="price-amount">{c.price}</p>
                <p className="price-line">{depositLine()} The {c.balance} balance is due {c.balanceDue}.</p>
                <p className="price-line">{c.name}: {c.start} · {c.seats} seats</p>
              </div>
              {priceVideo && <VideoCard video={priceVideo} size="hero" />}
            </div>

            <p className="includes-title">What&apos;s included</p>
            <ul className="plan-list">
              {pricingIncludes.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>

            <ExternshipNote block={externshipBlock} />

            <PayOptions className="price-pay" />
            <p className="pay-note balance-note">
              Already paid the deposit? Your {c.balance} balance is due {c.balanceDue}. We&apos;ll email your balance link.
            </p>
            <div className="card refund-panel price-refund">
              <h3>{offerOrRefund.title}</h3>
              <p>{offerOrRefund.body}</p>
              <p className="refund-link"><a href="/faq#offer-or-refund">See refund terms</a></p>
            </div>

            <div className="btn-row price-actions">
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
            <h2>Two ways to pay</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Pay in full</h3>
              <p className="pay-amt">{c.price}</p>
              <p>One payment before Week 1.</p>
            </div>
            <div className="card">
              <h3>Reserve a seat</h3>
              <p className="pay-amt">{c.deposit} deposit</p>
              <p>{site.refundTerms}</p>
              <p style={{ marginTop: 12 }}>Already paid it? We&apos;ll email your {c.balance} balance link.</p>
              <p style={{ marginTop: 12 }}><Link href="/refunds">Refund &amp; payment policy →</Link></p>
            </div>
          </div>
          {/* A parent and a student on whether it was worth it, side by side
              (stacked on mobile), right under the payment options. */}
          {worthPair.length > 0 && (
            <div className="video-pair">
              {worthPair.map((v) => <VideoCard key={v.youtubeId} video={v} />)}
            </div>
          )}
        </div>
      </section>

      <Comparison />
      <FaqList />
    </>
  );
}
