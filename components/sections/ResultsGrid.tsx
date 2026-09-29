"use client";

import { useState } from "react";
import Link from "next/link";
import type { Result } from "@/content/results";
import ResultCard from "../ResultCard";

const FILTERS = ["All", "Finance", "Marketing", "Accounting", "Parents"] as const;
type Filter = (typeof FILTERS)[number];

// The results grid. `filters` adds the chips (/results); `limit` caps the
// cards (homepage). Pass only permitted results (permittedResults()).
export default function ResultsGrid({ items, filters = false, limit }: { items: Result[]; filters?: boolean; limit?: number }) {
  const [f, setF] = useState<Filter>("All");
  const shown = items
    .filter((r) => f === "All" || (f === "Parents" ? r.kind === "parent" : r.kind === "student" && r.track === f))
    .slice(0, limit);

  return (
    <>
      {filters && (
        <div className="pill-row result-filters" role="group" aria-label="Filter results">
          {FILTERS.map((x) => (
            <button key={x} type="button" className={`topic-pill${f === x ? " is-active" : ""}`} aria-pressed={f === x} onClick={() => setF(x)}>
              {x}
            </button>
          ))}
        </div>
      )}
      {shown.length > 0 ? (
        <div className="result-grid">
          {shown.map((r) => <ResultCard key={r.id} r={r} />)}
        </div>
      ) : (
        <p className="result-empty">
          No {f === "Parents" ? "parent" : f.toLowerCase()} results yet. Results appear here only with written permission.{" "}
          <Link href="/results">See all</Link>
        </p>
      )}
    </>
  );
}
