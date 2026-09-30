import type { VideoTestimonial as Video } from "@/content/videoTestimonials";
import VideoTestimonial from "./VideoTestimonial";

// A row/grid of video cards. Renders nothing (no wrapper) for an empty list,
// so an untagged placement leaves no trace. One column on mobile.
export default function VideoGroup({ videos, columns = 2, className = "" }: { videos: Video[]; columns?: 1 | 2 | 3; className?: string }) {
  if (videos.length === 0) return null;
  if (videos.length === 1 && columns === 1) return <VideoTestimonial video={videos[0]} className={className} />;
  return (
    <ul className={`video-group cols-${Math.min(columns, videos.length)} ${className}`.trim()}>
      {videos.map((v) => <li key={v.id}><VideoTestimonial video={v} /></li>)}
    </ul>
  );
}
