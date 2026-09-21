"use client";

import Link from "next/link";
import { useState } from "react";
import type { Story } from "@/content/stories";
import CallLink from "./CallLink";

// Filter chips over permitted stories. One type at a time, or all.
export default function StoryFilter({ stories, types }: { stories: Story[]; types: readonly string[] }) {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? stories.filter((s) => (s.studentTypes as string[]).includes(active)) : stories;

  return (
    <>
      <div className="chip-row" role="group" aria-label="Filter by student type">
        <button type="button" className="chip" aria-pressed={active === null} onClick={() => setActive(null)}>All</button>
        {types.map((t) => (
          <button key={t} type="button" className="chip" aria-pressed={active === t} onClick={() => setActive(t)}>{t}</button>
        ))}
      </div>
      <p className="sr-only" role="status">{shown.length} {shown.length === 1 ? "story" : "stories"} shown</p>
      {shown.length > 0 ? (
        <div className="grid grid-3" style={{ marginTop: 28 }}>
          {shown.map((s) => (
            <article className="card story-mini" key={s.slug}>
              <span className="tag">{s.track} · {s.year}</span>
              <h3><Link href={`/results/${s.slug}`}>{s.headline}</Link></h3>
              <p>{s.name} · {s.school}</p>
              <div className="coach-tags">{s.studentTypes.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      ) : (
        <div className="card empty-card" style={{ marginTop: 28 }}>
          <div>
            <h3>Stories are being added.</h3>
            <p>Book a call to hear from a student directly.</p>
          </div>
          <CallLink>Book a call</CallLink>
        </div>
      )}
    </>
  );
}
