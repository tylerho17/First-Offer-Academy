"use client";

import { useState } from "react";
import { trackLabel, type Result, type Track } from "@/content/results";
import ResultCard from "../ResultCard";

type Filter = "all" | Track | "parents";
const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  ...(Object.keys(trackLabel) as Track[]).map((t) => ({ key: t, label: trackLabel[t] })),
  { key: "parents", label: "Parents" },
];

const matches = (r: Result, f: Filter) =>
  f === "all" || (f === "parents" ? r.type === "parent" : r.type === "student" && r.track === f);

// The results grid. `filters` adds the chips (/results), shown only for
// filters with at least one card. `columns={2}` for the homepage; a lone card
// spans the full width. Pass only permitted results, students first.
export default function ResultsGrid({ items, filters = false, columns = 3 }: { items: Result[]; filters?: boolean; columns?: 2 | 3 }) {
  const [f, setF] = useState<Filter>("all");
  const chips = FILTERS.filter((x) => x.key === "all" || items.some((r) => matches(r, x.key)));
  const shown = items.filter((r) => matches(r, f));
  const wide = shown.length === 1;

  return (
    <>
      {filters && chips.length > 1 && (
        <div className="pill-row result-filters" role="group" aria-label="Filter results">
          {chips.map((x) => (
            <button key={x.key} type="button" className={`topic-pill${f === x.key ? " is-active" : ""}`} aria-pressed={f === x.key} onClick={() => setF(x.key)}>
              {x.label}
            </button>
          ))}
        </div>
      )}
      <div className={`result-grid${columns === 2 ? " is-two" : ""}${wide ? " is-single" : ""}`}>
        {shown.map((r) => <ResultCard key={r.id} r={r} wide={wide} />)}
      </div>
    </>
  );
}
