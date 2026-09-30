"use client";

import { useEffect, useRef } from "react";

// A stat number that counts up once when it scrolls into view. The real value
// is rendered on the server, so no-JS visitors and link previews always see
// it; JS only animates toward it. No animation when the number is already on
// screen at load, or under prefers-reduced-motion.
export default function CountUp({ value, duration = 900 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    const m = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!el || !m || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // visible on load: leave it
    const [, pre, digits, post] = m;
    const target = Number(digits);
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out
        el.textContent = `${pre}${Math.round(target * eased)}${post}`;
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value, duration]);

  return <strong ref={ref}>{value}</strong>;
}
