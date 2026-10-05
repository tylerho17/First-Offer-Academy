import Link from "next/link";
import Badge from "./Badge";

// A resource card: badge, title (max 2 lines), description (max 2 lines), and
// "Open →" pinned to the bottom. The whole card is one link, with hover and
// focus states on the card. Cards in a row share a height.
export default function ResourceCard({ href, title, body, tag }: { href: string; title: string; body?: string; tag?: string }) {
  return (
    <Link href={href} className="card ui-resource-card">
      {tag && <span className="ui-resource-card-tag"><Badge tone="outline">{tag}</Badge></span>}
      <span className="ui-resource-card-title">{title}</span>
      {body && <span className="ui-resource-card-body">{body}</span>}
      <span className="ui-resource-card-open" aria-hidden="true">Open →</span>
    </Link>
  );
}
