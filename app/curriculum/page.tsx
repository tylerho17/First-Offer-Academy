import type { Metadata } from "next";
import Link from "next/link";
import Ornament from "@/components/Ornament";
import CallLink from "@/components/CallLink";
import WeekGrid from "@/components/curriculum/WeekGrid";
import WeeklyRhythm from "@/components/curriculum/WeeklyRhythm";
import BookingBand from "@/components/sections/program/BookingBand";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "The First Offer Academy curriculum, week by week: what we teach, the live reps, the 60-minute 1:1 focus, the weekly minimum, and the level each week reaches.",
};

export default function CurriculumPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Curriculum</span>
          <h1>Twelve weeks, one week at a time.</h1>
          <p className="lede">
            Every week has an objective, a skill taught, live reps, a 60-minute 1:1, and a number to hit. Open any week
            to see exactly what your student does and what you&apos;ll see as a parent.
          </p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply</Link>
            <CallLink />
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <WeekGrid />
        </div>
      </section>
      <WeeklyRhythm />
      <BookingBand />
    </>
  );
}
