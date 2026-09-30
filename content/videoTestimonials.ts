// Video testimonials (unlisted YouTube), shared with written permission.
// Companion to content/testimonials.ts, which holds written quotes.
//
// Clip map set 2026-09-30 from the YouTube channel review.
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

export type VideoPlacement =
  | "home-results"
  | "home-problem"
  | "home-leaves-with"
  | "program-hero"
  | "program-candidate-brand"
  | "program-story-bank"
  | "program-outreach"
  | "program-interview-reps"
  | "program-pods"
  | "program-tracks"
  | "parents"
  | "pricing"
  | "faq"
  | "stories"
  | "tracks-finance";

export type VideoTestimonial = {
  id: string;
  youtubeId: string;
  title: string;
  speaker: string; // first name only
  speakerLabel: string;
  duration: string; // "0:46", "" if unknown
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

const source: (Omit<VideoTestimonial, "youtubeId" | "permitted"> & { url: string })[] = [
  { id: "tom-before-after", speaker: "Tom", speakerLabel: "Parent of a pilot student", title: "Kim's before and after", url: "https://youtu.be/XGYHk9p-QA4", duration: "0:46", placements: ["home-results", "stories"] },
  { id: "tom-finance-growth", speaker: "Tom", speakerLabel: "Parent of a pilot student", title: "How Kim grew in finance", url: "https://youtu.be/T9QrVOsxlcA", duration: "0:31", placements: ["stories"] },
  { id: "tom-internships", speaker: "Tom", speakerLabel: "Parent of a pilot student", title: "Impact of Kim landing her internships", url: "https://youtu.be/qKjAzIlfJ9g", duration: "0:20", placements: ["stories"] },
  { id: "tom-finance-language", speaker: "Tom", speakerLabel: "Parent of a pilot student", title: "Kim learned the language of finance", url: "https://youtu.be/RNlk3JSTY2Y", duration: "0:34", placements: ["parents", "stories"] },
  { id: "tom-price", speaker: "Tom", speakerLabel: "Parent of a pilot student", title: "Why $5,000 is worth it", url: "https://youtu.be/OCm9FudIe94", duration: "0:41", placements: ["pricing", "stories"] },
  { id: "tom-not-for", speaker: "Tom", speakerLabel: "Parent of a pilot student", title: "Who First Offer Academy is not for", url: "https://youtu.be/c4J3yMBr4xI", duration: "0:36", placements: ["faq", "stories"] },
  { id: "maddie-shy", speaker: "Maddie", speakerLabel: "Pilot student · Finance track", title: "From shy to confident", url: "https://youtu.be/rgSOc1D66vo", duration: "0:35", placements: ["home-results", "faq"] },
  { id: "james-ai-coffee", speaker: "James", speakerLabel: "Pilot student · Finance track", title: "AI, email, and 120+ coffee chats", url: "https://youtu.be/BWgg35qEdbU", duration: "0:37", placements: ["home-results", "faq"] },
  { id: "maddie-timeline", speaker: "Maddie", speakerLabel: "Pilot student · Finance track", title: "Realizing how early recruiting starts", url: "https://youtu.be/sEnPmcW3EGM", duration: "0:27", placements: ["home-problem"] },
  { id: "nathaniel-pitch", speaker: "Nathaniel", speakerLabel: "Pilot student · Finance track", title: "His 60-second pitch", url: "https://youtu.be/HvVub0kxvL4", duration: "0:57", placements: ["home-leaves-with"] },
  { id: "pranav-blueprint", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "Not knowing what to do, then having a blueprint", url: "https://youtu.be/LUxbBQ6Lgao", duration: "0:30", placements: ["program-hero"] },
  { id: "pranav-brand", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "LinkedIn, elevator pitch, and resume", url: "https://youtu.be/Lxg7xNnv-2A", duration: "0:55", placements: ["program-candidate-brand"] },
  { id: "kim-story", speaker: "Kim", speakerLabel: "Pilot student · Finance track", title: "Tell me about yourself: finding her story", url: "https://youtu.be/m60kZzR9Gvc", duration: "1:10", placements: ["program-story-bank"] },
  { id: "kim-email", speaker: "Kim", speakerLabel: "Pilot student · Finance track", title: "How to write an email that gets answered", url: "https://youtu.be/TpBCXQcc4Bg", duration: "1:16", placements: ["program-outreach"] },
  { id: "maddie-70-bankers", speaker: "Maddie", speakerLabel: "Pilot student · Finance track", title: "Talking to 70+ bankers", url: "https://youtu.be/B6ItUko1cTA", duration: "0:24", placements: ["program-outreach"] },
  { id: "pranav-mocking", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "Before and after mock interviews", url: "https://youtu.be/wmhqPKLU1u0", duration: "0:32", placements: ["program-interview-reps"] },
  { id: "pranav-pods", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "Pods and accountability", url: "https://youtu.be/8X5KYzXjyGU", duration: "0:38", placements: ["program-pods"] },
  { id: "kim-track", speaker: "Kim", speakerLabel: "Pilot student · Finance track", title: "Choosing her track", url: "https://youtu.be/zS4-KiVET-Q", duration: "0:58", placements: ["program-tracks"] },
  { id: "maddie-marketing", speaker: "Maddie", speakerLabel: "Pilot student · Finance track", title: "From marketing to her career goal", url: "https://youtu.be/85JU3RXSaig", duration: "0:35", placements: ["program-tracks"] },
  { id: "kim-changed", speaker: "Kim", speakerLabel: "Pilot student · Finance track", title: "How the program changed her", url: "https://youtu.be/oIRmZvIpwqE", duration: "0:49", placements: ["parents"] },
  { id: "james-differently", speaker: "James", speakerLabel: "Pilot student · Finance track", title: "What he would have done differently", url: "https://youtu.be/LSf2nSKeQCI", duration: "0:40", placements: ["parents"] },
  { id: "nathaniel-without", speaker: "Nathaniel", speakerLabel: "Pilot student · Finance track", title: "Where he would be without it", url: "https://youtu.be/0a7sgsiVpsw", duration: "", placements: ["parents"] },
  { id: "pranav-worth", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "Was it worth it", url: "https://youtu.be/Rjt7WVJ4prE", duration: "0:26", placements: ["pricing"] },
  { id: "maddie-never-early", speaker: "Maddie", speakerLabel: "Pilot student · Finance track", title: "Never too early to start", url: "https://youtu.be/x743IEQAeRo", duration: "0:21", placements: ["faq"] },
  { id: "james-mentor", speaker: "James", speakerLabel: "Pilot student · Finance track", title: "Learning from Tyler", url: "https://youtu.be/_Qk7UzpmSwM", duration: "0:37", placements: ["faq"] },
  { id: "pranav-not-for", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "Determination and perseverance", url: "https://youtu.be/0dJMt4EJ6Vk", duration: "0:29", placements: ["faq"] },
  { id: "kim-total", speaker: "Kim", speakerLabel: "Pilot student · Finance track", title: "How many internships she landed", url: "https://youtu.be/SSsJBz_2oQU", duration: "0:14", placements: ["stories"] },
  { id: "pranav-recent", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "His most recent internship", url: "https://youtu.be/AI6lsV5fDhI", duration: "0:31", placements: ["stories"] },
  { id: "james-before", speaker: "James", speakerLabel: "Pilot student · Finance track", title: "Before the program", url: "https://youtu.be/42YO_2RCFZg", duration: "0:17", placements: ["stories"] },
  { id: "james-after", speaker: "James", speakerLabel: "Pilot student · Finance track", title: "How he stands out now", url: "https://youtu.be/MQdhsxjAo5I", duration: "0:15", placements: ["stories"] },
  { id: "james-recent", speaker: "James", speakerLabel: "Pilot student · Finance track", title: "His most recent internship", url: "https://youtu.be/6hXufOxuQe8", duration: "0:30", placements: ["stories"] },
  { id: "maddie-rejected", speaker: "Maddie", speakerLabel: "Pilot student · Finance track", title: "Getting rejected, and what came next", url: "https://youtu.be/kGs7dnlQwRw", duration: "0:32", placements: ["stories"] },
  { id: "maddie-ceo", speaker: "Maddie", speakerLabel: "Pilot student · Finance track", title: "Working with the CEO at her internship", url: "https://youtu.be/ZNcqRdfP8_8", duration: "0:30", placements: ["stories"] },
  { id: "nathaniel-first-offer", speaker: "Nathaniel", speakerLabel: "Pilot student · Finance track", title: "The day he got his first offer", url: "https://youtu.be/NKNHXxxNWz0", duration: "", placements: ["stories"] },
  { id: "pranav-technical", speaker: "Pranav", speakerLabel: "Pilot student · Finance track", title: "How technical finance really is", url: "https://youtu.be/Rs0qqorfgQE", duration: "0:34", placements: ["tracks-finance"] },
];

export const videoTestimonials: VideoTestimonial[] = source.map(({ url, ...v }) => ({
  ...v,
  permitted: true,
  youtubeId: youtubeId(url),
}));

// Permitted videos only, and only those with a usable YouTube id.
const live = () => videoTestimonials.filter((v) => v.permitted && v.youtubeId);

export const videosFor = (placement: VideoPlacement) => live().filter((v) => v.placements.includes(placement));
export const getVideo = (id: string) => live().find((v) => v.id === id);

// /results order: parent before-and-after first, then student results, then the rest.
const STORIES_ORDER = ["tom-before-after", "maddie-rejected", "james-before", "james-after", "kim-total", "nathaniel-first-offer", "pranav-recent", "james-recent", "maddie-ceo", "tom-price"];
export const storyVideos = () =>
  [...videosFor("stories")].sort((a, b) => {
    const ai = STORIES_ORDER.indexOf(a.id), bi = STORIES_ORDER.indexOf(b.id);
    return (ai === -1 ? STORIES_ORDER.length : ai) - (bi === -1 ? STORIES_ORDER.length : bi);
  });
