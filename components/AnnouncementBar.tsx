import Link from "next/link";
import { site } from "@/content/site";
import { upcomingEvents, formatEventDate } from "@/content/events";

export default function AnnouncementBar() {
  const next = upcomingEvents()[0];
  return (
    <div className="announce">
      <div className="wrap">
        {next ? (
          <>
            <span>{formatEventDate(next.date).full.split(",").slice(0, 2).join(",")} — <strong>{next.title}</strong> —</span>
            <a href={next.registerUrl} target="_blank" rel="noopener noreferrer">Register here</a>
          </>
        ) : (
          <>
            <span>{site.cohort.name} starts {site.cohort.start} — <strong>{site.cohort.seats} seats</strong> —</span>
            <Link href="/apply">Apply here</Link>
          </>
        )}
      </div>
    </div>
  );
}
