import Link from "next/link";
import Badge from "./Badge";

// A compact list row (about 72px): badge, title, one-line description, and an
// arrow. The whole row is one link. Rows are separated by hairline dividers
// (.ui-resource-rows).
export default function ResourceRow({ href, title, body, tag }: { href: string; title: string; body?: string; tag?: string }) {
  return (
    <Link href={href} className="ui-resource-row">
      <span className="ui-resource-row-text">
        <span className="ui-resource-row-head">
          {tag && <Badge tone="outline">{tag}</Badge>}
          <span className="ui-resource-row-title">{title}</span>
        </span>
        {body && <span className="ui-resource-row-body">{body}</span>}
      </span>
      <span className="ui-resource-row-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
