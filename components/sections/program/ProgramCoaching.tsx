import CoachCard from "../../CoachCard";
import VideoGroup from "../../VideoGroup";
import { byPlacement } from "@/content/videoTestimonials";

// /program#coaching: the coach card beside the program-coaching clip.
export default function ProgramCoaching() {
  const videos = byPlacement("program-coaching");
  return (
    <section className="section" id="coaching" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>Who coaches the program</h2>
        </div>
        <div className={videos.length ? "coach-split" : undefined}>
          <CoachCard />
          <VideoGroup videos={videos} columns={1} />
        </div>
      </div>
    </section>
  );
}
