"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PrimaryCTA from "./PrimaryCTA";

// The sticky "Book a parent call" bar, below 768px only (CSS hides it wider).
// It shows once the visitor has scrolled past the page's first booking button
// (or one screen down on a page without one), and hides while:
//  - any other booking button (<PrimaryCTA>, [data-primary-cta]) is on screen,
//    so two booking buttons are never visible at once;
//  - the mobile menu is open;
//  - a playing video (a loaded YouTube iframe) is on screen.
export default function StickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ctasOnScreen = new Set<Element>();
    let videosOnScreen = new Set<Element>();
    let menuOpen = false;
    // Booking buttons on the page itself (the one inside the closed mobile
    // menu has no position, and the menu is handled separately).
    const ctas = () => [...document.querySelectorAll("[data-primary-cta]")].filter((el) => !el.closest(".mobile-panel"));

    const update = () => {
      const first = ctas()[0];
      const passed = first ? first.getBoundingClientRect().bottom < 0 : window.scrollY > window.innerHeight * 0.8;
      setShow(passed && ctasOnScreen.size === 0 && videosOnScreen.size === 0 && !menuOpen);
    };

    const ctaObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) ctasOnScreen.add(e.target);
        else ctasOnScreen.delete(e.target);
      }
      update();
    });
    const videoObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) videosOnScreen.add(e.target);
        else videosOnScreen.delete(e.target);
      }
      update();
    });

    const watch = () => {
      ctaObserver.disconnect();
      videoObserver.disconnect();
      ctasOnScreen = new Set();
      videosOnScreen = new Set();
      ctas().forEach((el) => ctaObserver.observe(el));
      document.querySelectorAll(".vt-frame iframe").forEach((el) => videoObserver.observe(el));
    };

    // A video starts playing when its iframe is swapped in.
    const mutations = new MutationObserver(() => {
      document.querySelectorAll(".vt-frame iframe").forEach((el) => videoObserver.observe(el));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    const menu = document.querySelector("details.mobile-nav");
    const onToggle = () => { menuOpen = !!(menu as HTMLDetailsElement | null)?.open; update(); };
    menu?.addEventListener("toggle", onToggle);

    watch();
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      ctaObserver.disconnect();
      videoObserver.disconnect();
      mutations.disconnect();
      menu?.removeEventListener("toggle", onToggle);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <div className={`sticky-cta${show ? " is-visible" : ""}`} aria-hidden={!show} inert={!show || undefined}>
      <PrimaryCTA location="sticky" />
    </div>
  );
}
