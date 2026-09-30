"use client";

import { useState } from "react";
import { Play } from "./Icons";

// Click-to-load 16:9 YouTube tile: a poster until clicked, then a
// youtube-nocookie iframe (rel=0). No YouTube script loads before the click.
export default function VideoTile({ videoId, title, poster }: { videoId: string; title: string; poster?: string }) {
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState(poster || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  const fallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <div className="vt-frame video-tile">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" className="vt-play" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            loading="lazy"
            width={640}
            height={360}
            onError={() => src !== fallback && setSrc(fallback)}
            onLoad={(e) => e.currentTarget.naturalWidth <= 120 && src !== fallback && setSrc(fallback)}
          />
          <span className="vt-play-mark" aria-hidden="true"><Play /></span>
        </button>
      )}
    </div>
  );
}
