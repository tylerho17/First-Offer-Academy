import { stats } from "@/content/stats";
import { videoAt, type VideoSpot } from "@/content/videoTestimonials";
import StatsRow from "../StatsRow";
import VideoCard from "../VideoCard";

// `video`: a clip that sits beside the outcome numbers (homepage only).
export default function Stats({ video }: { video?: VideoSpot }) {
  if (!stats.some((s) => s.value.trim() !== "")) return null;
  const clip = video ? videoAt(video) : undefined;
  return (
    <section className="section-tight" aria-label="Pilot results in numbers">
      <div className="wrap">
        {clip ? (
          <div className="copy-video">
            <div><StatsRow /></div>
            <VideoCard video={clip} />
          </div>
        ) : (
          <StatsRow />
        )}
      </div>
    </section>
  );
}
