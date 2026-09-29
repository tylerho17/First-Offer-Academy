import { formatEvent, withUtm, type EventItem } from "@/lib/events";

// A dated session card: navy calendar tile, title, "Tue · 7:00–7:45 PM PT ·
// Google Meet", Register (Luma) and Add to calendar (.ics). Without a known
// date: no tile, and "Date on Luma".
export default function EventCard({ e, page, showAudience = false }: { e: EventItem; page: string; showAudience?: boolean }) {
  const d = formatEvent(e);
  return (
    <article className={`card event-card${d ? "" : " is-undated"}`}>
      {d && (
        <div className="event-tile" aria-hidden="true">
          <span className="event-tile-month">{d.month}</span>
          <strong>{d.day}</strong>
          <span className="event-tile-weekday">{d.weekday}</span>
        </div>
      )}
      <div className="event-body">
        {showAudience && <span className="tag">{e.audience}</span>}
        <h3>{e.title}</h3>
        <p className="event-meta">
          {d ? <><span className="sr-only">{d.long}, </span>{d.line} · {e.location}</> : `Date on Luma · ${e.location}`}
        </p>
        <div className="event-actions">
          <a href={withUtm(e.url, page)} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Register<span className="sr-only"> for {e.title} (opens Luma in a new tab)</span>
          </a>
          {d && (
            <a href={`/api/events/${e.id}/ics`} className="event-ics" download={`${e.id}.ics`}>
              Add to calendar<span className="sr-only">: {e.title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
