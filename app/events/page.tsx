import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventCard from "@/components/EventCard";
import FinalCta from "@/components/sections/FinalCta";
import { calendars } from "@/content/events";
import { upcomingEvents, withUtm, type Audience } from "@/lib/events";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Free events",
  description: "Free parent info sessions and weekly student workshops from First Offer Academy, live on Google Meet.",
};

const columns: { audience: Audience; title: string; note: string }[] = [
  { audience: "Parents", title: "For parents", note: "How internship recruiting works now, and whether the program fits." },
  { audience: "Students", title: "For students", note: "Live Tuesdays at 7 PM PT: resumes, outreach, networking, and interview reps." },
];

export default async function EventsPage() {
  const lists = await Promise.all(columns.map((c) => upcomingEvents(c.audience)));
  return (
    <>
      <PageHero
        eyebrow="Free events"
        title="Learn how recruiting works, live and free."
        lede="Parent info sessions and student workshops on Google Meet. Register on Luma, or follow a calendar and every new date lands in your inbox. All times Pacific."
      />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap events-columns">
          {columns.map((c, i) => (
            <div key={c.audience} className="events-column">
              <h2>{c.title}</h2>
              <p className="events-note">{c.note}</p>
              {lists[i].length > 0 ? (
                <div className="event-list">
                  {lists[i].map((e) => <EventCard key={e.id} e={e} page="events" />)}
                </div>
              ) : (
                <p className="events-note">No sessions are scheduled right now.</p>
              )}
              <p style={{ marginTop: 16 }}>
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
