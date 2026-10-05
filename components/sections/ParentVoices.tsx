import Link from "next/link";
import { byPlacement, type Placement } from "@/content/videoTestimonials";
import VideoGroup from "../VideoGroup";

// /parents: parents in their own words, in three headed groups. A group with
// no placed clip is skipped; the section disappears if all three are empty.
const GROUPS: { placement: Placement; title: string }[] = [
  { placement: "parents-results", title: "The results they saw" },
  { placement: "parents-skills", title: "The skills their students built" },
  { placement: "parents-coach", title: "On the coaching" },
];

export default function ParentVoices() {
  const groups = GROUPS.map((g) => ({ ...g, videos: byPlacement(g.placement) })).filter((g) => g.videos.length);
  if (groups.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby="parent-voices-title" id="parent-voices">
      <div className="wrap">
        <div className="section-head row-head">
          <h2 id="parent-voices-title">Parents, in their own words</h2>
          <Link href="/stories?who=parents" className="link-arrow">Watch all stories →</Link>
        </div>
        {groups.map((g) => (
          <div className="video-block" key={g.placement} id={g.placement}>
            <h3>{g.title}</h3>
            <VideoGroup videos={g.videos} columns={3} />
          </div>
        ))}
      </div>
    </section>
  );
}
