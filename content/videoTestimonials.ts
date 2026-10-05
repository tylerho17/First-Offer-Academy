// Video testimonials (unlisted YouTube), shared with written permission.
// Source of truth: the 2026-10-04 clip list (84 clips, re-cut and re-uploaded).
//
// First names only for students and parents, everywhere: titles, alt text,
// captions, metadata. No schools, no clubs. Parent credit: "Greg · Maddie's dad".
//
// `placements` puts a clip inside a page section (byPlacement). Every clip,
// placed or not, is in the /stories library. `alternate` clips are backups:
// they're in /stories but never render in page sections. `rating` is a sort
// key only and is never displayed.
//
// Known exception, approved by Tyler on 2026-09-28: some source recordings
// carry a Zoom name badge burned into the frame. It can't be removed in code.

export type VideoCategory = "Transformation" | "Relatability" | "Proof" | "Worth it" | "How it works" | "Trust";
export type VideoRole = "hero" | "primary" | "alternate" | "library";
export type Placement =
  | "home-hero" | "home-problem" | "home-results" | "home-parent"
  | "program-hero" | "program-candidate-brand" | "program-story-bank" | "program-outreach"
  | "program-interview-reps" | "program-pods" | "program-coaching"
  | "parents-hero" | "parents-relief" | "parents-family" | "parents-results" | "parents-skills" | "parents-coach"
  | "pricing-hero" | "pricing-worth-it"
  | "faq-right-fit" | "faq-ai" | "faq-too-early" | "faq-shy" | "faq-coach"
  | "results-landed" | "results-became";

export interface VideoTestimonial {
  youtubeId: string;
  person: string;            // first name only
  kind: "student" | "parent";
  parentOf?: string;         // student's first name, parents only
  title: string;             // display caption
  category: VideoCategory;
  rating: number;            // 1-5, 0 = unrated. Sort key, never displayed
  role: VideoRole;           // hero > primary > alternate > library
  placements: Placement[];
}

