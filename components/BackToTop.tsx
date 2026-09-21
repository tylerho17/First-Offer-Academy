"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Appears on long pages (3+ screens) once you've scrolled 1.5 screens down.
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      setShow(document.documentElement.scrollHeight > vh * 3 && window.scrollY > vh * 1.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <button
      type="button"
      className={`back-to-top${show ? " is-visible" : ""}`}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.querySelector<HTMLElement>("main")?.focus({ preventScroll: true });
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
    </button>
  );
}
