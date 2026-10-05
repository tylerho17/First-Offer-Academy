import type { VideoTestimonial } from "@/content/videoTestimonials";
import VideoCard from "./VideoCard";

// Two clips (or one) under the copy they prove: side by side on desktop,
// stacked on mobile. Renders nothing when empty.
export default function VideoPair({ videos, className = "" }: { videos: VideoTestimonial[]; className?: string }) {
  if (videos.length === 0) return null;
  return (
    <div className={`video-pair${videos.length === 1 ? " is-single" : ""} ${className}`.trim()}>
      {videos.map((v) => <VideoCard key={v.youtubeId} video={v} />)}
    </div>
  );
}
