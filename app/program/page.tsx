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
    "How the 8-week First Offer Academy program works: six parts, a week-by-week plan, three tracks, and what we promise and don't.",
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
