import type { Metadata } from "next";
import Image from "next/image";
import CallLink from "@/components/CallLink";
import LinkedInLink from "@/components/LinkedInLink";
import VideoCard from "@/components/VideoCard";
import Stat from "@/components/ui/Stat";
import Timeline, { type TimelineItem } from "@/components/ui/Timeline";
import Disclosure from "@/components/ui/Disclosure";
import PullQuote from "@/components/ui/PullQuote";
import CTABanner from "@/components/ui/CTABanner";
import { founder, shownCredentials, storyParagraph2, type Experience } from "@/content/founder";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Who's coaching your student: ${founder.name}, ${founder.title.toLowerCase()} of First Offer Academy. ${founder.education.field} at ${founder.education.school}, and an incoming 2027 investment banking summer analyst.`,
};

const BADGES: Partial<Record<Experience["status"], { label: string; tone: "navy" | "sage" }>> = {
  current: { label: "Current", tone: "sage" },
  incoming: { label: "Incoming", tone: "navy" },
};
const toItem = (e: Experience): TimelineItem => ({ title: e.org, subtitle: e.role, meta: e.dates, detail: e.detail, badge: BADGES[e.status] });

// The newest three roles show; the rest sit in "Earlier experience".
const SHOWN = 3;

// /about: who's coaching your student. One content column and one left edge
// for every section; Tyler's photo appears once, in the hero. Every fact comes
// from content/founder.ts.
export default function AboutPage() {
  const recent = founder.experience.slice(0, SHOWN);
  const earlier = founder.experience.slice(SHOWN);
  const creds = shownCredentials();
  const missingCreds = founder.credentials.filter((c) => !c.value.trim());
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
            <p className="lede">{founder.oneLiner}</p>
            <p style={{ marginTop: 18 }}><LinkedInLink /></p>
          </div>
          <div className="founder-photo">
            <Image src="/images/tyler.jpg" alt={`${founder.name}, ${founder.title.toLowerCase()} of First Offer Academy`} width={800} height={903} sizes="(min-width: 900px) 440px, 90vw" priority />
          </div>
        </div>
      </section>

      <div className="wrap about">
        {/* 2. Credentials */}
        <section aria-label="Credentials" className="about-section">
          <div className="about-creds" style={{ ["--n" as string]: creds.length + (site.showPlaceholders ? missingCreds.length : 0) } as React.CSSProperties}>
            {creds.map((c) => <Stat key={c.label} value={c.value} label={c.label} />)}
            {site.showPlaceholders && missingCreds.map((c) => <Stat key={c.label} value="TODO(Tyler)" label={c.label} className="is-todo" />)}
          </div>
        </section>

        {/* 3. Experience */}
        <section aria-labelledby="worked-title" className="about-section">
          <h2 id="worked-title">Where I&apos;ve worked</h2>
          <Timeline items={recent.map(toItem)} />
          {earlier.length > 0 && (
            <Disclosure summary={`Earlier experience (${earlier.length})`} className="about-earlier">
              <Timeline items={earlier.map(toItem)} />
            </Disclosure>
          )}
        </section>

        {/* 4. Education & leadership */}
        <section aria-labelledby="edu-title" className="about-section">
          <h2 id="edu-title">Education &amp; leadership</h2>
          <p className="about-school"><strong>{founder.education.school}</strong> · {founder.education.field}</p>
          <ul className="about-leadership">
            {founder.leadership.map((l) => <li key={l.fallback}>{founder.showNamedLeadership ? l.named : l.fallback}</li>)}
          </ul>
        </section>

        {/* 5. My story */}
        <section aria-labelledby="story-title" className="about-section about-prose">
          <h2 id="story-title">My story</h2>
          <p>{founder.story.p1}</p>
          <PullQuote>{founder.story.pullQuote}</PullQuote>
          <p>{storyParagraph2()}</p>
          <p>{founder.story.p3}</p>
        </section>

        {/* 6. Why a recent recruit is the right coach (FAQ answer, no video) */}
        {recentRecruit && (
          <section aria-labelledby="recent-title" className="about-section about-prose">
            <h2 id="recent-title">Why a recent recruit is the right coach</h2>
            <p>{recentRecruit.a}</p>
          </section>
        )}

        {/* 7. Intro video: renders only once a real YouTube id is set */}
        {intro && (
          <section className="about-section about-video">
            <VideoCard video={intro} size="hero" />
          </section>
        )}

        {/* 8. CTA */}
        <section className="about-section">
          <CTABanner
            title="Book a parent call"
            body="Twenty minutes with Tyler to talk through your student's situation and whether the program fits."
            action={<CallLink className="btn btn-primary">Book a call with Tyler</CallLink>}
          />
        </section>
      </div>
    </>
  );
}
