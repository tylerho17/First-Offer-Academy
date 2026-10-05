"use client";

import { useState } from "react";
import { credit, type VideoTestimonial } from "@/content/videoTestimonials";
import { Play } from "./Icons";

// A video testimonial as a click-to-load facade: a lazy thumbnail and a play
// button in a fixed 16:9 box, then the caption. No iframe, YouTube script, or
// cookie loads until the play button is pressed; the click swaps in a
// youtube-nocookie iframe that autoplays. Never autoplays on page load.
// size="hero": one large clip. size="card": a grid tile.
export default function VideoCard({ video, size = "card", className = "" }: { video: VideoTestimonial; size?: "hero" | "card"; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const who = credit(video);
  const id = video.youtubeId;
  return (
    <figure className={`card vt vt-${size} ${className}`.trim()}>
      <div className="vt-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`${video.title}: ${who}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="vt-play" onClick={() => setPlaying(true)} aria-label={`Play: ${video.title} — ${video.person}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={`Video: ${video.title}, ${who}`}
              loading="lazy"
              decoding="async"
              width={480}
              height={360}
            />
            <span className="vt-play-mark" aria-hidden="true"><Play /></span>
          </button>
        )}
      </div>
      <figcaption className="vt-meta">
        <p className="vt-title">{video.title}</p>
        <p className="vt-who">{who}</p>
      </figcaption>
    </figure>
  );
}
