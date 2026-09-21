import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Problem from "@/components/sections/Problem";
import Mission from "@/components/sections/Mission";
import SuccessStories from "@/components/sections/SuccessStories";
import Offerings from "@/components/sections/Offerings";
import HowItWorks from "@/components/sections/HowItWorks";
import Tracks from "@/components/sections/Tracks";
import Testimonials from "@/components/sections/Testimonials";
import Standard from "@/components/sections/Standard";
import LeavesWith from "@/components/sections/LeavesWith";
import Founder from "@/components/sections/Founder";
import EventsSchedule from "@/components/sections/EventsSchedule";
import Comparison from "@/components/sections/Comparison";
import PriceBand from "@/components/sections/PriceBand";
import LatestArticles from "@/components/sections/LatestArticles";
import FaqList from "@/components/sections/FaqList";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";

export default function Home() {
  const sameAs = Object.values(site.socials).filter(Boolean);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: site.name,
          url: `https://${site.domain}`,
          logo: `https://${site.domain}/apple-icon`,
          description:
            "A 12-week program that teaches first- and second-year college students in Orange County how to land internships in finance, consulting, marketing, and tech.",
          email: site.email,
          address: { "@type": "PostalAddress", addressLocality: "Irvine", addressRegion: "CA", addressCountry: "US" },
          areaServed: "Orange County, California",
          founder: { "@type": "Person", name: site.founder.name, sameAs: [site.founder.linkedin] },
          ...(sameAs.length ? { sameAs } : {}),
        }}
      />
      <Hero />
      <Stats />
      <LogoMarquee />
      <Problem />
      <Mission />
      <Offerings />
      <HowItWorks />
      <Tracks />
      <SuccessStories eyebrow="Results" title="Success stories" flushBottom />
      <Testimonials compact />
      <Standard />
      <LeavesWith />
      <Founder />
      <EventsSchedule />
      <Comparison />
      <PriceBand />
      <LatestArticles />
      <FaqList />
      <FinalCta />
    </>
  );
}
