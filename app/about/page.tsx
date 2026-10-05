import type { Metadata } from "next";
import Image from "next/image";
import CallLink from "@/components/CallLink";
import LinkedInLink from "@/components/LinkedInLink";
import VideoCard from "@/components/VideoCard";
import { founder } from "@/content/founder";
import { faqs } from "@/content/faq";
import { PILOT_LANDED, PILOT_STUDENTS, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Who's coaching your student: Tyler Ho, founder of First Offer Academy. ${founder.internships}, ${PILOT_STUDENTS} pilot students coached, and an ${founder.role.toLowerCase()}.`,
};

// A dashed, labeled box for copy Tyler still has to write. Development only:
// a production build renders nothing in its place.
function Todo({ label }: { label: string }) {
  if (!site.showPlaceholders) return null;
  return (
    <div className="slot" style={{ minHeight: 64 }}>
      <span className="slot-tag">TODO(Tyler)</span>
      {label}
    </div>
  );
}

// /about: who's coaching your student. Tyler's photo appears once, in the hero.
export default function AboutPage() {
  const pct = Math.round((PILOT_LANDED / PILOT_STUDENTS) * 100);
  const credentials = [founder.internships, `${PILOT_STUDENTS} pilot students, ${pct}% landed an internship or offer`, founder.role];
  // The "recent recruit" answer is reused from the FAQ; its clip stays in the FAQ.
  const recentRecruit = faqs.find((f) => f.id === "recent-recruit");
  const intro = founder.introVideoId
    ? { youtubeId: founder.introVideoId, person: "Tyler", kind: "student" as const, title: "Meet Tyler", spot: "about-intro" as const }
    : null;

  return (
    <>
      {/* 1. Hero */}
      <section className="page-hero">
        <div className="wrap hero-split about-hero">
          <div>
            <span className="eyebrow">About</span>
            <h1>Hi, I&apos;m Tyler.</h1>
            {founder.why ? <p className="lede">{founder.why}</p> : <Todo label="One-line why" />}
            <p style={{ marginTop: 18 }}><LinkedInLink /></p>
          </div>
          <div className="founder-photo">
            <Image src="/images/tyler.jpg" alt="Tyler Ho, founder of First Offer Academy" width={800} height={903} sizes="(min-width: 900px) 440px, 90vw" priority />
          </div>
        </div>
      </section>

      {/* 2. Credential strip */}
      <section className="section-tight" aria-label="Tyler's credentials">
        <div className="wrap">
          <ul className="about-creds">
            {credentials.map((c) => <li className="card" key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      {/* 3. Where I've worked: only firms Tyler approves naming */}
      {(founder.firms.length > 0 || site.showPlaceholders) && (
        <section className="section" style={{ paddingBottom: 0 }} aria-labelledby="worked-title">
          <div className="wrap">
            <h2 id="worked-title">Where I&apos;ve worked</h2>
            {founder.firms.length > 0 ? (
              <ul className="about-firms">{founder.firms.map((f) => <li key={f}>{f}</li>)}</ul>
            ) : (
              <Todo label="Firm list (approve which to name)" />
            )}
          </div>
        </section>
      )}

      {/* 4. My story */}
      <section className="section" aria-labelledby="story-title">
        <div className="wrap about-story">
          <h2 id="story-title">My story</h2>
          {founder.story.map((p, i) => (p.text ? <p key={i}>{p.text}</p> : <Todo key={i} label={`Story paragraph ${i + 1}`} />))}
        </div>
      </section>

      {/* 5. Why a recent recruit is the right coach (FAQ answer, no video) */}
      {recentRecruit && (
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="recent-title">
          <div className="wrap about-story">
            <h2 id="recent-title">Why a recent recruit is the right coach</h2>
            <p>{recentRecruit.a}</p>
          </div>
        </section>
      )}

      {/* 6. Intro video: renders only once a real YouTube id is set */}
      {intro && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap about-video"><VideoCard video={intro} size="hero" /></div>
        </section>
      )}

      {/* 7. CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card call-card">
            <div>
              <h2>Book a parent call</h2>
              <p>Twenty minutes with Tyler to talk through your student&apos;s situation and whether the program fits.</p>
            </div>
            <CallLink className="btn btn-primary">Book a call with Tyler</CallLink>
          </div>
        </div>
      </section>
    </>
  );
}
