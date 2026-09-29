import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import ResultsGrid from "@/components/sections/ResultsGrid";
import EmployerGrid from "@/components/sections/EmployerGrid";
import FinalCta from "@/components/sections/FinalCta";
import { permittedResults } from "@/content/results";

export const metadata: Metadata = {
  title: "Results",
  description: "Pilot results, student outcomes, and parent videos from First Offer Academy, each shared with written permission.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Real students. Their words, with their permission."
        lede="Every card on this page is from a student or parent who agreed in writing to share it."
      />
      <Stats />
      <section className="section" style={{ paddingTop: 24 }} id="results">
        <div className="wrap">
          <h2 className="sr-only">Outcomes and parent videos</h2>
          <ResultsGrid items={permittedResults()} filters />
        </div>
      </section>
      <EmployerGrid />
      <div style={{ paddingTop: 40 }}><FinalCta /></div>
    </>
  );
}
