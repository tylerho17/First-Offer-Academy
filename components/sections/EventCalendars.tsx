import { site } from "@/content/site";
import { Calendar } from "../Icons";

// The two Luma calendars. Subscribing there means every new date shows up
// without us republishing the site.
const calendars = [
  { who: "Parents", cta: "See parent events", url: site.luma.parents, body: "Info sessions on how internship recruiting works now, and what a first-year search looks like." },
  { who: "Students", cta: "See student events", url: site.luma.students, body: "Free workshops: resumes, cold email, networking calls, and interview reps." },
];

export default function EventCalendars({ className = "" }: { className?: string }) {
  return (
    <ul className={`calendar-grid ${className}`.trim()}>
      {calendars.map((c) => (
        <li className="card calendar-card" key={c.who}>
          <span className="icon-dot"><Calendar /></span>
          <h3>{c.who}</h3>
          <p>{c.body}</p>
          <a href={c.url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            {c.cta}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
