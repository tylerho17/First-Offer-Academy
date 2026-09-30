import { studentVideos } from "@/content/students";
import VideoTile from "../VideoTile";

// Student videos on /results: six 16:9 click-to-load tiles. Ids live in
// content/students.ts (studentVideos); tiles with an empty id don't render,
// and the section is hidden until at least one exists.
export default function StudentVideosGrid() {
  const list = studentVideos.filter((v) => v.videoId.trim());
  if (list.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby="student-videos">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Students</span>
          <h2 id="student-videos">In their own words, on video</h2>
        </div>
        <ul className="student-video-grid">
          {list.map((v) => (
            <li key={v.videoId}><VideoTile videoId={v.videoId} title={v.title || "Pilot student video"} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
