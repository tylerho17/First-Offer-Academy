import { site } from "@/content/site";
import { Play } from "./Icons";

// YouTube or Vimeo URL → privacy-friendly embed URL. Returns null if unrecognized.
function embedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`;
    if (host.endsWith("youtube.com")) {
      const id = u.searchParams.get("v") ?? u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (host.endsWith("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {}
  return null;
}

// 16:9 video. Renders an embed when `url` is set, a labeled placeholder when
// it's empty and placeholders are on, and nothing otherwise.
export default function VideoSlot({ url, label, note }: { url?: string; label: string; note?: string }) {
  const src = url ? embedUrl(url) : null;
  if (src) {
    return (
      <div className="video-slot">
        <iframe src={src} title={label} allow="encrypted-media; picture-in-picture; fullscreen" loading="lazy" />
      </div>
    );
  }
  if (!site.showPlaceholders) return null;
  return (
    <div className="video-slot is-placeholder" role="img" aria-label={`Placeholder: ${label}`}>
      <span className="play"><Play /></span>
      <span className="slot-tag">Placeholder</span>
      <strong>Video: {label}</strong>
      {note && <small>{note}</small>}
    </div>
  );
}
