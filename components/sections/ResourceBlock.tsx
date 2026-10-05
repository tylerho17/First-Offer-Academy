import Link from "next/link";
import LinkCard from "../ui/LinkCard";
import { resources } from "@/content/resources";

// "Free resources for students/parents": a few link cards from /resources,
// plus a link to the full hub.
export default function ResourceBlock({ audience, count = 3 }: { audience: "students" | "parents"; count?: number }) {
  const items = resources[audience].slice(0, count);
  if (items.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby={`free-${audience}`}>
      <div className="wrap">
        <div className="section-head row-head">
          <h2 id={`free-${audience}`}>Free resources for {audience}</h2>
          <Link href={`/resources#${audience}`} className="link-arrow">See all free resources →</Link>
        </div>
        <ul className="resource-grid">
          {items.map((r) => <li key={`${r.href}-${r.title}`}><LinkCard {...r} /></li>)}
        </ul>
      </div>
    </section>
  );
}
