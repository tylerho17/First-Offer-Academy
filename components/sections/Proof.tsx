import Link from "next/link";
import { permittedResults } from "@/content/results";
import ResultsGrid from "./ResultsGrid";

// Homepage results: up to 3 student cards plus 1 parent video, two columns.
export default function Proof() {
  const all = permittedResults();
  const students = all.filter((r) => r.type === "student").slice(0, 3);
  const leadParent = all.find((r) => r.type === "parent");
  const items = [...students, ...(leadParent ? [leadParent] : [])];
  if (items.length === 0) return null;

  return (
    <section className="section" id="results" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head row-head">
          <div>
            <span className="eyebrow">Results</span>
            <h2>What changed, in their words.</h2>
          </div>
          <Link href="/results" className="link-arrow">See all results →</Link>
        </div>
        <ResultsGrid items={items} columns={2} />
      </div>
    </section>
  );
}
