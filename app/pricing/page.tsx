import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { depositLine, site } from "@/content/site";
import { externshipBlock, offerOrRefund, pricingIncludes } from "@/content/program";
import FaqList from "@/components/sections/FaqList";
import Comparison from "@/components/sections/Comparison";
import PrimaryCTA, { CtaNote } from "@/components/PrimaryCTA";
import PaymentToggle from "@/components/PaymentToggle";
import ExternshipNote from "@/components/sections/ExternshipNote";
import VideoCard from "@/components/VideoCard";
import QuoteCard from "@/components/ui/QuoteCard";
import { tomQuotes } from "@/content/quotes";
import { videoAt, videosAt } from "@/content/videoTestimonials";
import { Check } from "@/components/Icons";

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description: `First Offer Academy tuition: ${site.cohort.price}, everything included. A ${site.cohort.deposit} deposit holds a seat, fully refundable through ${site.depositRefundDeadline}; the ${site.cohort.balance} balance is due before Week 1. Offer-or-refund.`,
});

export default function PricingPage() {
  const c = site.cohort;
  // Mangesh beside the price, Tom's quotes under the payment options, then the
  // "It was worth it." section: every worth-it clip.
  const priceVideo = videoAt("pricing-hero");
  const worthParents = videosAt("worth-parent-1", "worth-parent-2");
  const worthStudents = videosAt("worth-student-1", "worth-student-2", "worth-student-3", "worth-student-4");
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
          <article className="card price-card" aria-labelledby="price-title">
            <h2 id="price-title" className="sr-only">The price</h2>
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

            <div className="cta-block price-cta">
              <PrimaryCTA location="pricing" />
              <CtaNote />
            </div>
            <p className="hero-secondary"><a href="#payment" className="link-arrow">Reserve a seat or pay in full ↓</a></p>
            <p className="pay-note balance-note">
              Already paid the deposit? Your {c.balance} balance is due {c.balanceDue}. We&apos;ll email your balance link.
            </p>
            <div className="card refund-panel price-refund">
              <h3>{offerOrRefund.title}</h3>
              <p>{offerOrRefund.body}</p>
              <p className="refund-link"><a href="/faq#offer-or-refund">See refund terms</a></p>
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
          <PaymentToggle />
        </div>
      </section>

      <Comparison />

      {/* Tom's words on the price and on free mentoring, under the price and payment options. */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="What a parent said about the price">
        <div className="wrap">
          <ul className="quote-row">
            <li><QuoteCard {...tomQuotes.price} /></li>
            <li><QuoteCard {...tomQuotes.focus} /></li>
          </ul>
        </div>
      </section>

      {(worthParents.length > 0 || worthStudents.length > 0) && (
        <section className="section" id="worth-it" style={{ paddingTop: 0 }} aria-labelledby="worth-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="worth-title">It was worth it.</h2>
              <p className="lede">Parents and students, in their own words.</p>
            </div>
            {worthParents.length > 0 && (
              <div className="worth-row">
                <h3>Parents</h3>
                <ul className="worth-grid cols-2">
                  {worthParents.map((v) => <li key={v.youtubeId}><VideoCard video={v} /></li>)}
                </ul>
              </div>
            )}
            {worthStudents.length > 0 && (
              <div className="worth-row">
                <h3>Students</h3>
                <ul className="worth-grid cols-4">
                  {worthStudents.map((v) => <li key={v.youtubeId}><VideoCard video={v} /></li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <FaqList />
    </>
  );
}
