// Video testimonials (unlisted YouTube), shared with written permission.
// Curated 2026-10-04 to 16 five-star clips, at most 2 per person. Each clip
// has one unique `spot` and renders in that one place only, next to the copy
// it proves. No grids, no library, no videos in the FAQ.
//
// First names only for students and parents, everywhere: titles, alt text,
// captions, metadata. No schools, no clubs. Parent credit: "Greg · Maddie's dad".
//
// Known exception, approved by Tyler on 2026-09-28: some source recordings
// carry a Zoom name badge burned into the frame. It can't be removed in code.

export type VideoSpot =
  // Homepage
  | "home-hero" | "home-transformation" | "home-results"
  // /program
  | "program-pitch" | "program-outreach" | "program-coaching"
  // /parents (exactly 4, parents only)
  | "parents-hero" | "parents-growth" | "parents-ai" | "parents-before-cta"
  // /pricing (the purchase section)
  | "pricing-hero" | "pricing-priceless" | "pricing-worth-student"
  // /results (attached to the student's own result card)
  | "results-kim" | "results-james" | "results-pranav";

export interface VideoTestimonial {
  youtubeId: string;
  person: string; // first name only
  kind: "student" | "parent";
  parentOf?: string; // student's first name, parents only
  title: string; // display caption
  spot: VideoSpot;
}

export const videoTestimonials: VideoTestimonial[] = [
  // Homepage
  { youtubeId: "MwuHOzXdSpE", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "“He grew tenfold.”", spot: "home-hero" },
  { youtubeId: "rgSOc1D66vo", person: "Maddie", kind: "student", title: "From shy to confident", spot: "home-transformation" },
  { youtubeId: "4l5tk-RTLtE", person: "Nathaniel", kind: "student", title: "How many internships I landed", spot: "home-results" },
  // /program
  { youtubeId: "bSkp-cI-bkA", person: "Vasavi", kind: "student", title: "What a great 60-second pitch sounds like", spot: "program-pitch" },
  { youtubeId: "B6ItUko1cTA", person: "Maddie", kind: "student", title: "Talking to 70+ bankers", spot: "program-outreach" },
  { youtubeId: "vfGBf27EXyk", person: "Vasavi", kind: "student", title: "Tyler as a coach", spot: "program-coaching" },
  // /parents
  { youtubeId: "WA5_7WhPhec", person: "Steve", kind: "parent", parentOf: "James", title: "James's transformation: comfort and laser focus", spot: "parents-hero" },
  { youtubeId: "0Pykk8D84NM", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Watching my daughter become confident", spot: "parents-growth" },
  { youtubeId: "aVcHIEV8_T0", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Why this over AI", spot: "parents-ai" },
  { youtubeId: "JkpO4huyVZo", person: "Steve", kind: "parent", parentOf: "James", title: "Why we went all in", spot: "parents-before-cta" },
  // /pricing
  { youtubeId: "OCm9FudIe94", person: "Tom", kind: "parent", parentOf: "Kim", title: "Is $5,000 worth it?", spot: "pricing-hero" },
  { youtubeId: "uPEfD2zR2cs", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Priceless", spot: "pricing-priceless" },
  { youtubeId: "oIRmZvIpwqE", person: "Kim", kind: "student", title: "Was it worth it?", spot: "pricing-worth-student" },
  // /results
  { youtubeId: "BCotdbzOLus", person: "Kim", kind: "student", title: "Where I'd be without it", spot: "results-kim" },
  { youtubeId: "t_BL3ljvqVM", person: "James", kind: "student", title: "How much I grew", spot: "results-james" },
  { youtubeId: "AI6lsV5fDhI", person: "Pranav", kind: "student", title: "My most recent internship", spot: "results-pranav" },
];

// The one clip for a spot, if any.
export const videoAt = (spot: VideoSpot) => videoTestimonials.find((v) => v.spot === spot);

// "Kim" or "Greg · Maddie's dad".
export const credit = (v: VideoTestimonial) => (v.kind === "parent" && v.parentOf ? `${v.person} · ${v.parentOf}'s dad` : v.person);
