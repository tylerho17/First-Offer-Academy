import { site } from "@/content/site";

// Where a CTA sits, for the cta_click analytics event.
export type CtaLocation = "hero" | "sticky" | "pricing" | "parents" | "faq" | "footer" | "program" | "about" | "track" | "menu" | "header" | "final" | "coach" | "apply" | "band";

// The one primary action site-wide: book a parent call. Every booking button
// renders through here, so the link, wording and style live in one place.
// tone="navy-band": the sage pill used on navy bands. Full width on mobile,
// auto width from 768px, at least 48px tall. data-primary-cta lets the sticky
// mobile bar hide while any booking button is on screen.
export default function PrimaryCTA({
  location,
  tone = "default",
  className = "",
  children = "Book a parent call",
}: { location: CtaLocation; tone?: "default" | "navy-band"; className?: string; children?: React.ReactNode }) {
  return (
    <a
      href={site.calendlyUrl}
      className={`btn ${tone === "navy-band" ? "btn-sage" : "btn-primary"} btn-cta ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      data-event="cta_click"
      data-event-location={location}
      data-primary-cta={location === "sticky" ? undefined : ""}
    >
      {children}
    </a>
  );
}

// The one line under the main CTA (homepage, /parents, /pricing). Existing
// site copy (the /parents call card), not new wording.
export function CtaNote({ className = "cta-note" }: { className?: string }) {
  return <p className={className}>{site.callNote}</p>;
}
