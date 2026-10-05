"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Track } from "@/content/tracks";

// Track tabs (role="tablist"): one tab per track; the panel shows the track's
// target roles and links to /tracks/<slug>. Arrow keys, Home and End move
// between tabs; on touch screens a horizontal swipe on the panel moves to the
// next or previous track.
export default function TrackTabs({ tracks }: { tracks: Pick<Track, "slug" | "name" | "roles">[] }) {
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchX = useRef<number | null>(null);
  const go = (n: number, focus = false) => {
    const next = (n + tracks.length) % tracks.length;
    setI(next);
    if (focus) tabs.current[next]?.focus();
  };
  const t = tracks[i];
  return (
    <div className="track-tabs">
      <div
        role="tablist"
        aria-label="Tracks"
        className="track-tablist"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1, true); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1, true); }
          if (e.key === "Home") { e.preventDefault(); go(0, true); }
          if (e.key === "End") { e.preventDefault(); go(tracks.length - 1, true); }
        }}
      >
        {tracks.map((x, n) => (
          <button
            key={x.slug}
            ref={(el) => { tabs.current[n] = el; }}
            type="button"
            role="tab"
            id={`track-tab-${x.slug}`}
            aria-selected={n === i}
            aria-controls={`track-panel-${x.slug}`}
            tabIndex={n === i ? 0 : -1}
            className={`track-tab${n === i ? " is-active" : ""}`}
            onClick={() => go(n)}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`track-panel-${t.slug}`}
        aria-labelledby={`track-tab-${t.slug}`}
        className="card track-panel"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
        }}
      >
        <h3>{t.name}</h3>
        <p>{t.roles}</p>
        <p><Link href={`/tracks/${t.slug}`} className="link-arrow">The {t.name} track →</Link></p>
      </div>
    </div>
  );
}
