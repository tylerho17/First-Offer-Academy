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
import Founder from "@/components/sections/Founder";
import EventsSchedule from "@/components/sections/EventsSchedule";
import Comparison from "@/components/sections/Comparison";
import PriceBand from "@/components/sections/PriceBand";
import LatestArticles from "@/components/sections/LatestArticles";
import FaqList from "@/components/sections/FaqList";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
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
