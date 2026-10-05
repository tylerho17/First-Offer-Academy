import Badge from "./Badge";

export type TimelineItem = {
  title: string; // bold line, e.g. the organization
  subtitle?: string; // e.g. the role
  meta?: string; // e.g. dates; empty renders nothing
  detail?: string; // empty renders nothing
  badge?: { label: string; tone?: "navy" | "sage" | "outline" };
};

// Vertical timeline: an ordered list with a dot and a connecting line per item.
export default function Timeline({ items, className = "" }: { items: TimelineItem[]; className?: string }) {
  return (
    <ol className={`ui-timeline ${className}`.trim()}>
      {items.map((it) => (
        <li key={`${it.title}-${it.subtitle ?? ""}`} className="ui-timeline-item">
          <span className="ui-timeline-dot" aria-hidden="true" />
          <div className="ui-timeline-body">
            <p className="ui-timeline-title">
              <strong>{it.title}</strong>
              {it.badge && <Badge tone={it.badge.tone}>{it.badge.label}</Badge>}
            </p>
            {it.subtitle && <p className="ui-timeline-subtitle">{it.subtitle}</p>}
            {it.meta && <p className="ui-timeline-meta">{it.meta}</p>}
            {it.detail && <p className="ui-timeline-detail">{it.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
