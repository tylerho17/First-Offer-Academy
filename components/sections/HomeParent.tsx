import Link from "next/link";
import { byPlacement } from "@/content/videoTestimonials";
import VideoGroup from "../VideoGroup";

// Homepage: a short parent-voice band (home-parent), linking to /parents.
// Renders nothing when no clip is placed.
export default function HomeParent() {
  const videos = byPlacement("home-parent");
  if (videos.length === 0) return null;
  return (
    <section className="section" id="parent-voice" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="home-parent">
          <VideoGroup videos={videos} columns={1} />
          <p><Link href="/parents" className="link-arrow">Hear from parents →</Link></p>
        </div>
      </div>
    </section>
  );
}
