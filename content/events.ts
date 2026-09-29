// Free events: parent info sessions, student workshops, livestreams. The one
// data file for dated sessions: the homepage strip (next 3), /events, and each
// track page render these inline. Past events drop off automatically.

export type EventItem = {
  title: string;
  date: string; // ISO, e.g. "2026-10-14T18:30:00-07:00"
  kind: "Parent info session" | "Student workshop" | "Livestream";
  audience: "Parents" | "Students" | "Parents and students";
  location: string; // "Zoom" or an address
  track?: "finance" | "consulting" | "marketing";
  registerUrl: string; // the Luma event URL
};

export const events: EventItem[] = [
  // {
  //   title: "Parent info session: how internship recruiting works now",
  //   date: "2026-10-14T18:30:00-07:00",
  //   kind: "Parent info session",
  //   audience: "Parents",
  //   location: "Zoom",
  //   registerUrl: "https://luma.com/...",
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
