import type { Metadata } from "next";
import ProgramHero from "@/components/sections/program/ProgramHero";
import SixParts from "@/components/sections/program/SixParts";
import WeekPlan from "@/components/sections/program/WeekPlan";
import TrackCards from "@/components/sections/program/TrackCards";
import OurPromise from "@/components/sections/program/OurPromise";
import ProgramCta from "@/components/sections/program/ProgramCta";

export const metadata: Metadata = {
  title: "The Program",
  description:
    "How First Offer Academy works: Week 0 pre-work, a 12-week program (Weeks 1–8 core teaching on six parts, Weeks 9–12 mocks and networking), weekly check-ins and mocks every other week until an offer, three tracks, and offer-or-refund.",
};

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <SixParts />
      <WeekPlan />
      <TrackCards />
      <OurPromise />
      <ProgramCta />
    </>
  );
}
