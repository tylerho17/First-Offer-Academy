import { marqueeCompanies } from "@/content/students";
import { logoAsset } from "@/lib/logos";

// "Where pilot students landed": every company from content/students.ts in a
// seamless loop. Official SVGs are recolored to one muted navy (lib/logos.ts);
// official PNGs are drawn through a CSS mask in the same navy; the rest are
// serif text wordmarks. Sized by optical weight, so a wide
// wordmark doesn't dwarf a compact one. Pauses on hover and focus; under
// prefers-reduced-motion it's a static wrapped grid. Screen readers get the
// first list; the loop's duplicate is aria-hidden.
function Items({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-list" aria-hidden={hidden || undefined} aria-label={hidden ? undefined : "Companies"}>
      {marqueeCompanies().map((c) => {
        const logo = c.slug ? logoAsset(c.slug) : null;
        // Area-normalized height: 1 for a compact mark, down to ~0.5 for very wide ones.
        const k = logo ? Math.max(0.5, Math.min(1, Math.sqrt(2.2 / logo.ratio))) : 1;
        return (
          <li key={c.name}>
            {logo?.kind === "svg" ? (
              <span
                className="marquee-logo"
                role="img"
                aria-label={c.name}
                style={{ ["--k" as string]: k.toFixed(3), ["--ratio" as string]: logo.ratio.toFixed(3) } as React.CSSProperties}
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              />
            ) : logo?.kind === "png" ? (
              <span
                className="marquee-logo is-raster"
                role="img"
                aria-label={c.name}
                style={{ ["--k" as string]: k.toFixed(3), ["--ratio" as string]: logo.ratio.toFixed(3), WebkitMaskImage: `url(${logo.src})`, maskImage: `url(${logo.src})` } as React.CSSProperties}
              />
            ) : (
              <span className="marquee-word">{c.name}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function LogoMarquee() {
  if (marqueeCompanies().length === 0) return null;
  return (
    <section className="section-tight marquee-section" aria-labelledby="marquee-title">
      <div className="wrap">
        <h2 id="marquee-title" className="marquee-title">Where pilot students landed</h2>
      </div>
      <div className="marquee" tabIndex={0} aria-describedby="marquee-note">
        <div className="marquee-track">
          <Items />
          <Items hidden />
        </div>
      </div>
      <div className="wrap">
        <p className="marquee-note" id="marquee-note">
          Tricon is a Blackstone portfolio company. Employers shown are where pilot students interned or received offers. First Offer Academy is not affiliated with these companies.
        </p>
      </div>
    </section>
  );
}
