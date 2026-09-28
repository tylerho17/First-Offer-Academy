// Video testimonials (unlisted YouTube), shared with written permission.
// Companion to content/testimonials.ts, which holds written quotes.
//
// A video renders only when permitted === true. Every field we control uses
// first names only: no last name, firm, school, or city in titles, alt text,
// or aria labels.
//
// Known exception, approved by Tyler on 2026-09-28: the source recordings
// carry a Zoom name badge ("Tom <last name>") burned into the bottom-left of
// the frame, so it is visible in the YouTube thumbnail and during playback.
// It cannot be removed in code. If the videos are ever re-exported without
// the badge, swap the youtube ids here and nothing else needs to change.
// Videos are placed by `placements`, so one entry can appear in several spots.

export type VideoPlacement = "home-results" | "stories" | "pricing" | "faq";

export type VideoTestimonial = {
  id: string;
  youtubeId: string;
  title: string;
  speaker: string; // first name only
  speakerLabel: string;
  duration: string; // "0:46"
  placements: VideoPlacement[];
  permitted: boolean; // written permission on file
};

// Accepts youtu.be/ID, watch?v=ID, /shorts/ID, and /embed/ID.
export function youtubeId(url: string): string {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return u.pathname.slice(1).split("/")[0];
    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
      const parts = u.pathname.split("/").filter(Boolean); // shorts/ID, embed/ID, live/ID
      if (parts.length >= 2 && ["shorts", "embed", "live", "v"].includes(parts[0])) return parts[1];
    }
  } catch {}
  return "";
}

const PARENT = { speaker: "Tom", speakerLabel: "Parent of a pilot student", permitted: true } as const;

const source: (Omit<VideoTestimonial, "youtubeId" | "speaker" | "speakerLabel" | "permitted"> & { url: string })[] = [
  {
    id: "tom-before-after",
    title: "Kim's before and after",
    url: "https://youtu.be/XGYHk9p-QA4",
    duration: "0:46",
    placements: ["home-results", "stories"],
  },
  {
    id: "tom-finance-growth",
    title: "How Kim grew in finance",
    url: "https://youtu.be/T9QrVOsxlcA",
    duration: "0:31",
    placements: ["stories"],
  },
  {
    id: "tom-internships",
    title: "Impact of Kim landing her internships",
    url: "https://youtu.be/qKjAzIlfJ9g",
    duration: "0:20",
    placements: ["stories"],
  },
  {
    id: "tom-finance-language",
    title: "Kim learned the language of finance",
    url: "https://youtu.be/RNlk3JSTY2Y",
    duration: "0:34",
    placements: ["stories"],
  },
  {
    id: "tom-price",
    title: "Why $5,000 is worth it",
    url: "https://youtu.be/OCm9FudIe94",
    duration: "0:41",
    placements: ["pricing", "stories"],
  },
  {
    id: "tom-not-for",
    title: "Who First Offer Academy is not for",
    url: "https://youtu.be/c4J3yMBr4xI",
    duration: "0:36",
    placements: ["faq", "stories"],
  },
];

export const videoTestimonials: VideoTestimonial[] = source.map(({ url, ...v }) => ({
  ...v,
  ...PARENT,
  youtubeId: youtubeId(url),
}));

// Permitted videos only, and only those with a usable YouTube id.
const live = () => videoTestimonials.filter((v) => v.permitted && v.youtubeId);

export const videosFor = (placement: VideoPlacement) => live().filter((v) => v.placements.includes(placement));
export const getVideo = (id: string) => live().find((v) => v.id === id);

// /results order: before-and-after first, price second, then the rest.
const STORIES_ORDER = ["tom-before-after", "tom-price"];
export const storyVideos = () =>
  [...videosFor("stories")].sort((a, b) => {
    const ai = STORIES_ORDER.indexOf(a.id), bi = STORIES_ORDER.indexOf(b.id);
    return (ai === -1 ? STORIES_ORDER.length : ai) - (bi === -1 ? STORIES_ORDER.length : bi);
  });
