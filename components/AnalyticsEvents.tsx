"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";
import { site } from "@/content/site";

// One listener for click events site-wide:
// - any element with data-event="<name>" (deposit_click, playbook_download)
// - any link to the Calendly URL counts as "book_call", wherever it appears
// Form submits are tracked in the forms themselves, after the server accepts them.
export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest?.("[data-event], a[href]");
      if (!el) return;
      const name = el.getAttribute("data-event");
      if (name) return void track(name, { path: location.pathname });
      const href = el.getAttribute("href") ?? "";
      if (site.calendlyUrl && href.startsWith(site.calendlyUrl)) track("book_call", { path: location.pathname });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
