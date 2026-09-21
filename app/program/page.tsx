import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import Tracks from "@/components/sections/Tracks";
import Standard from "@/components/sections/Standard";
import PriceBand from "@/components/sections/PriceBand";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = { title: "The Program" };

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="The program"
        title="Twelve weeks from zero to a fully executed internship search."
        lede="Built for first- and second-year students who are starting from nothing: no club, no network, no idea where to begin. Every week has a skill, a number to hit, and a coach checking the work."
      />
      <div style={{ paddingTop: 48 }}><HowItWorks /></div>
      <Tracks />
      <Standard />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card" style={{ padding: "40px 32px" }}>
            <span className="eyebrow">Week 12</span>
            <h2>The family results meeting</h2>
            <p className="lede">
              The program ends with your student presenting their results to you: every email, call,
              and interview on record, plus their Week 1 and Week 12 recorded intros side by side.
            </p>
          </div>
        </div>
      </section>
      <PriceBand />
      <div style={{ paddingTop: 112 }}><FinalCta /></div>
    </>
  );
}
