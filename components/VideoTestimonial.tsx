import type { VideoTestimonial as Video } from "@/content/videoTestimonials";
import VideoFrame from "./VideoFrame";

// A video testimonial card: click-to-load frame, then the caption (title in
// the display font, "speaker · label", and the duration when known). The
// caption is server-rendered; only the frame is a client component.
export default function VideoTestimonial({ video, label, className = "" }: { video: Video; label?: string; className?: string }) {
  return (
    <figure className={`card vt ${className}`.trim()}>
      <VideoFrame youtubeId={video.youtubeId} title={video.title} />
      <figcaption className="vt-meta">
        {label && <span className="eyebrow">{label}</span>}
        <p className="vt-title">{video.title}</p>
        <p className="vt-who">{video.speaker} · {video.speakerLabel}</p>
        {video.duration && <p className="vt-len">{video.duration}</p>}
      </figcaption>
    </figure>
  );
}

// Two clips as one tile (e.g. a before and an after), with one caption.
export function VideoPairCard({ videos, label }: { videos: [Video, Video]; label: string }) {
  const [a, b] = videos;
  return (
    <figure className="card vt vt-pair">
      <div className="vt-pair-frames">
        <VideoFrame youtubeId={a.youtubeId} title={`${a.speaker}: ${a.title}`} />
        <VideoFrame youtubeId={b.youtubeId} title={`${b.speaker}: ${b.title}`} />
      </div>
      <figcaption className="vt-meta">
        <p className="vt-title">{label}</p>
        <p className="vt-who">{a.speaker} · {a.speakerLabel}</p>
        <p className="vt-len">{[a, b].map((v) => (v.duration ? `${v.title} (${v.duration})` : v.title)).join(" · ")}</p>
      </figcaption>
    </figure>
  );
}
