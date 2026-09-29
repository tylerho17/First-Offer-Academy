"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";
import { site } from "@/content/site";

// Vercel Analytics custom events, fired from shared components:
//   deposit_click, pay_full_click, pay_plan_click  PayButton (data-event)
//   parent_call_click                              CallLink (data-event), plus any
//                                                  other link to the Calendly URL
//   playbook_download, template_download           GatedDownload, PlaybookForm
//   newsletter_signup                              NewsletterForm, GatedDownload,
//                                                  PlaybookForm (after the server accepts)
//   apply_submit                                   ApplyForm (after the server accepts)
// This listener handles the click events: any element with data-event="<name>".
export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest?.("[data-event], a[href]");
      if (!el) return;
      const name = el.getAttribute("data-event");
      if (name) return void track(name, { path: location.pathname });
      const href = el.getAttribute("href") ?? "";
      if (site.calendlyUrl && href.startsWith(site.calendlyUrl)) track("parent_call_click", { path: location.pathname });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
