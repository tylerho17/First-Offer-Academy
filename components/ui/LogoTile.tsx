import Badge from "./Badge";

// Box the logo sits in (desktop px). Every logo gets about the same visual
// area, so a wide wordmark and a square mark read at the same weight.
const BOX_W = 120;
const BOX_H = 56;
const AREA = 2300;

function fit(ratio: number) {
  let h = Math.min(BOX_H, Math.sqrt(AREA / ratio));
  let w = h * ratio;
  if (w > BOX_W) { w = BOX_W; h = w / ratio; }
  return { w, h };
}

// A logo tile: the logo centered in a fixed box, one muted caption line, and
// an optional status badge in the top-right corner. `name` is the alt text and
// is also read out by screen readers. No logo: a monogram tile (initials in
// the display serif on navy). `mono`: a white-only official logo, drawn as a
// navy silhouette.
export default function LogoTile({ name, caption, logo, ratio = 1, mono = false, monogram, badge }: {
  name: string; caption: string; logo: string | null; ratio?: number; mono?: boolean; monogram?: string;
  badge?: { label: string; tone?: "navy" | "sage" | "outline" };
}) {
  const { w } = fit(ratio);
  const size = { width: `${(w / BOX_W) * 100}%`, aspectRatio: String(ratio) };
  return (
    <div className="card ui-logo-tile">
      {badge && <span className="ui-logo-tile-badge"><Badge tone={badge.tone}>{badge.label}</Badge></span>}
      <div className="ui-logo-tile-box">
        {logo && mono ? (
          <span className="ui-logo-tile-mono" role="img" aria-label={name} style={{ ...size, WebkitMaskImage: `url(${logo})`, maskImage: `url(${logo})` }} />
        ) : logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} alt={name} style={size} loading="lazy" decoding="async" />
        ) : (
          <span className="ui-logo-tile-monogram" aria-hidden="true">{monogram ?? name.slice(0, 2)}</span>
        )}
      </div>
      <p className="ui-logo-tile-caption"><span className="sr-only">{name}: </span>{caption}</p>
    </div>
  );
}
