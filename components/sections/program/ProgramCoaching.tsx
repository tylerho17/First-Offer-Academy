import CoachCard from "../../CoachCard";
import VideoCard from "../../VideoCard";
import { videoAt } from "@/content/videoTestimonials";

// /program#coaching: who runs the program, with a student on Tyler as a coach.
export default function ProgramCoaching() {
  const clip = videoAt("program-coaching");
  return (
    <section className="section" id="coaching" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>Who coaches the program</h2>
        </div>
        <div className={clip ? "coach-split" : undefined}>
          <CoachCard />
          {clip && <VideoCard video={clip} />}
        </div>
      </div>
    </section>
  );
}
