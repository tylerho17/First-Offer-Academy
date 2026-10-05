import type { VideoTestimonial } from "@/content/videoTestimonials";
import VideoCard from "./VideoCard";

// Clips for one page section. A `hero` clip renders large on its own; the rest
// form a grid of cards (at most 3 across on desktop, 1 on mobile). Renders
// nothing for an empty list, so an empty placement leaves no trace.
export default function VideoGroup({ videos, columns = 3, className = "" }: { videos: VideoTestimonial[]; columns?: 1 | 2 | 3; className?: string }) {
  if (videos.length === 0) return null;
  const heroes = videos.filter((v) => v.role === "hero");
  const cards = videos.filter((v) => v.role !== "hero");
  const cols = Math.min(columns, cards.length);
  return (
    <>
      {heroes.map((v) => <VideoCard key={v.youtubeId} video={v} size="hero" className={className} />)}
      {cards.length === 1 && columns === 1 ? (
        <VideoCard video={cards[0]} className={className} />
      ) : cards.length > 0 ? (
        <ul className={`video-group cols-${cols} ${className}`.trim()}>
          {cards.map((v) => <li key={v.youtubeId}><VideoCard video={v} /></li>)}
        </ul>
      ) : null}
    </>
  );
}
