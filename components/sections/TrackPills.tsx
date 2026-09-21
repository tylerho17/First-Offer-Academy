import Link from "next/link";
import { tracks } from "@/content/tracks";

const topics = [
  { label: "Freshman timeline", href: "/blog/freshman-internship-timeline" },
  { label: "Cold emails", href: "/blog/cold-email-template" },
  { label: "Tell me about yourself", href: "/blog/tell-me-about-yourself" },
  { label: "Parent info sessions", href: "/events" },
  { label: "Pricing", href: "/pricing" },
];

export default function TrackPills() {
  return (
    <div className="pill-row" aria-label="Popular">
      <span className="pill-label">Popular:</span>
      {tracks.map((t) => (
        <Link key={t.slug} href={`/tracks/${t.slug}`} className="topic-pill">{t.name}</Link>
      ))}
      {topics.map((t) => (
        <Link key={t.href} href={t.href} className="topic-pill">{t.label}</Link>
      ))}
    </div>
  );
}