export const videoTestimonials: VideoTestimonial[] = [
  { youtubeId: "XGYHk9p-QA4", person: "Tom", kind: "parent", parentOf: "Kim", title: "Before and after: what changed in Kim", category: "Transformation", rating: 4, role: "primary", placements: ["parents-family"] },
  { youtubeId: "T9QrVOsxlcA", person: "Tom", kind: "parent", parentOf: "Kim", title: "Learning to speak the industry's language", category: "Transformation", rating: 3, role: "library", placements: [] },
  { youtubeId: "OCm9FudIe94", person: "Tom", kind: "parent", parentOf: "Kim", title: "Is $5,000 worth it?", category: "Worth it", rating: 5, role: "hero", placements: ["pricing-hero"] },
  { youtubeId: "qKjAzIlfJ9g", person: "Tom", kind: "parent", parentOf: "Kim", title: "What Kim landing meant to our family", category: "Transformation", rating: 2, role: "library", placements: [] },
  { youtubeId: "RNlk3JSTY2Y", person: "Tom", kind: "parent", parentOf: "Kim", title: "Hearing Kim talk like a professional", category: "Proof", rating: 3, role: "library", placements: [] },
  { youtubeId: "c4J3yMBr4xI", person: "Tom", kind: "parent", parentOf: "Kim", title: "Who this program is not for", category: "Trust", rating: 4, role: "alternate", placements: ["faq-right-fit"] },
  { youtubeId: "42YO_2RCFZg", person: "James", kind: "student", parentOf: undefined, title: "Where I was before the program", category: "Relatability", rating: 3, role: "library", placements: [] },
  { youtubeId: "MQdhsxjAo5I", person: "James", kind: "student", parentOf: undefined, title: "I had no idea how recruiting worked", category: "Relatability", rating: 3, role: "library", placements: [] },
  { youtubeId: "zv93VP_m49c", person: "James", kind: "student", parentOf: undefined, title: "Choosing a career and learning the etiquette", category: "Proof", rating: 4, role: "library", placements: [] },
  { youtubeId: "t_BL3ljvqVM", person: "James", kind: "student", parentOf: undefined, title: "How much I grew", category: "Transformation", rating: 5, role: "primary", placements: ["results-became"] },
  { youtubeId: "19BLTs2Zuxw", person: "James", kind: "student", parentOf: undefined, title: "My most recent internship", category: "Proof", rating: 4, role: "primary", placements: ["results-landed"] },
  { youtubeId: "DBlK5J3KwEU", person: "James", kind: "student", parentOf: undefined, title: "Accountability pods", category: "How it works", rating: 4, role: "primary", placements: ["program-pods"] },
  { youtubeId: "m60kZzR9Gvc", person: "Kim", kind: "student", parentOf: undefined, title: "My 60-second pitch", category: "Proof", rating: 4, role: "alternate", placements: ["program-story-bank"] },
  { youtubeId: "RUDrbPjQzpQ", person: "Kim", kind: "student", parentOf: undefined, title: "No clubs, no connections, no plan", category: "Relatability", rating: 4, role: "primary", placements: ["home-problem"] },
  { youtubeId: "BCotdbzOLus", person: "Kim", kind: "student", parentOf: undefined, title: "Where I'd be without it", category: "Transformation", rating: 5, role: "primary", placements: ["results-became"] },
  { youtubeId: "140dXS7IXkw", person: "Kim", kind: "student", parentOf: undefined, title: "My biggest growth", category: "Transformation", rating: 5, role: "primary", placements: ["results-became"] },
  { youtubeId: "pCkLZnEEtes", person: "Kim", kind: "student", parentOf: undefined, title: "My most recent internship", category: "Proof", rating: 5, role: "primary", placements: ["home-results"] },
  { youtubeId: "oIRmZvIpwqE", person: "Kim", kind: "student", parentOf: undefined, title: "Was it worth it?", category: "Worth it", rating: 5, role: "primary", placements: ["pricing-worth-it"] },
  { youtubeId: "xblNWUCnhoA", person: "Maddie", kind: "student", parentOf: undefined, title: "What recruiting felt like at first", category: "Relatability", rating: 4, role: "primary", placements: ["home-problem"] },
  { youtubeId: "hQNEBga6sXY", person: "Maddie", kind: "student", parentOf: undefined, title: "Who this program is not for", category: "Trust", rating: 4, role: "primary", placements: ["faq-right-fit"] },
  { youtubeId: "ck-FDQK5hdQ", person: "Maddie", kind: "student", parentOf: undefined, title: "Was it worth it?", category: "Worth it", rating: 5, role: "library", placements: [] },
  { youtubeId: "yCbkgaedgm8", person: "Maddie", kind: "student", parentOf: undefined, title: "Landing my internship", category: "Proof", rating: 4, role: "primary", placements: ["results-landed"] },
  { youtubeId: "gOWPUIMuy_g", person: "Maddie", kind: "student", parentOf: undefined, title: "Where I was before the program", category: "Relatability", rating: 3, role: "library", placements: [] },
  { youtubeId: "UHD-1PtW1zQ", person: "Maddie", kind: "student", parentOf: undefined, title: "Pods and accountability", category: "How it works", rating: 4, role: "library", placements: [] },
  { youtubeId: "HlEDBREr93U", person: "Maddie", kind: "student", parentOf: undefined, title: "My first mock interview", category: "Relatability", rating: 4, role: "primary", placements: ["program-interview-reps"] },
  { youtubeId: "B6ItUko1cTA", person: "Maddie", kind: "student", parentOf: undefined, title: "Talking to 70+ bankers", category: "Proof", rating: 5, role: "primary", placements: ["program-outreach"] },
  { youtubeId: "-tVPeLI1uyY", person: "Maddie", kind: "student", parentOf: undefined, title: "Treating bankers like normal people", category: "Proof", rating: 4, role: "alternate", placements: ["program-outreach"] },
  { youtubeId: "x743IEQAeRo", person: "Maddie", kind: "student", parentOf: undefined, title: "It's never too early to start", category: "Trust", rating: 0, role: "primary", placements: ["faq-too-early"] },
  { youtubeId: "rgSOc1D66vo", person: "Maddie", kind: "student", parentOf: undefined, title: "From shy to confident", category: "Transformation", rating: 5, role: "hero", placements: ["home-hero"] },
  { youtubeId: "nWQ-XqmOaok", person: "Pranav", kind: "student", parentOf: undefined, title: "From shy to confident through reps and coffee chats", category: "Transformation", rating: 4, role: "primary", placements: ["faq-shy"] },
  { youtubeId: "AI6lsV5fDhI", person: "Pranav", kind: "student", parentOf: undefined, title: "My most recent internship", category: "Proof", rating: 5, role: "primary", placements: ["results-landed"] },
  { youtubeId: "Lxg7xNnv-2A", person: "Pranav", kind: "student", parentOf: undefined, title: "Rebuilding my LinkedIn and elevator pitch", category: "Transformation", rating: 4, role: "alternate", placements: ["program-candidate-brand"] },
  { youtubeId: "CbubLIpB0sQ", person: "Pranav", kind: "student", parentOf: undefined, title: "Finding what makes me different", category: "Transformation", rating: 4, role: "primary", placements: ["program-story-bank"] },
  { youtubeId: "Rjt7WVJ4prE", person: "Pranav", kind: "student", parentOf: undefined, title: "Was it worth it?", category: "Worth it", rating: 5, role: "library", placements: [] },
  { youtubeId: "LUxbBQ6Lgao", person: "Pranav", kind: "student", parentOf: undefined, title: "I didn't know what to do. Then I had a plan.", category: "Transformation", rating: 4, role: "hero", placements: ["program-hero"] },
  { youtubeId: "3KvECu21E78", person: "Nathaniel", kind: "student", parentOf: undefined, title: "Tyler as a coach", category: "Trust", rating: 5, role: "primary", placements: ["faq-coach"] },
  { youtubeId: "Dk3Esuv2omo", person: "Nathaniel", kind: "student", parentOf: undefined, title: "My biggest growth", category: "Transformation", rating: 4, role: "primary", placements: ["results-became"] },
  { youtubeId: "4l5tk-RTLtE", person: "Nathaniel", kind: "student", parentOf: undefined, title: "How many internships I landed", category: "Proof", rating: 5, role: "primary", placements: ["home-results"] },
  { youtubeId: "cxoNC0Y6wsM", person: "Nathaniel", kind: "student", parentOf: undefined, title: "Was it worth it?", category: "Worth it", rating: 5, role: "alternate", placements: ["pricing-worth-it"] },
  { youtubeId: "EsK5agryeFY", person: "Nathaniel", kind: "student", parentOf: undefined, title: "Accountability pods", category: "How it works", rating: 4, role: "library", placements: [] },
  { youtubeId: "7tl4FaJbDwM", person: "Nathaniel", kind: "student", parentOf: undefined, title: "How hard recruiting really is", category: "How it works", rating: 0, role: "library", placements: [] },
  { youtubeId: "_lhJNOtMIiI", person: "Steve", kind: "parent", parentOf: "James", title: "Who this program is not for", category: "Trust", rating: 0, role: "library", placements: [] },
  { youtubeId: "PcNM6JnGM9U", person: "Steve", kind: "parent", parentOf: "James", title: "Why we invested in this", category: "Trust", rating: 3, role: "library", placements: [] },
  { youtubeId: "sPPLklF_vBE", person: "Steve", kind: "parent", parentOf: "James", title: "The program in one sentence", category: "Proof", rating: 4, role: "library", placements: [] },
  { youtubeId: "dO6HA4tRBPo", person: "Steve", kind: "parent", parentOf: "James", title: "Building communication skills", category: "Transformation", rating: 0, role: "library", placements: [] },
  { youtubeId: "CLNOTVmUKp0", person: "Steve", kind: "parent", parentOf: "James", title: "Helping James get there", category: "Transformation", rating: 4, role: "library", placements: [] },
  { youtubeId: "wl45d3iEkbk", person: "Steve", kind: "parent", parentOf: "James", title: "James's transformation", category: "Transformation", rating: 4, role: "library", placements: [] },
  { youtubeId: "EpFzeidIlwk", person: "Steve", kind: "parent", parentOf: "James", title: "Developing critical thinking", category: "Proof", rating: 0, role: "library", placements: [] },
  { youtubeId: "jnqTZ9YggUU", person: "Steve", kind: "parent", parentOf: "James", title: "A thank-you for the mentorship", category: "Proof", rating: 5, role: "primary", placements: ["parents-coach"] },
  { youtubeId: "JkpO4huyVZo", person: "Steve", kind: "parent", parentOf: "James", title: "Why we went all in", category: "Proof", rating: 5, role: "primary", placements: ["parents-results"] },
  { youtubeId: "kwdvLqeNeow", person: "Steve", kind: "parent", parentOf: "James", title: "The proof we saw", category: "Proof", rating: 5, role: "alternate", placements: ["parents-results"] },
  { youtubeId: "6cIM_G9GHbI", person: "Steve", kind: "parent", parentOf: "James", title: "Was it worth it?", category: "Worth it", rating: 5, role: "alternate", placements: ["pricing-worth-it"] },
  { youtubeId: "WA5_7WhPhec", person: "Steve", kind: "parent", parentOf: "James", title: "James's transformation: comfort and laser focus", category: "Transformation", rating: 5, role: "primary", placements: ["parents-family"] },
  { youtubeId: "A80kP4Oq-dI", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Giving her a leg up", category: "Proof", rating: 4, role: "library", placements: [] },
  { youtubeId: "fLihrnyltNk", person: "Greg", kind: "parent", parentOf: "Maddie", title: "What the program gave her", category: "Proof", rating: 5, role: "alternate", placements: ["parents-skills"] },
  { youtubeId: "Il1iH3jpZzI", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Public speaking and confidence", category: "Proof", rating: 5, role: "primary", placements: ["parents-skills"] },
  { youtubeId: "44O-rA-wB44", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Seeing the results", category: "Proof", rating: 5, role: "primary", placements: ["parents-results"] },
  { youtubeId: "oGSFrmrNjBQ", person: "Greg", kind: "parent", parentOf: "Maddie", title: "The program in one sentence", category: "Worth it", rating: 5, role: "primary", placements: ["home-parent"] },
  { youtubeId: "aVcHIEV8_T0", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Why this over AI", category: "Proof", rating: 5, role: "primary", placements: ["faq-ai"] },
  { youtubeId: "tvQ-vdk7L4s", person: "Greg", kind: "parent", parentOf: "Maddie", title: "A taste of the real world", category: "Proof", rating: 0, role: "library", placements: [] },
  { youtubeId: "64R01N1Kn-Y", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Was it worth it?", category: "Worth it", rating: 5, role: "alternate", placements: ["pricing-worth-it"] },
  { youtubeId: "87FzH4Zxxcc", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Was it worth it? (take 2)", category: "Worth it", rating: 5, role: "library", placements: [] },
  { youtubeId: "0Pykk8D84NM", person: "Greg", kind: "parent", parentOf: "Maddie", title: "Watching my daughter become confident", category: "Proof", rating: 5, role: "primary", placements: ["parents-family"] },
  { youtubeId: "bSkp-cI-bkA", person: "Vasavi", kind: "student", parentOf: undefined, title: "My 60-second pitch", category: "How it works", rating: 5, role: "primary", placements: ["program-candidate-brand"] },
  { youtubeId: "hqagXMFzilA", person: "Vasavi", kind: "student", parentOf: undefined, title: "Building out my resume", category: "How it works", rating: 4, role: "alternate", placements: ["program-candidate-brand"] },
  { youtubeId: "vfGBf27EXyk", person: "Vasavi", kind: "student", parentOf: undefined, title: "Tyler as a coach", category: "Trust", rating: 5, role: "primary", placements: ["program-coaching"] },
  { youtubeId: "bRlmt_JEnBQ", person: "Vasavi", kind: "student", parentOf: undefined, title: "How my confidence grew", category: "Transformation", rating: 4, role: "library", placements: [] },
  { youtubeId: "hAiMEoUFles", person: "Vasavi", kind: "student", parentOf: undefined, title: "AI and this program", category: "Transformation", rating: 4, role: "alternate", placements: ["faq-ai"] },
  { youtubeId: "S1Fv1cbX6gU", person: "Vasavi", kind: "student", parentOf: undefined, title: "Talking to 45 people", category: "Proof", rating: 4, role: "alternate", placements: ["program-outreach"] },
  { youtubeId: "jms8S26B7UM", person: "Vasavi", kind: "student", parentOf: undefined, title: "Accountability pods", category: "How it works", rating: 4, role: "library", placements: [] },
  { youtubeId: "quaXull0ZH8", person: "Vasavi", kind: "student", parentOf: undefined, title: "My most recent internship", category: "Proof", rating: 4, role: "library", placements: [] },
  { youtubeId: "FtdBIC2tUEo", person: "Vasavi", kind: "student", parentOf: undefined, title: "My recent internships", category: "Proof", rating: 5, role: "primary", placements: ["results-landed"] },
  { youtubeId: "a3reYCRJUNU", person: "Vasavi", kind: "student", parentOf: undefined, title: "How this changed my life", category: "Proof", rating: 5, role: "primary", placements: ["results-became"] },
  { youtubeId: "oMGm2ZbiigM", person: "Vasavi", kind: "student", parentOf: undefined, title: "It's never too early to start", category: "Trust", rating: 4, role: "library", placements: [] },
  { youtubeId: "Vb-zLkNsddM", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Watching Ishank grow", category: "Proof", rating: 4, role: "library", placements: [] },
  { youtubeId: "CbqHmX_fDkw", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Parents don't know how recruiting works", category: "How it works", rating: 5, role: "hero", placements: ["parents-hero"] },
  { youtubeId: "kBXMNAofAxM", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "The changes in two months", category: "Proof", rating: 4, role: "library", placements: [] },
  { youtubeId: "Tk7xFgtcmUc", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Pride as a parent", category: "Transformation", rating: 5, role: "alternate", placements: ["parents-results"] },
  { youtubeId: "-Lx63esArBE", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Taking the pressure off me as a parent", category: "Transformation", rating: 5, role: "primary", placements: ["parents-relief"] },
  { youtubeId: "MwuHOzXdSpE", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Growth tenfold", category: "Transformation", rating: 5, role: "primary", placements: ["parents-family"] },
  { youtubeId: "uPEfD2zR2cs", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Priceless", category: "Worth it", rating: 5, role: "primary", placements: ["pricing-worth-it"] },
  { youtubeId: "hwpEEALK4F4", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Building clarity", category: "Trust", rating: 5, role: "primary", placements: ["parents-skills"] },
  { youtubeId: "SxJvnp9H3PE", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "When I realized this was working", category: "Trust", rating: 3, role: "library", placements: [] },
  { youtubeId: "xaLihtrDOFQ", person: "Mangesh", kind: "parent", parentOf: "Ishank", title: "Growing by leaps and bounds", category: "Proof", rating: 5, role: "alternate", placements: ["parents-results"] },
];

const roleRank = (r: VideoRole) => ({ hero: 0, primary: 1, alternate: 2, library: 3 })[r];

// Library order: role rank, then rating (highest first).
export const byRank = (a: VideoTestimonial, b: VideoTestimonial) => roleRank(a.role) - roleRank(b.role) || b.rating - a.rating;

// Clips for one page section: hero and primary only, best first.
export const byPlacement = (p: Placement) =>
  videoTestimonials.filter((v) => v.placements.includes(p) && v.role !== "alternate").sort(byRank);

// Every clip, in library order.
export const libraryVideos = () => [...videoTestimonials].sort(byRank);

// "Kim" or "Greg · Maddie's dad".
export const credit = (v: VideoTestimonial) => (v.kind === "parent" && v.parentOf ? `${v.person} · ${v.parentOf}'s dad` : v.person);

export const videoCategories: VideoCategory[] = ["Transformation", "Relatability", "Proof", "Worth it", "How it works", "Trust"];
