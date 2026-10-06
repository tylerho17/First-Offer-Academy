import { calendars } from "@/content/events";
import { withUtm } from "@/lib/events";
import { Calendar } from "../Icons";

// The two Luma calendars, shown only when no dated session is upcoming.
const copy = [
  { who: "Parents" as const, cta: "See parent events", body: "Info sessions on how internship recruiting works now, and what a freshman search looks like." },
  { who: "Students" as const, cta: "See student events", body: "Free workshops: resumes, cold email, networking calls, and interview reps. Live Tuesdays, 7 PM PT." },
];

export default function EventCalendars({ page, className = "" }: { page: string; className?: string }) {
  return (
    <ul className={`calendar-grid ${className}`.trim()}>
      {copy.map((c) => (
        <li className="card calendar-card" key={c.who}>
          <span className="icon-dot"><Calendar /></span>
          <h3>{c.who}</h3>
          <p>{c.body}</p>
          <a href={withUtm(calendars[c.who].url, page)} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            {c.cta}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
