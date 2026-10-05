import Link from "next/link";
import Badge from "./Badge";

// A card that is one link: a tag, a title, one line, and an arrow. The whole
// card is the tap target (well over 44px tall).
export default function LinkCard({ href, title, body, tag }: { href: string; title: string; body?: string; tag?: string }) {
  return (
    <Link href={href} className="card ui-link-card">
      {tag && <Badge tone="outline">{tag}</Badge>}
      <span className="ui-link-card-title">{title} <span aria-hidden="true">→</span></span>
      {body && <span className="ui-link-card-body">{body}</span>}
    </Link>
  );
}
