import { calendars, fallbackEvents, type Audience, type EventItem } from "@/content/events";

export type { Audience, EventItem };

// Free sessions, from Luma's public calendar feed (one per audience),
// refreshed hourly (ISR). If a calendar's feed fails or comes back empty, its
// events come from content/events.ts instead. Never throws.

const PREFIXES = ["First Offer Academy for Parents: ", "First Offer Academy: "];
const clean = (name: string) => PREFIXES.reduce((t, p) => (t.startsWith(p) ? t.slice(p.length) : t), name).trim();

type LumaEntry = {
  event?: { url?: string; name?: string; start_at?: string; end_at?: string; timezone?: string; location_type?: string };
};

async function fromLuma(audience: Audience): Promise<EventItem[]> {
  const res = await fetch(
    `https://api.lu.ma/calendar/get-items?calendar_api_id=${calendars[audience].id}&period=future`,
    { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) },
  );
  if (!res.ok) throw new Error(`Luma ${res.status}`);
  const data = (await res.json()) as { entries?: LumaEntry[] };
  return (data.entries ?? [])
    .map((e) => e.event)
    .filter((ev): ev is NonNullable<LumaEntry["event"]> => !!ev?.url && !!ev.name)
    .map((ev) => ({
      id: ev.url!,
      title: clean(ev.name!),
      audience,
      startAt: ev.start_at,
      endAt: ev.end_at,
      timezone: ev.timezone || "America/Los_Angeles",
      location: ev.location_type === "meet" ? "Google Meet" : "Online",
      url: `https://luma.com/${ev.url}`,
    }));
}

export type EventsResult = { events: EventItem[]; source: Record<Audience, "luma" | "fallback"> };

// Every known event (past ones included), by audience.
async function load(): Promise<EventsResult> {
  const source = {} as EventsResult["source"];
  const lists = await Promise.all(
    (["Parents", "Students"] as Audience[]).map(async (a) => {
      try {
        const list = await fromLuma(a);
        if (list.length) {
          source[a] = "luma";
          return list;
        }
      } catch (e) {
        console.error(`[events] Luma feed failed for ${a}:`, e);
      }
      source[a] = "fallback";
      return fallbackEvents.filter((e) => e.audience === a);
    }),
  );
  return { events: lists.flat(), source };
}

// Upcoming events (startAt >= now), soonest first. Events without a known
// date sort last and are kept (they render as "Date on Luma").
export async function upcomingEvents(audience?: Audience): Promise<EventItem[]> {
  const { events } = await load();
  const now = Date.now();
  return events
    .filter((e) => !audience || e.audience === audience)
    .filter((e) => !e.startAt || new Date(e.startAt).getTime() >= now)
    .sort((a, b) => (a.startAt ?? "~").localeCompare(b.startAt ?? "~"));
}

export async function findEvent(id: string): Promise<EventItem | undefined> {
  return (await load()).events.find((e) => e.id === id);
}

export async function eventsSource() {
  return (await load()).source;
}

// Luma links carry where on the site they were clicked.
export const withUtm = (url: string, medium: string) =>
  `${url}${url.includes("?") ? "&" : "?"}utm_source=website&utm_medium=${encodeURIComponent(medium)}`;

// "Tue · 7:00–7:45 PM PT"
export function formatEvent(e: EventItem) {
  if (!e.startAt) return null;
  const tz = "America/Los_Angeles";
  const start = new Date(e.startAt);
  const end = e.endAt ? new Date(e.endAt) : null;
  const part = (d: Date, o: Intl.DateTimeFormatOptions) => d.toLocaleString("en-US", { timeZone: tz, ...o });
  const time = (d: Date) => part(d, { hour: "numeric", minute: "2-digit" }).replace(/\s?(AM|PM)$/, "");
  const ampm = (d: Date) => part(d, { hour: "numeric" }).slice(-2);
  const range = end
    ? ampm(start) === ampm(end)
      ? `${time(start)}–${time(end)} ${ampm(end)}`
      : `${time(start)} ${ampm(start)}–${time(end)} ${ampm(end)}`
    : `${time(start)} ${ampm(start)}`;
  return {
    month: part(start, { month: "short" }),
    day: part(start, { day: "numeric" }),
    weekday: part(start, { weekday: "short" }),
    long: part(start, { weekday: "long", month: "long", day: "numeric" }),
    line: `${part(start, { weekday: "short" })} · ${range} PT`,
  };
}
