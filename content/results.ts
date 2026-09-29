// Every card on /results and the homepage results section. Add entries here.
//
// A card renders only when permissions.quote is true (written permission on
// file). The employer renders only when permissions.employer is true, the
// photo only when permissions.photo is true. Never invent an entry.
//
// Video cards: videoId is an unlisted YouTube id. videoPoster is an optional
// custom thumbnail in /public (use one to hide the Zoom name tag burned into
// the parent recordings); without it the card uses YouTube's maxresdefault
// image, falling back to hqdefault.

import { videoTestimonials } from "./videoTestimonials";

export type Track = "Finance" | "Marketing" | "Accounting";

export type Result = {
  id: string;
  kind: "student" | "parent";
  outcome: string; // "Landed a marketing internship, freshman year"
  firstName: string;
  lastInitial?: string;
  major?: string;
  track?: Track;
  oneLineQuote?: string;
  employer?: string;
  photo?: string;
  videoId?: string;
  videoPoster?: string;
  duration?: string;
  permissions: { quote: boolean; employer: boolean; photo: boolean };
};

// TODO(Tyler): [[RESULTS_ENTRIES]] — add student outcomes, e.g.
// { id: "jamie-l", kind: "student", outcome: "Landed a marketing internship, freshman year",
//   firstName: "Jamie", lastInitial: "L", major: "Business", track: "Marketing",
//   oneLineQuote: "…", permissions: { quote: true, employer: false, photo: false } },
const students: Result[] = [];

// Parent videos, from content/videoTestimonials.ts (written permission on
// file; first names only). Before-and-after first.
// TODO(Tyler): add a videoPoster for each to hide the Zoom name tag.
const parents: Result[] = videoTestimonials
  .filter((v) => v.permitted && v.youtubeId)
  .map((v) => ({
    id: v.id,
    kind: "parent",
    outcome: v.title,
    firstName: v.speaker,
    major: v.speakerLabel,
    videoId: v.youtubeId,
    duration: v.duration,
    permissions: { quote: true, employer: false, photo: false },
  }));

export const results: Result[] = [...students, ...parents];

export const permittedResults = () => results.filter((r) => r.permissions.quote);
