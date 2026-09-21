import type { Metadata } from "next";
import { modules } from "@/content/programOverview";
import ProgramHero from "@/components/sections/program/ProgramHero";
import WhoFor from "@/components/sections/program/WhoFor";
import LeavesWith from "@/components/sections/LeavesWith";
import WeeklyFormat from "@/components/sections/program/WeeklyFormat";
import BookingBand from "@/components/sections/program/BookingBand";
import Helps from "@/components/sections/program/Helps";
import WhyNow from "@/components/sections/program/WhyNow";
import ModuleSection from "@/components/sections/program/ModuleSection";
import Together from "@/components/sections/program/Together";
import SuccessStories from "@/components/sections/SuccessStories";
import Comparison from "@/components/sections/Comparison";
import Syllabus from "@/components/sections/program/Syllabus";
import PromiseCta from "@/components/sections/program/PromiseCta";

export const metadata: Metadata = {
  title: "The Program",
  description:
    "How the 12-week First Offer Academy program works: six parts, a weekly 90-minute session and 60-minute 1:1, graded mock interviews, and a documented internship search.",
};

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <WhoFor />
      <LeavesWith />
      <BookingBand />
      <Helps />
      <WhyNow />
      <WeeklyFormat />
      {modules.map((m, i) => <ModuleSection key={m.slug} m={m} n={i + 1} />)}
      <Together />
      <SuccessStories title="See what students are saying." flush />
      <Comparison />
      <Syllabus />
      <PromiseCta />
    </>
  );
}
