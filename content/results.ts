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

export type Track = "finance" | "marketing" | "accounting";

export type Result = {
  id: string;
  type: "student" | "parent";
  outcome: string; // "Landed a marketing internship, freshman year"
  firstName: string;
  lastInitial?: string;
  major?: string; // for parents: who they are, e.g. "Parent of a pilot student"
  track?: Track;
  quote?: string; // one line
  employer?: string;
  photo?: string;
  videoId?: string;
  videoPoster?: string;
  duration?: string;
  permissions: { quote: boolean; employer: boolean; photo: boolean };
};

// TODO(Tyler): [[RESULTS_ENTRIES]]: add student outcomes here, newest at
// the top (that's the order they render). Example:
// { id: "jamie-l", type: "student", outcome: "Landed a marketing internship, freshman year",
//   firstName: "Jamie", lastInitial: "L", major: "Business", track: "marketing",
//   quote: "…", permissions: { quote: true, employer: false, photo: false } },
const students: Result[] = [];

// Custom thumbnails (in /public) that replace YouTube's frame, e.g. to hide
// the Zoom name tag.
// TODO(Tyler): [[TOM_POSTER_PATH]]: poster for "Kim's before and after"
// (replaces the mid-gesture frame), e.g. "/images/posters/tom-before-after.jpg".
const posters: Record<string, string> = {
  // "tom-before-after": "/images/posters/tom-before-after.jpg",
};

// Parent videos, from content/videoTestimonials.ts (written permission on
// file; first names only). Before-and-after first.
const parents: Result[] = videoTestimonials
  .filter((v) => v.permitted && v.youtubeId)
  .map((v) => ({
    id: v.id,
    type: "parent",
    outcome: v.title,
    firstName: v.speaker,
    major: v.speakerLabel,
    videoId: v.youtubeId,
    ...(posters[v.id] ? { videoPoster: posters[v.id] } : {}),
    duration: v.duration,
    permissions: { quote: true, employer: false, photo: false },
  }));

// Students first (newest first), then parents.
export const results: Result[] = [...students, ...parents];

export const permittedResults = () => results.filter((r) => r.permissions.quote);

export const trackLabel: Record<Track, string> = { finance: "Finance", marketing: "Marketing", accounting: "Accounting" };
