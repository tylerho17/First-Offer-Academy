import type { Metadata } from "next";
import Link from "next/link";
import { parentsPage as p } from "@/content/parents";
import { afterProgram, weekly } from "@/content/program";
import LeavesWith from "@/components/sections/LeavesWith";
import ExternshipNote from "@/components/sections/ExternshipNote";
import { depositLine, site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import PayButton, { DepositNote } from "@/components/PayButton";
import FaqList from "@/components/sections/FaqList";
import ResourceBlock from "@/components/sections/ResourceBlock";
import EventCard from "@/components/EventCard";
import VideoCard from "@/components/VideoCard";
import VideoPair from "@/components/VideoPair";
import QuoteCard from "@/components/ui/QuoteCard";
import { tomQuotes } from "@/content/quotes";
import { videoAt, videosAt } from "@/content/videoTestimonials";
import { upcomingEvents } from "@/lib/events";
import PrimaryCTA, { CtaNote } from "@/components/PrimaryCTA";
import AvatarGroup from "@/components/AvatarGroup";
import { Check, Minus } from "@/components/Icons";

// Event dates come from Luma (lib/events.ts), refreshed hourly.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "For Parents",
  description: "For parents: what your student does each week in First Offer Academy, the progress reports you receive, payment and the deposit, and what we don't promise.",
};

export default async function ParentsPage() {
  const sessions = (await upcomingEvents("Parents")).slice(0, 2);
  // Ten parent clips, at most two per section, each beside the copy it proves.
  const heroVideo = videoAt("parents-hero");
  const skills = videosAt("parents-skills-1", "parents-skills-2"); // the weekly skill work
  const results = videosAt("parents-results-1", "parents-results-2"); // what parents see
  const growth = videosAt("parents-growth-1", "parents-growth-2"); // what the student leaves with
  const ctaVideo = videoAt("parents-before-cta");
  const callVideos = videosAt("parents-coach", "parents-relief"); // beside the call with Tyler
  const c = site.cohort;
  const quote = testimonials.find((t) => t.role === "parent" && t.permission && t.featured) ?? testimonials.find((t) => t.role === "parent" && t.permission);

  return (
    <>
      <section className="page-hero">
        <div className={`wrap${heroVideo ? " hero-split" : ""}`}>
          <div>
          <span className="eyebrow" style={{ display: "block" }}>{p.eyebrow}</span>
          <h1>{p.title}</h1>
          <p className="lede">{p.lede}</p>
          <ul className="parent-see">
            <li><Check />A one-page progress report every two weeks</li>
            <li><Check />The Week 8 family meeting, where your student presents their results</li>
            <li><Check />Weekly check-ins and mocks after Week 12, until an offer or {afterProgram.until}</li>
          </ul>
          <div className="cta-block">
            <PrimaryCTA location="parents" />
            <CtaNote />
          </div>
          <AvatarGroup />
          <p className="hero-secondary">
            <PayButton className="link-arrow">Reserve a seat · {c.deposit} →</PayButton>
            <Link href="/program" className="link-arrow">See the full program →</Link>
          </p>
          </div>
          {heroVideo && <VideoCard video={heroVideo} size="hero" />}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="section-head">
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
          <VideoPair videos={skills} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>{p.youSee.title}</h2>
          </div>
          <div className="grid grid-2">
            {p.youSee.items.map((i) => (
              <div className="card" key={i.title}>
                <span className="icon-dot"><Check /></span>
                <h3>{i.title}</h3>
                <p>{i.body}</p>
              </div>
            ))}
          </div>
          <VideoPair videos={results} />
        </div>
      </section>


      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card timing-card">
            <h3>{p.timing.title}</h3>
            <p>{p.timing.body}</p>
          </div>
          <ExternshipNote block={p.externship} />
        </div>
      </section>

      <LeavesWith videos={growth} after={<QuoteCard {...tomQuotes.growth} />} />

      <section className="section band" id="payment">
        <div className="wrap price-grid">
          <div>
            <span className="eyebrow">Payment and deposit</span>
            <h2>{c.name} · {c.start}</h2>
            <ul className="checks">
              <li><Check />{c.price}, everything included</li>
              <li><Check />A {c.deposit} deposit holds a seat and counts toward tuition. It&apos;s fully refundable through {site.depositRefundDeadline}.</li>
              <li><Check />The {c.balance} balance is due {c.balanceDue}</li>
              <li><Check />Payments are processed by Stripe; we never see your card number</li>
            </ul>
            <div className="btn-row">
              <PrimaryCTA location="parents" tone="navy-band" />
            </div>
            <p style={{ marginTop: 12 }}><PayButton className="band-link">Reserve a seat · {c.deposit} →</PayButton></p>
            <DepositNote />
            <p style={{ marginTop: 16 }}>
              <Link href="/refunds" className="band-link">Read the Refund &amp; Payment Policy</Link>
            </p>
          </div>
          <div className="price-box">
            <span className="amount">{c.price}</span>
            <span className="plan">everything included</span>
            <span className="seats">{c.seats} seats. {depositLine()}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>{p.dont.title}</h2>
            <p className="lede">{p.dont.body}</p>
            <p style={{ marginTop: 20 }}><Link href="/program#promise" className="link-arrow">Read our full promise →</Link></p>
          </div>
          <div className="dont-side">
          <ul className="card dont-card">
            <li><Minus />An internship offer</li>
            <li><Minus />An internship at a specific company</li>
            <li><Minus />Any particular outcome or timeline</li>
            <li className="is-yes"><Check />A fully executed, documented search</li>
            <li className="is-yes"><Check />Offer-or-refund, if every weekly minimum is met</li>
          </ul>
          {ctaVideo && <VideoCard video={ctaVideo} />}
          </div>
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

      <ResourceBlock audience="parents" />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {sessions.length > 0 && (
            <div className="parent-sessions">
              <div className="section-head row-head">
                <div>
                  <span className="eyebrow">Free parent sessions</span>
                  <h2>Ask your questions live</h2>
                </div>
                <Link href="/events" className="link-arrow">All events →</Link>
              </div>
              <div className="event-list">
                {sessions.map((e) => <EventCard key={e.id} e={e} page="parents" />)}
              </div>
            </div>
          )}
          <VideoPair videos={callVideos} className="before-call" />
          <div className="card call-card" id="call">
            <div>
              <h2>Book a parent call</h2>
              <p>{site.callNote}</p>
            </div>
            <PrimaryCTA location="parents" />
          </div>
        </div>
      </section>

      <FaqList parent title="Questions parents ask" />
    </>
  );
}
