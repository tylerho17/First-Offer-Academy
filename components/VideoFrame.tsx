"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "./Icons";

// Click-to-load 16:9 YouTube frame (the lite-youtube pattern). Until the play
// button is pressed it's a poster and a button: no YouTube script, cookie, or
// iframe loads. On click it swaps in a youtube-nocookie iframe (rel=0).
// Poster: maxresdefault, falling back to hqdefault.
export default function VideoFrame({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const fallback = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`);
  const img = useRef<HTMLImageElement>(null);
  // YouTube answers a missing maxresdefault with a 120px placeholder. The
  // image can finish loading before hydration attaches onLoad, so check once
  // on mount too.
  useEffect(() => {
    const el = img.current;
    if (el?.complete && el.naturalWidth > 0 && el.naturalWidth <= 120) setPoster(fallback);
  }, [fallback]);
  return (
    <div className="vt-frame">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" className="vt-play" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={img}
            src={poster}
            alt=""
            loading="lazy"
            width={640}
            height={360}
            onError={() => poster !== fallback && setPoster(fallback)}
            onLoad={(e) => e.currentTarget.naturalWidth <= 120 && poster !== fallback && setPoster(fallback)}
          />
          <span className="vt-play-mark" aria-hidden="true"><Play /></span>
        </button>
      )}
    </div>
  );
}
