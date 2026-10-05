import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventCard from "@/components/EventCard";
import FinalCta from "@/components/sections/FinalCta";
import { calendars, eventColumns } from "@/content/events";
import { upcomingEvents, withUtm } from "@/lib/events";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Free events",
  description: "Free parent info sessions and weekly student workshops from First Offer Academy, live on Google Meet.",
};

const columns = eventColumns;

export default async function EventsPage() {
  const lists = await Promise.all(columns.map((c) => upcomingEvents(c.audience)));
  // Rows for cards: the longer column's count (an empty column shows one note).
  const cardRows = Math.max(1, ...lists.map((l) => l.length));
  return (
    <>
      <PageHero
        eyebrow="Free events"
        title="Learn how recruiting works, live and free."
        lede="Parent info sessions and student workshops on Google Meet. Register on Luma, or follow a calendar and every new date lands in your inbox. All times Pacific."
      />
      <section className="section" style={{ paddingTop: 24 }}>
        {/* One grid, shared rows: heading, subhead, one row per card, then the
            Luma link. Each column is a subgrid, so the H2s, subheads, card
            rows and links line up across columns. A shorter column leaves its
            last card rows empty. Mobile: one column, parents first. */}
        <div className="wrap events-columns" style={{ ["--card-rows" as string]: cardRows } as React.CSSProperties}>
          {columns.map((c, i) => (
            <div key={c.audience} className="events-column">
              <h2>{c.title}</h2>
              <p className="events-note">{c.note}</p>
              {lists[i].length > 0 ? (
                lists[i].map((e) => <EventCard key={e.id} e={e} page="events" />)
              ) : (
                <p className="events-note">No sessions are scheduled right now.</p>
              )}
              <p className="events-follow">
                <a href={withUtm(calendars[c.audience].url, "events")} className="link-arrow" target="_blank" rel="noopener noreferrer">
                  Follow the calendar on Luma →<span className="sr-only"> ({c.title.toLowerCase()}, opens in a new tab)</span>
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
