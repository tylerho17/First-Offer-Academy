import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import LeavesWith from "@/components/sections/LeavesWith";
import Proof from "@/components/sections/Proof";
import FreeStrip from "@/components/sections/FreeStrip";
import PriceBand from "@/components/sections/PriceBand";
import FaqList from "@/components/sections/FaqList";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { liveSocialLinks } from "@/content/social";

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
            "An 8-week internship program for college freshmen and sophomores in finance, consulting, and marketing.",
          email: site.email,
          founder: { "@type": "Person", name: site.founder.name, sameAs: [site.founder.linkedin] },
          ...(sameAs.length ? { sameAs } : {}),
        }}
      />
      <Hero />
      <Problem />
      <LeavesWith />
      <Proof />
      <FreeStrip />
      <PriceBand />
      <FaqList />
    </>
  );
}
