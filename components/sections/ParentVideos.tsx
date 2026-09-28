import { storyVideos } from "@/content/videoTestimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import Ornament from "@/components/Ornament";

// /results: every permitted parent video, before-and-after first, price second.
export default function ParentVideos() {
  const videos = storyVideos();
  if (videos.length === 0) return null;
  return (
    <section className="section" id="parent-videos" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Parents</span>
          <h2>Parents, in their own words</h2>
          <p className="lede">Shared with written permission. First names only.</p>
        </div>
        <ul className="vt-grid">
          {videos.map((v) => (
            <li key={v.id}><VideoTestimonial video={v} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
