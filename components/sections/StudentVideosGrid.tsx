import Link from "next/link";
import { byPlacement, type Placement } from "@/content/videoTestimonials";
import VideoGroup from "../VideoGroup";

// /results: the video grid, in two headed groups. A group with no placed clip
// is skipped; nothing renders when both are empty.
const GROUPS: { placement: Placement; title: string }[] = [
  { placement: "results-landed", title: "Where they landed" },
  { placement: "results-became", title: "Who they became" },
];

export default function StudentVideosGrid() {
  const groups = GROUPS.map((g) => ({ ...g, videos: byPlacement(g.placement) })).filter((g) => g.videos.length);
  if (groups.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby="story-videos" id="videos">
      <div className="wrap">
        <div className="section-head row-head">
          <div>
            <span className="eyebrow">On video</span>
            <h2 id="story-videos">Students and parents, in their own words</h2>
            <p className="lede">Shared with written permission. First names only.</p>
          </div>
          <Link href="/stories" className="link-arrow">Watch all stories →</Link>
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
