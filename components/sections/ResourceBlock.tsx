import Link from "next/link";
import ResourceCard from "../ui/ResourceCard";
import { resourceBlocks } from "@/content/resources";

// "Free resources for students/parents": one row of up to three cards, with
// "See all free resources →" on the heading's baseline.
export default function ResourceBlock({ audience }: { audience: "students" | "parents" }) {
  const items = resourceBlocks[audience].slice(0, 3);
  if (items.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby={`free-${audience}`}>
      <div className="wrap">
        <div className="resource-block-head">
          <h2 id={`free-${audience}`}>Free resources for {audience}</h2>
          <Link href={`/resources#${audience}`} className="link-arrow">See all free resources →</Link>
        </div>
        <ul className="resource-cards">
          {items.map((r) => <li key={`${r.href}-${r.title}`}><ResourceCard {...r} /></li>)}
        </ul>
      </div>
    </section>
  );
}
