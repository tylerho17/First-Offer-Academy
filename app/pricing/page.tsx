import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { included } from "@/content/program";
import LogoMarquee from "@/components/sections/LogoMarquee";
import FaqList from "@/components/sections/FaqList";
import CallLink from "@/components/CallLink";
import { Check } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "First Offer Academy tuition: $5,000 or 3 payments of $1,700, with a $1,000 refundable deposit to hold a seat. Free guides and events too.",
};

const free = [
  "The Playbook: free recruiting guides and templates",
  "Parent info sessions",
  "Free student workshops",
  "The First Offer newsletter",
];

export default function PricingPage() {
  const c = site.cohort;
  return (
    <>
      <section className="page-hero center-hero">
        <div className="wrap">
          <span className="proof-chip">{c.seats} seats · {c.name} · {c.start}</span>
          <h1>Clear pricing. <em>No surprises.</em></h1>
          <p className="lede">Start free. Join the 12-week program when your student is ready to run a real search.</p>
          <div className="tab-row">
            <a href="#plans" className="tab is-active">Plans</a>
            <a href="#payment" className="tab">Payment options</a>
            <a href="#faq" className="tab">FAQ</a>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="section" id="plans">
        <div className="wrap plans">
          <article className="card plan">
            <span className="eyebrow">Free</span>
            <h2 className="plan-price">$0</h2>
            <p className="plan-sub">For students and parents getting oriented.</p>
            <ul className="plan-list">
              {free.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>
            <div className="btn-row">
              <Link href="/blog" className="btn btn-secondary">Read the Playbook</Link>
            </div>
          </article>

          <article className="plan plan-featured">
            <div className="plan-flag">Founding cohort · {c.start}</div>
            <span className="eyebrow">12-week program</span>
            <h2 className="plan-price">{c.price}</h2>
            <p className="plan-sub">or {c.plan}. A {c.deposit} refundable deposit holds a seat.</p>
            <ul className="plan-list">
              {included.map((f) => <li key={f}><Check />{f}</li>)}
              <li><Check />A Week 12 family results meeting</li>
            </ul>
            <div className="btn-row">
              <Link href="/apply" className="btn btn-sage">Apply now</Link>
              <CallLink className="btn btn-cream-outline" />
            </div>
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
              <p>{site.refundTerms || "Refundable. Exact refund dates are published before deposits open."}</p>
              <p style={{ marginTop: 12 }}><Link href="/refunds">Refund &amp; payment policy →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <FaqList />
    </>
  );
}
