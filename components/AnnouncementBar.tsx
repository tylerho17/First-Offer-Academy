import Link from "next/link";
import { site } from "@/content/site";

export default function AnnouncementBar() {
  const c = site.cohort;
  return (
    <div className="announce">
      <div className="wrap">
        <span>{c.name} starts {c.start} — <strong>{c.seats} seats</strong> —</span>
        <Link href="/apply">Apply</Link>
      </div>
    </div>
  );
}
