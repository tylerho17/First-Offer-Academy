import Link from "next/link";
import { upcomingEvents } from "@/content/events";
import EventCard from "../EventCard";
import CallLink from "../CallLink";
import EventCalendars from "./EventCalendars";

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
        {list.length > 0 && (
          <div className="event-list">
            {list.map((e) => <EventCard key={e.title + e.date} e={e} />)}
          </div>
        )}

        <EventCalendars className={list.length > 0 ? "is-below" : ""} />

        {list.length === 0 && (
          <div className="card empty-card" style={{ marginTop: 16 }}>
            <div>
              <h3>Want answers now?</h3>
              <p>Every new session is posted on the calendars above. For a conversation about your student, book a free call.</p>
            </div>
            <CallLink />
          </div>
        )}
      </div>
    </section>
  );
}
