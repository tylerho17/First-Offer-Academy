import { site } from "@/content/site";

// "4 / 3" → 1.333…
const ratioValue = (r: string) => {
  const [w, h] = r.split("/").map((n) => parseFloat(n));
  return w && h ? w / h : 4 / 3;
};

// Generic proof asset: an image, audio clip, or video file. With no `src` it
// renders a labeled placeholder while placeholders are on, and nothing after.
export default function ProofSlot({
  label,
  ratio = "4 / 3",
  src,
  alt,
  note,
}: { label: string; ratio?: string; src?: string; alt?: string; note?: string }) {
  if (src) {
    if (/\.(mp3|m4a|wav|ogg)$/i.test(src)) {
      return (
        <figure className="proof">
          <audio src={src} controls preload="metadata" aria-label={label} />
          <figcaption>{label}</figcaption>
        </figure>
      );
    }
    if (/\.(mp4|webm|mov)$/i.test(src)) {
      return (
        <figure className="proof">
          <video src={src} controls playsInline preload="metadata" style={{ aspectRatio: ratio }} aria-label={label} />
          <figcaption>{label}</figcaption>
        </figure>
      );
    }
    return (
      <figure className="proof">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt ?? label} style={{ aspectRatio: ratio }} width={1200} height={Math.round(1200 / ratioValue(ratio))} loading="lazy" />
        <figcaption>{label}</figcaption>
      </figure>
    );
  }
  if (!site.showPlaceholders) return null;
  return (
    <div className="slot proof-slot" style={{ aspectRatio: ratio }}>
      <span className="slot-tag">Placeholder</span>
      {label}
      {note && <small>{note}</small>}
    </div>
  );
}
