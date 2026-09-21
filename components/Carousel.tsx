"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icons";

// Horizontal scroll-snap row with previous/next buttons. The buttons are
// hidden when everything fits, and disabled at either end.
export default function Carousel({ label, children }: { label: string; children: React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ scrollable: false, atStart: true, atEnd: true });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setState({
      scrollable: el.scrollWidth > el.clientWidth + 1,
      atStart: el.scrollLeft <= 1,
      atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label}>
      {state.scrollable && (
        <div className="carousel-controls">
          <button type="button" className="carousel-btn" onClick={() => step(-1)} disabled={state.atStart} aria-label="Previous">
            <ArrowLeft />
          </button>
          <button type="button" className="carousel-btn" onClick={() => step(1)} disabled={state.atEnd} aria-label="Next">
            <ArrowRight />
          </button>
        </div>
      )}
      <div className="carousel-track" ref={track} data-scroller>
        {children}
      </div>
    </div>
  );
}
