import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import LeavesWith from "@/components/sections/LeavesWith";
import Testimonials from "@/components/sections/Testimonials";
import HomeParent from "@/components/sections/HomeParent";
import Stats from "@/components/sections/Stats";
import LogoMarquee from "@/components/sections/LogoMarquee";
import EventsStrip from "@/components/sections/EventsStrip";
import PriceBand from "@/components/sections/PriceBand";
import HowItWorks from "@/components/sections/HowItWorks";
import OfferOrRefund from "@/components/sections/OfferOrRefund";
import FaqList from "@/components/sections/FaqList";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { liveSocialLinks } from "@/content/social";

// Event dates come from Luma (lib/events.ts), refreshed hourly.
export const revalidate = 3600;

export default function Home() {
  const sameAs = liveSocialLinks().map((s) => s.url);
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
            "Internship coaching for college freshmen and sophomores in Finance, Marketing, and Accounting: Week 0 pre-work, 8 weeks of training, a 4-week Offer Sprint, then weekly check-ins and mocks until an offer.",
          email: site.email,
          founder: { "@type": "Person", name: site.founder.name, sameAs: [site.founder.linkedin] },
          ...(sameAs.length ? { sameAs } : {}),
        }}
      />
      <Hero />
      <Stats />
      <LogoMarquee />
      <HowItWorks />
      <Problem />
      <LeavesWith />
      <Testimonials />
      <HomeParent />
      <PriceBand />
      <OfferOrRefund />
      <EventsStrip />
      <FaqList />
    </>
  );
}
