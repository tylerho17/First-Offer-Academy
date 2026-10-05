"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { libraryVideos, videoCategories, type VideoCategory, type VideoTestimonial } from "@/content/videoTestimonials";
import VideoCard from "./VideoCard";

// /stories: every clip, filterable by who, topic, and person. Filters live in
// the URL (?who=parents&topic=Worth%20it&person=Greg) so a filtered view can
// be shared. Order: role rank, then rating. Shows 12 at a time.
const PAGE = 12;
type Who = "all" | "students" | "parents";
const WHO: { value: Who; label: string }[] = [
  { value: "all", label: "All" },
  { value: "students", label: "Students" },
  { value: "parents", label: "Parents" },
];

const all = libraryVideos();
const people = [...new Set(all.map((v) => v.person))].sort();

const matchWho = (v: VideoTestimonial, who: Who) => who === "all" || (who === "students" ? v.kind === "student" : v.kind === "parent");

export default function StoriesLibrary() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const whoParam = params.get("who");
  const who: Who = whoParam === "students" || whoParam === "parents" ? whoParam : "all";
  const topicParam = params.get("topic");
  const topic = videoCategories.includes(topicParam as VideoCategory) ? (topicParam as VideoCategory) : null;
  const personParam = params.get("person");
  const person = personParam && people.includes(personParam) ? personParam : null;

  // "Show more" count, reset whenever the filters change.
  const filterKey = `${who}|${topic}|${person}`;
  const [more, setMore] = useState({ key: filterKey, shown: PAGE });
  const shown = more.key === filterKey ? more.shown : PAGE;

  // Topic counts reflect the other two filters, so a chip never promises
  // clips that the current view would hide.
  const base = useMemo(() => all.filter((v) => matchWho(v, who) && (!person || v.person === person)), [who, person]);
  const list = useMemo(() => (topic ? base.filter((v) => v.category === topic) : base), [base, topic]);

  function set(key: "who" | "topic" | "person", value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const q = next.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  }

  return (
    <div className="stories">
      <div className="stories-filters">
        <div className="filter-row" role="group" aria-label="Who">
          <span className="filter-label">Who</span>
          {WHO.map((w) => (
            <button key={w.value} type="button" className={`chip${who === w.value ? " is-active" : ""}`} aria-pressed={who === w.value} onClick={() => set("who", w.value === "all" ? null : w.value)}>
              {w.label}
            </button>
          ))}
        </div>
        <div className="filter-row" role="group" aria-label="Topic">
          <span className="filter-label">Topic</span>
          <button type="button" className={`chip${!topic ? " is-active" : ""}`} aria-pressed={!topic} onClick={() => set("topic", null)}>
            All <span className="chip-count">{base.length}</span>
          </button>
          {videoCategories.map((c) => (
            <button key={c} type="button" className={`chip${topic === c ? " is-active" : ""}`} aria-pressed={topic === c} onClick={() => set("topic", c)}>
              {c} <span className="chip-count">{base.filter((v) => v.category === c).length}</span>
            </button>
          ))}
        </div>
        <div className="filter-row">
          <label className="filter-label" htmlFor="stories-person">Person</label>
          <select id="stories-person" className="filter-select" value={person ?? ""} onChange={(e) => set("person", e.target.value || null)}>
            <option value="">Everyone</option>
            {people.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <p className="stories-count" aria-live="polite">{list.length} {list.length === 1 ? "clip" : "clips"}</p>

      {list.length === 0 ? (
        <p className="stories-empty">No clips match these filters.</p>
      ) : (
        <ul className="video-group cols-3">
          {list.slice(0, shown).map((v) => <li key={v.youtubeId}><VideoCard video={v} /></li>)}
        </ul>
      )}
      {shown < list.length && (
        <div className="stories-more">
          <button type="button" className="btn btn-secondary" onClick={() => setMore({ key: filterKey, shown: shown + PAGE })}>Show more</button>
        </div>
      )}
    </div>
  );
}
