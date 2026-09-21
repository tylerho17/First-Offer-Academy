import type { Metadata } from "next";
import Link from "next/link";
import { parentsPage as p } from "@/content/parents";
import { weekly } from "@/content/program";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import Ornament from "@/components/Ornament";
import CallLink from "@/components/CallLink";
import FaqList from "@/components/sections/FaqList";
import { Check, Minus } from "@/components/Icons";

export const metadata: Metadata = {
  title: "For Parents",
  description: "For parents: what your student does each week in First Offer Academy, the progress reports you receive, payment and the refundable deposit, and what we don't promise.",
};

export default function ParentsPage() {
  const c = site.cohort;
  const quote = testimonials.find((t) => t.role === "parent" && t.permission && t.featured) ?? testimonials.find((t) => t.role === "parent" && t.permission);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>{p.eyebrow}</span>
          <h1>{p.title}</h1>
          <p className="lede">{p.lede}</p>
          <div className="btn-row">
            <CallLink className="btn btn-primary">Book a parent call</CallLink>
            <Link href="/program" className="btn btn-secondary">See the full program</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="section-head">
            <Ornament />
            <h2>{p.weekly.title}</h2>
            <p className="lede">{p.weekly.note}</p>
          </div>
          <div className="grid grid-3">
            {weekly.map((w) => (
              <div className="card" key={w.name}>
                <span className="eyebrow">Every week</span>
                <h3>{w.name}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Ornament />
            <h2>{p.youSee.title}</h2>
          </div>
          <div className="grid grid-3">
            {p.youSee.items.map((i) => (
              <div className="card" key={i.title}>
                <span className="icon-dot"><Check /></span>
                <h3>{i.title}</h3>
                <p>{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" id="payment">
        <div className="wrap price-grid">
          <div>
            <span className="eyebrow">Payment and deposit</span>
            <h2>{c.name} · {c.start}</h2>
            <ul className="checks">
              <li><Check />Pay in full: {c.price}</li>
              <li><Check />Or a payment plan: {c.plan}</li>
              <li><Check />A {c.deposit} refundable deposit holds a seat and counts toward tuition</li>
              <li><Check />Payments are processed by Stripe; we never see your card number</li>
            </ul>
            <p style={{ marginTop: 24 }}>
              <Link href="/refunds" className="band-link">Read the Refund &amp; Payment Policy</Link>
            </p>
          </div>
          <div className="price-box">
            <span className="amount">{c.price}</span>
            <span className="plan">or {c.plan}</span>
            <span className="seats">{c.seats} seats. A {c.deposit} refundable deposit holds your spot.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <Ornament />
            <h2>{p.dont.title}</h2>
            <p className="lede">{p.dont.body}</p>
            <p style={{ marginTop: 20 }}><Link href="/our-promise" className="link-arrow">Read our full promise →</Link></p>
          </div>
          <ul className="card dont-card">
            <li><Minus />An internship offer</li>
            <li><Minus />An internship at a specific company</li>
            <li><Minus />Any particular outcome or timeline</li>
            <li className="is-yes"><Check />A fully executed, documented search</li>
          </ul>
        </div>
      </section>

      {quote ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <figure className="card parent-quote">
              <blockquote>{quote.quote}</blockquote>
              <figcaption className="who"><div><strong>{quote.name}</strong>Parent</div></figcaption>
            </figure>
          </div>
        </section>
      ) : site.showPlaceholders ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="slot" style={{ minHeight: 160 }}>
              <span className="slot-tag">Placeholder</span>
              Parent testimonial
              <small>One parent, in their own words, with written permission</small>
            </div>
          </div>
        </section>
      ) : null}

      <FaqList parent title="Questions parents ask" />
    </>
  );
}
