import Link from "next/link";
import { upcomingEvents } from "@/content/events";
import EventCard from "../EventCard";
import CallLink from "../CallLink";

export default function EventsSchedule({ track, limit = 4, heading = true }: { track?: string; limit?: number; heading?: boolean }) {
  const list = upcomingEvents(track).slice(0, limit);
  return (
    <section className="section" style={{ paddingTop: 0 }} id="events">
      <div className="wrap">
        {heading && (
          <div className="section-head row-head">
            <div>
              <span className="eyebrow">Free events</span>
              <h2>Upcoming sessions for parents and students</h2>
            </div>
            <Link href="/events" className="link-arrow">All events →</Link>
          </div>
        )}
        {list.length > 0 ? (
          <div className="event-list">
            {list.map((e) => <EventCard key={e.title + e.date} e={e} />)}
          </div>
        ) : (
          <div className="card empty-card">
            <div>
              <h3>New dates are being scheduled.</h3>
              <p>Parent info sessions and free student workshops start this fall. Want answers now? Book a free call.</p>
            </div>
            <CallLink />
          </div>
        )}
      </div>
    </section>
  );
}
