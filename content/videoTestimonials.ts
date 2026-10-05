// Video testimonials (unlisted YouTube), shared with written permission.
// Videos v4 (2026-10-04): 37 clips; polish v5 added three FAQ clips (40). Each clip has one unique `spot` and
// renders in that one place only, beside the copy it proves. The only groups
// of videos are the /pricing "It was worth it." section and the /results
// "In their words" row. FAQ clips render on /faq only.
//
// First names only for students and parents, everywhere: titles, alt text,
// captions, metadata. No schools, no clubs. Parent credit: "Greg · Maddie's dad".
//
// Known exception, approved by Tyler on 2026-09-28: some source recordings
// carry a Zoom name badge burned into the frame. It can't be removed in code.

export type VideoSpot =
  // Homepage
  | "home-hero" | "home-transformation" | "home-results"
  // /program: the hero, one per section card (program-<module slug>), coaching
  | "program-hero"
  | "program-candidate-brand" | "program-story-bank" | "program-outreach-system"
  | "program-track-technicals" | "program-interview-reps" | "program-accountability-pods"
  | "program-coaching"
  // /parents: parents only, at most two per section
  | "parents-hero" | "parents-relief" | "parents-growth-1" | "parents-growth-2"
  | "parents-skills-1" | "parents-skills-2" | "parents-results-1" | "parents-results-2"
  | "parents-coach" | "parents-before-cta"
  // /pricing: beside the price, then the "It was worth it." section
  | "pricing-hero"
  | "worth-parent-1" | "worth-parent-2" | "worth-parent-3"
  | "worth-student-1" | "worth-student-2" | "worth-student-3" | "worth-student-4"
  // /results: the "In their words" row
  | "results-1" | "results-2" | "results-3" | "results-4"
  // /faq: inside the answer each clip directly answers
  | "faq-right-fit-1" | "faq-right-fit-2" | "faq-too-early" | "faq-club"
  | "faq-coach" | "faq-career-center" | "faq-ai"
  // /about: the Tyler intro video (content/founder.ts introVideoId), not a testimonial
  | "about-intro";

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
  { youtubeId: "LUxbBQ6Lgao", person: "Pranav", kind: "student", title: "I didn't know what to do. Then I had a plan.", spot: "program-hero" },
  { youtubeId: "bSkp-cI-bkA", person: "Vasavi", kind: "student", title: "What a great 60-second pitch sounds like", spot: "program-candidate-brand" },
  { youtubeId: "CbubLIpB0sQ", person: "Pranav", kind: "student", title: "Finding what makes me different", spot: "program-story-bank" },
  { youtubeId: "B6ItUko1cTA", person: "Maddie", kind: "student", title: "Talking to 70+ bankers", spot: "program-outreach-system" },
  { youtubeId: "RNlk3JSTY2Y", person: "Tom", kind: "parent", parentOf: "Kim", title: "Hearing Kim speak the language of finance", spot: "program-track-technicals" },
  { youtubeId: "nWQ-XqmOaok", person: "Pranav", kind: "student", title: "From shy to confident through reps and coffee chats", spot: "program-interview-reps" },
  { youtubeId: "DBlK5J3KwEU", person: "James", kind: "student", title: "Accountability pods", spot: "program-accountability-pods" },
  { youtubeId: "3KvECu21E78", person: "Nathaniel", kind: "student", title: "Tyler as a coach", spot: "program-coaching" },
  // /parents
  { youtubeId: "CbqHmX_fDkw", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Parents don't know how recruiting works", spot: "parents-growth-2" },
  { youtubeId: "-Lx63esArBE", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Taking the pressure off me as a parent", spot: "parents-relief" },
  { youtubeId: "0Pykk8D84NM", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Watching my daughter become confident", spot: "parents-growth-1" },
  { youtubeId: "WA5_7WhPhec", person: "Steve", kind: "parent", parentOf: "James", title: "James's transformation: comfort and laser focus", spot: "parents-hero" },
  { youtubeId: "Il1iH3jpZzI", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Public speaking and confidence", spot: "parents-skills-1" },
  { youtubeId: "hwpEEALK4F4", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Building clarity", spot: "parents-skills-2" },
  { youtubeId: "44O-rA-wB44", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Seeing the results", spot: "parents-results-1" },
  { youtubeId: "xaLihtrDOFQ", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Growing by leaps and bounds", spot: "parents-results-2" },
  { youtubeId: "jnqTZ9YggUU", person: "Steve", kind: "parent", parentOf: "James", title: "A thank-you for the mentorship", spot: "parents-coach" },
  { youtubeId: "JkpO4huyVZo", person: "Steve", kind: "parent", parentOf: "James", title: "Why we went all in", spot: "parents-before-cta" },
  // /pricing
  { youtubeId: "OCm9FudIe94", person: "Tom", kind: "parent", parentOf: "Kim", title: "Is $5,000 worth it?", spot: "pricing-hero" },
  { youtubeId: "uPEfD2zR2cs", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Priceless", spot: "worth-parent-1" },
  { youtubeId: "6cIM_G9GHbI", person: "Steve", kind: "parent", parentOf: "James", title: "Was it worth it?", spot: "worth-parent-2" },
  { youtubeId: "64R01N1Kn-Y", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Was it worth it?", spot: "worth-parent-3" },
  { youtubeId: "oIRmZvIpwqE", person: "Kim", kind: "student", title: "Was it worth it?", spot: "worth-student-1" },
  { youtubeId: "ck-FDQK5hdQ", person: "Maddie", kind: "student", title: "Was it worth it?", spot: "worth-student-2" },
  { youtubeId: "Rjt7WVJ4prE", person: "Pranav", kind: "student", title: "Was it worth it?", spot: "worth-student-3" },
  { youtubeId: "cxoNC0Y6wsM", person: "Nathaniel", kind: "student", title: "Was it worth it?", spot: "worth-student-4" },
  // /results
  { youtubeId: "t_BL3ljvqVM", person: "James", kind: "student", title: "How much I grew", spot: "results-1" },
  { youtubeId: "Dk3Esuv2omo", person: "Nathaniel", kind: "student", title: "My biggest growth", spot: "results-2" },
  { youtubeId: "AI6lsV5fDhI", person: "Pranav", kind: "student", title: "My most recent internship", spot: "results-3" },
  { youtubeId: "pCkLZnEEtes", person: "Kim", kind: "student", title: "My most recent internship", spot: "results-4" },
  // /faq
  { youtubeId: "c4J3yMBr4xI", person: "Tom", kind: "parent", parentOf: "Kim", title: "Who this program is not for", spot: "faq-right-fit-1" },
  { youtubeId: "_lhJNOtMIiI", person: "Steve", kind: "parent", parentOf: "James", title: "Who this program is not for", spot: "faq-right-fit-2" },
  { youtubeId: "oMGm2ZbiigM", person: "Vasavi", kind: "student", title: "It's never too early to start", spot: "faq-too-early" },
  { youtubeId: "RUDrbPjQzpQ", person: "Kim", kind: "student", title: "No clubs, no connections, no plan", spot: "faq-club" },
  { youtubeId: "A80kP4Oq-dI", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Giving her a leg up", spot: "faq-career-center" },
  { youtubeId: "aVcHIEV8_T0", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Why this over AI", spot: "faq-ai" },
  { youtubeId: "vfGBf27EXyk", person: "Vasavi", kind: "student", title: "Tyler as a coach", spot: "faq-coach" },
];

// The one clip for a spot, if any.
export const videoAt = (spot: VideoSpot) => videoTestimonials.find((v) => v.spot === spot);

// Several spots in order (a pair or a row), skipping any that are empty.
export const videosAt = (...spots: VideoSpot[]) => spots.map(videoAt).filter((v): v is VideoTestimonial => !!v);

// "Kim" or "Greg · Maddie's dad".
export const credit = (v: VideoTestimonial) => (v.kind === "parent" && v.parentOf ? `${v.person} · ${v.parentOf}'s dad` : v.person);
