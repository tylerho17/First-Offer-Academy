"use client";

import { useState } from "react";
import type { VideoTestimonial as Video } from "@/content/videoTestimonials";
import { Play } from "./Icons";

// Click-to-load video card (the lite-youtube pattern). Until the play button
// is pressed, this is a poster image and a button: no YouTube script, cookie,
// or iframe loads. On click it swaps in a youtube-nocookie iframe and plays.
export default function VideoTestimonial({ video, label, className = "" }: { video: Video; label?: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const embed = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <figure className={`card vt ${className}`.trim()}>
      <div className="vt-frame">
        {playing ? (
          <iframe
            src={embed}
            title={video.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" className="vt-play" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              width={480}
              height={360}
            />
            <span className="vt-play-mark" aria-hidden="true"><Play /></span>
            <span className="vt-duration" aria-hidden="true">{video.duration}</span>
          </button>
        )}
      </div>
      <figcaption className="vt-meta">
        {label && <span className="eyebrow">{label}</span>}
        <p className="vt-title">{video.title}</p>
        <p className="vt-who">
          {video.speaker} · {video.speakerLabel}
          <span className="vt-dot" aria-hidden="true"> · </span>
          <span className="vt-len">{video.duration}</span>
        </p>
      </figcaption>
    </figure>
  );
}
