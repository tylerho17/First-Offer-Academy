// Free events: parent info sessions, student workshops, livestreams.
// Shown on the home page schedule, /events, and each track page.
// Past events drop off automatically (date before today).

export type EventItem = {
  title: string;
  date: string; // ISO, e.g. "2026-10-14T18:30:00-07:00"
  kind: "Parent info session" | "Student workshop" | "Livestream";
  location: string; // "Zoom" or an address
  track?: "finance" | "consulting" | "marketing" | "tech";
  registerUrl: string;
};

export const events: EventItem[] = [
  // {
  //   title: "Parent info session: how internship recruiting works now",
  //   date: "2026-10-14T18:30:00-07:00",
  //   kind: "Parent info session",
  //   location: "Zoom",
  //   registerUrl: "https://calendly.com/...",
  // },
];

export const upcomingEvents = (track?: string) =>
  events
    .filter((e) => new Date(e.date).getTime() > Date.now())
    .filter((e) => !track || !e.track || e.track === track)
    .sort((a, b) => a.date.localeCompare(b.date));

export function formatEventDate(iso: string) {
  const d = new Date(iso);
  return {
    month: d.toLocaleString("en-US", { month: "short", timeZone: "America/Los_Angeles" }),
    day: d.toLocaleString("en-US", { day: "numeric", timeZone: "America/Los_Angeles" }),
    full: d.toLocaleString("en-US", {
      weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "2-digit",
      timeZone: "America/Los_Angeles", timeZoneName: "short",
    }),
  };
}
