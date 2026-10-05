import type { Metadata } from "next";
import Image from "next/image";
import CallLink from "@/components/CallLink";
import LinkedInLink from "@/components/LinkedInLink";
import VideoCard from "@/components/VideoCard";
import Stat from "@/components/ui/Stat";
import LogoTile from "@/components/ui/LogoTile";
import CTABanner from "@/components/ui/CTABanner";
import { founder, shownCredentials, storyParagraph2, type Experience } from "@/content/founder";

export const metadata: Metadata = {
  title: "About",
  description: `Who's coaching your student: ${founder.name}, ${founder.title.toLowerCase()} of First Offer Academy. ${founder.education.field} at ${founder.education.school}, and an incoming 2027 investment banking summer analyst.`,
};

const BADGES: Partial<Record<Experience["status"], { label: string; tone: "navy" | "sage" }>> = {
  current: { label: "Current", tone: "sage" },
  incoming: { label: "Incoming", tone: "navy" },
};

// /about, compact: about two screens on desktop. Every section shares one
// left edge and one max-width (.wrap). Tyler's photo appears once. Every fact
// comes from content/founder.ts; an empty field renders nothing.
export default function AboutPage() {
  const intro = founder.introVideoId
    ? { youtubeId: founder.introVideoId, person: "Tyler", kind: "student" as const, title: "Meet Tyler", spot: "about-intro" as const }
    : null;

  return (
    <div className="wrap about">
      {/* 1. Hero row: photo · name and one-liner · the stats, stacked */}
      <section className="about-top" aria-labelledby="about-title">
        <div className="about-photo">
          <Image src="/images/tyler.jpg" alt={`${founder.name}, ${founder.title.toLowerCase()} of First Offer Academy`} width={800} height={903} sizes="(min-width: 1024px) 280px, 240px" priority />
        </div>
        <div className="about-intro">
          <span className="eyebrow">About</span>
          <h1 id="about-title">Hi, I&apos;m Tyler.</h1>
          <p className="lede">{founder.oneLiner}</p>
          <p className="about-title-line">{founder.name} · {founder.title}</p>
          <p><LinkedInLink /></p>
        </div>
        <div className="about-stats" aria-label="Credentials">
          {shownCredentials().map((c) => <Stat key={c.label} value={c.value} label={c.label} />)}
        </div>
      </section>

      {/* 2. Where I've worked: a logo wall, newest first (4, then 3 centered) */}
      <section className="about-section" aria-labelledby="worked-title">
        <h2 id="worked-title">Where I&apos;ve worked</h2>
        <ul className="about-logos">
          {founder.experience.map((e) => (
            <li key={e.org}>
              <LogoTile name={e.org} caption={e.caption} logo={e.logo} ratio={e.logoRatio} mono={e.logoMono} monogram={e.monogram} badge={BADGES[e.status]} />
            </li>
          ))}
        </ul>
      </section>

      {/* 3. My story beside Education & leadership */}
      <section className="about-section about-split">
        <div className="about-prose" aria-labelledby="story-title">
          <h2 id="story-title">My story</h2>
          <p>{founder.story.p1}</p>
          <p>{storyParagraph2()} {founder.story.p3}</p>
        </div>
        <div aria-labelledby="edu-title">
          <h2 id="edu-title">Education &amp; leadership</h2>
          <p className="about-school"><strong>{founder.education.school}</strong> · {founder.education.field}</p>
          <ul className="about-leadership">
            {founder.leadership.map((l) => <li key={l.fallback}>{founder.showNamedLeadership ? l.named : l.fallback}</li>)}
          </ul>
        </div>
      </section>

      {/* Intro video: renders only once a real YouTube id is set */}
      {intro && (
        <section className="about-section about-video">
          <VideoCard video={intro} size="hero" />
        </section>
      )}

      <section className="about-section">
        <CTABanner
          title="Book a parent call"
          body="Twenty minutes with Tyler to talk through your student's situation and whether the program fits."
          action={<CallLink className="btn btn-primary">Book a call with Tyler</CallLink>}
        />
      </section>
    </div>
  );
}
