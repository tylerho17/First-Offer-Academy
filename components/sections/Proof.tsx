import Link from "next/link";
import { permittedResults } from "@/content/results";
import ResultsGrid from "./ResultsGrid";

// Homepage results: up to 6 student outcome cards, plus the lead parent video.
export default function Proof() {
  const all = permittedResults();
  const students = all.filter((r) => r.kind === "student").slice(0, 6);
  const leadParent = all.find((r) => r.kind === "parent");
  const items = [...students, ...(leadParent ? [leadParent] : [])];
  if (items.length === 0) return null;

  return (
    <section className="section" id="results" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head row-head">
          <div>
            <span className="eyebrow">Results</span>
            <h2>{students.length ? "What students did, and what parents saw." : "What changed, in a parent's words."}</h2>
          </div>
          <Link href="/results" className="link-arrow">See all results →</Link>
        </div>
        <ResultsGrid items={items} />
      </div>
    </section>
  );
}
