import Link from "next/link";
import { upcomingEvents } from "@/content/events";
import EventCard from "../EventCard";
import EventCalendars from "./EventCalendars";

// Homepage: the next 3 dated sessions, or both Luma calendars when none are listed.
export default function EventsStrip() {
  const list = upcomingEvents().slice(0, 3);
  return (
    <section className="section" id="events">
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
            {list.map((e) => <EventCard key={e.title + e.date} e={e} />)}
          </div>
        ) : (
          <EventCalendars />
        )}
      </div>
    </section>
  );
}
