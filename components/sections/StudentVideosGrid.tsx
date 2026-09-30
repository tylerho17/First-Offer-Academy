import { storyVideos, type VideoTestimonial as Video } from "@/content/videoTestimonials";
import VideoTestimonial, { VideoPairCard } from "../VideoTestimonial";

// /results: every video tagged "stories", in storyVideos() order. James's
// before and after render as one paired tile. Nothing renders when empty.
const PAIR = ["james-before", "james-after"] as const;

export default function StudentVideosGrid() {
  const list = storyVideos();
  if (list.length === 0) return null;
  const pair = PAIR.map((id) => list.find((v) => v.id === id));
  const hasPair = pair.every(Boolean);

  const tiles: React.ReactNode[] = [];
  for (const v of list) {
    if (hasPair && v.id === PAIR[1]) continue; // rendered with its partner
    tiles.push(
      <li key={v.id} className={hasPair && v.id === PAIR[0] ? "is-pair" : undefined}>
        {hasPair && v.id === PAIR[0] ? (
          <VideoPairCard videos={pair as [Video, Video]} label="James: before and after." />
        ) : (
          <VideoTestimonial video={v} />
        )}
      </li>,
    );
  }

  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby="story-videos" id="videos">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">On video</span>
          <h2 id="story-videos">Students and parents, in their own words</h2>
          <p className="lede">Shared with written permission. First names only.</p>
        </div>
        <ul className="video-group cols-3 story-videos">{tiles}</ul>
      </div>
    </section>
  );
}
