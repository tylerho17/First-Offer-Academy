"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Subtle rise for section heads and cards as they scroll into view.
// - Content is visible by default: the server HTML has no hidden state, and
//   elements are only marked once this script runs, so nothing disappears if
//   JS fails or is slow.
// - Nothing on screen at load animates. Off entirely under
//   prefers-reduced-motion.
// - Starts 20% of a viewport before an element enters: a 12px rise over
//   250ms, 60ms stagger. No opacity change, so content is never blank or
//   low-contrast, even mid-transition.
// - The helper classes are removed afterwards so each element's own hover
//   transitions are untouched.
const SELECTOR = ".section-head, .card, .icon-tile, .stat, .story-card, .rung, .step";
const DURATION = 250;
const STAGGER = 60;

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const vh = window.innerHeight;
    const els = [...document.querySelectorAll<HTMLElement>(SELECTOR)].filter(
      (el) => !el.closest("[data-scroller], .footer, .header") && el.getBoundingClientRect().top > vh,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            const el = e.target as HTMLElement;
            io.unobserve(el);
            el.style.transitionDelay = `${Math.min(i, 4) * STAGGER}ms`;
            el.classList.add("is-in");
            setTimeout(() => {
              el.classList.remove("reveal", "is-in");
              el.style.transitionDelay = "";
            }, DURATION + 4 * STAGGER + 50);
          });
      },
      { rootMargin: "0px 0px 20% 0px", threshold: 0 },
    );
    for (const el of els) {
      el.classList.add("reveal");
      io.observe(el);
    }
    return () => {
      io.disconnect();
      for (const el of els) {
        el.classList.remove("reveal", "is-in");
        el.style.transitionDelay = "";
      }
    };
  }, [pathname]);

  return null;
}
