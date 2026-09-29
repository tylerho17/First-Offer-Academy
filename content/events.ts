// Fallback for lib/events.ts: used only when the Luma feed fails or returns
// nothing. Dates copied from the Luma calendars on 2026-09-29; Luma is the
// source of truth, so update these (or leave startAt empty to show "Date on
// Luma") if sessions move.

export type Audience = "Parents" | "Students";

export type EventItem = {
  id: string; // Luma slug: luma.com/<id>
  title: string;
  audience: Audience;
  startAt?: string; // ISO; empty = date not known here
  endAt?: string;
  timezone: string;
  location: string;
  url: string; // the Luma event page
};

export const calendars: Record<Audience, { id: string; url: string }> = {
  Parents: { id: "cal-Hrrgm78gZqZ7SD1", url: "https://luma.com/parentFOA" },
  Students: { id: "cal-fpzON4satzremqd", url: "https://luma.com/firstofferacademy" },
};

const at = (id: string, title: string, audience: Audience, startAt: string, endAt: string): EventItem => ({
  id, title, audience, startAt, endAt, timezone: "America/Los_Angeles", location: "Google Meet", url: `https://luma.com/${id}`,
});

export const fallbackEvents: EventItem[] = [
  at("wu2bpf5a", "How Freshman Recruiting Actually Works", "Parents", "2026-10-16T02:00:00.000Z", "2026-10-16T02:45:00.000Z"),
  at("x3dng38m", "Inside the First Offer Academy", "Parents", "2026-11-06T03:00:00.000Z", "2026-11-06T03:45:00.000Z"),
  at("f6k7qs7q", "Is It Right for Your Student?", "Parents", "2026-12-11T03:00:00.000Z", "2026-12-11T03:45:00.000Z"),
  at("ixfwrk34", "The Freshman Internship Timeline", "Students", "2026-10-07T02:00:00.000Z", "2026-10-07T02:45:00.000Z"),
  at("menjphrd", "Resume With Zero Experience", "Students", "2026-10-14T02:00:00.000Z", "2026-10-14T02:45:00.000Z"),
  at("tn8ngqam", "How Freshman Recruiting Actually Works", "Students", "2026-10-21T02:00:00.000Z", "2026-10-21T02:45:00.000Z"),
  at("l3uwmi8s", "Your 60-Second Intro", "Students", "2026-10-28T02:00:00.000Z", "2026-10-28T02:45:00.000Z"),
  at("xrmhasnf", "Build Your Networking Target List & Emailing Etiquette", "Students", "2026-11-04T03:00:00.000Z", "2026-11-04T03:45:00.000Z"),
  at("449m4ni1", "Turn Networking Into Referrals", "Students", "2026-11-11T03:00:00.000Z", "2026-11-11T03:45:00.000Z"),
  at("otu4u9p7", "Build Your Story Bank", "Students", "2026-11-18T03:00:00.000Z", "2026-11-18T03:45:00.000Z"),
  at("sjp86v3r", "Technicals 101", "Students", "2026-11-25T03:00:00.000Z", "2026-11-25T03:45:00.000Z"),
  at("u5mud869", "Your Winter Break Game Plan", "Students", "2026-12-02T03:00:00.000Z", "2026-12-02T03:45:00.000Z"),
  at("3286ispf", "Final Info Session", "Students", "2026-12-09T03:00:00.000Z", "2026-12-09T03:45:00.000Z"),
];
