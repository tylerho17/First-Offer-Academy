import { site } from "@/content/site";

// Arch-topped cream card with the cohort facts. Used by the /program hero
// when there is no overview video.
// PHOTO: replace with a real photo of a workshop or pod session once one
// exists (no stock or AI images of people).
export default function ArchPhoto() {
  const c = site.cohort;
  return (
    <div className="arch-photo arch-card">
      <span className="eyebrow">{c.name}</span>
      <strong>{c.seats} seats</strong>
      <span>{c.sections}</span>
      <span>Starts {c.start}</span>
    </div>
  );
}
