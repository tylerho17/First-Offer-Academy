import Link from "next/link";
import { upcomingEvents } from "@/lib/events";
import EventCard from "../EventCard";
import EventCalendars from "./EventCalendars";

// The next 3 upcoming sessions across both audiences, each tagged; the two
// Luma calendars when none are upcoming. Homepage and track pages.
export default async function EventsStrip({ page = "home", flush = false }: { page?: string; flush?: boolean }) {
  const list = (await upcomingEvents()).slice(0, 3);
  return (
    <section className="section" id="events" style={flush ? { paddingTop: 0 } : undefined}>
      <div className="wrap">
        <div className="section-head row-head">
          <div>
            <span className="eyebrow">Free events</span>
            <h2>Free sessions for parents and students</h2>
          </div>
          <Link href="/events" className="link-arrow">All events →</Link>
        </div>
        {list.length > 0 ? (
          <div className="event-list">
            {list.map((e) => <EventCard key={e.id} e={e} page={page} showAudience />)}
          </div>
        ) : (
          <EventCalendars page={page} />
        )}
      </div>
    </section>
  );
}
