"use client";

import { useState } from "react";
import type { Result } from "@/content/results";
import { Play } from "./Icons";

// YouTube's maxresdefault, else hqdefault (older or low-res uploads have no
// maxres; YouTube then serves a 120px placeholder).
function Poster({ r }: { r: Result }) {
  const [src, setSrc] = useState(r.videoPoster || `https://i.ytimg.com/vi/${r.videoId}/maxresdefault.jpg`);
  const fallback = `https://i.ytimg.com/vi/${r.videoId}/hqdefault.jpg`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      width={640}
      height={360}
      onError={() => src !== fallback && setSrc(fallback)}
      onLoad={(e) => e.currentTarget.naturalWidth <= 120 && src !== fallback && setSrc(fallback)}
    />
  );
}

function Video({ r }: { r: Result }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="vt-frame">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${r.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={r.outcome}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" className="vt-play" onClick={() => setPlaying(true)} aria-label={`Play video: ${r.outcome}`}>
          <Poster r={r} />
          <span className="vt-play-mark" aria-hidden="true"><Play /></span>
          {r.duration && <span className="vt-duration" aria-hidden="true">{r.duration}</span>}
        </button>
      )}
    </div>
  );
}

export default function ResultCard({ r }: { r: Result }) {
  const name = r.lastInitial ? `${r.firstName} ${r.lastInitial}.` : r.firstName;
  return (
    <figure className="card result-card">
      {r.videoId && <Video r={r} />}
      {r.photo && r.permissions.photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="result-photo" src={r.photo} alt={name} width={88} height={88} loading="lazy" />
      )}
      <div className="result-body">
        <span className="tag">{r.kind === "parent" ? "Parent" : r.track}</span>
        <h3>{r.outcome}</h3>
        {r.oneLineQuote && <blockquote>{r.oneLineQuote}</blockquote>}
        <figcaption>
          <strong>{name}</strong>
          {r.major && <> · {r.major}</>}
          {r.kind === "student" && r.employer && r.permissions.employer && <><br />Interned at {r.employer}</>}
        </figcaption>
      </div>
    </figure>
  );
}
