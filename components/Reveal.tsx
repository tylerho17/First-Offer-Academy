"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Subtle fade-up for section heads and cards as they scroll into view.
// - Off entirely under prefers-reduced-motion.
// - Content is only hidden once this script runs, so nothing disappears if
//   JS fails; anything already on screen at load is never hidden.
// - The helper classes are removed after the animation so each element's own
//   hover transitions are untouched.
const SELECTOR = ".section-head, .card, .icon-tile, .stat, .story-card, .rung, .step";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const vh = window.innerHeight;
    const els = [...document.querySelectorAll<HTMLElement>(SELECTOR)].filter(
      (el) => !el.closest("[data-scroller], .footer, .header") && el.getBoundingClientRect().top > vh * 0.9,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("is-in");
          setTimeout(() => el.classList.remove("reveal", "is-in"), 700);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of els) {
      el.classList.add("reveal");
      io.observe(el);
    }
    return () => {
      io.disconnect();
      for (const el of els) el.classList.remove("reveal", "is-in");
    };
  }, [pathname]);

  return null;
}
