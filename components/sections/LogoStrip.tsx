import { visibleLogos } from "@/content/students";
import { monoLogo } from "@/lib/logos";

// "Where pilot students interned": one muted navy row, data-driven from
// content/students.ts. Blackstone renders only next to Tricon, with a caption.
// A logo whose SVG is missing falls back to a serif wordmark
// (see public/logos/README.md). Nothing renders when no logo qualifies.
export default function LogoStrip() {
  const logos = visibleLogos();
  if (logos.length === 0) return null;

  const mark = (company: string, slug: string) => {
    const l = monoLogo(slug);
    return l ? (
      <span className="logo-mark" role="img" aria-label={company} style={{ ["--ratio" as string]: l.ratio } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: l.svg }} />
    ) : (
      <span className="logo-fallback">{company}</span>
    );
  };

  // Group Blackstone with its partner so they sit together under one caption.
  const items: React.ReactNode[] = [];
  for (let i = 0; i < logos.length; i++) {
    const l = logos[i];
    const next = logos[i + 1];
    if (l.pairedWith && next?.company === l.pairedWith) {
      items.push(
        <li key={l.slug} className="logo-pair">
          <span className="logo-pair-marks">{mark(l.company, l.slug)}{mark(next.company, next.slug)}</span>
          <span className="logo-caption">Tricon is a Blackstone portfolio company.</span>
        </li>,
      );
      i++;
    } else {
      items.push(<li key={l.slug}>{mark(l.company, l.slug)}</li>);
    }
  }

  return (
    <section className="section-tight logo-strip-section" aria-labelledby="logo-strip-title">
      <div className="wrap">
        <h2 id="logo-strip-title" className="logo-strip-title">Where pilot students interned</h2>
        <ul className="logo-strip">{items}</ul>
        <p className="logo-disclaimer">
          Employers shown are where pilot students interned or received offers. First Offer Academy is not affiliated with these companies.
        </p>
      </div>
    </section>
  );
}
