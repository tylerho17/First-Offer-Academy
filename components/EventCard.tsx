import { type EventItem, formatEventDate } from "@/content/events";

export default function EventCard({ e }: { e: EventItem }) {
  const d = formatEventDate(e.date);
  return (
    <article className="card event-card">
      <div className="event-date" aria-hidden="true">
        <span>{d.month}</span>
        <strong>{d.day}</strong>
      </div>
      <div className="event-body">
        <span className="tag">{e.kind}</span>
        <h3>{e.title}</h3>
        <p>{d.full} · {e.location}</p>
      </div>
      <a href={e.registerUrl} className="btn btn-secondary event-btn" target="_blank" rel="noopener noreferrer">Register</a>
    </article>
  );
}
