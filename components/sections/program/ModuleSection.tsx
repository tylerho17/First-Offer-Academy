import type { Module, ProofAsset } from "@/content/programOverview";
import { site } from "@/content/site";
import Ornament from "../../Ornament";
import VideoSlot from "../../VideoSlot";
import ProofSlot from "../../ProofSlot";
import { Check } from "../../Icons";

function Proof({ p }: { p: ProofAsset }) {
  switch (p.kind) {
    case "images":
      return (
        <>
          <div className="proof-3up">
            {Array.from({ length: p.count }, (_, i) => (
              <ProofSlot key={i} label={`Student ${i + 1}`} alt={`${p.label}, student ${i + 1}`} ratio={p.ratio} src={p.srcs[i]} />
            ))}
          </div>
          {p.note && <p className="proof-note">{p.note}</p>}
        </>
      );
    case "videoPair":
      return (
        <div className="video-pair">
          {p.items.map((v) => <VideoSlot key={v.label} url={v.url} label={v.label} />)}
        </div>
      );
    case "video":
      return <VideoSlot url={p.url} label={p.label} note={p.note} />;
    default:
      return <ProofSlot label={p.label} ratio={p.ratio} src={p.src} note={p.note} />;
  }
}

function hasMedia(p: ProofAsset) {
  if (p.kind === "images") return p.srcs.length > 0;
  if (p.kind === "videoPair") return p.items.some((i) => i.url);
  if (p.kind === "video") return !!p.url;
  return !!p.src;
}

export default function ModuleSection({ m, n }: { m: Module; n: number }) {
  const showProof = hasMedia(m.proof) || site.showPlaceholders;
  const showVideos = !!(m.videos.tyler || m.videos.student) || site.showPlaceholders;
  return (
    <section className={`section module${n % 2 === 0 ? " is-flipped" : ""}`} id={m.slug} aria-labelledby={`${m.slug}-title`}>
      <div className="wrap">
        <div className="module-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Part {n}</span>
          <h2 id={`${m.slug}-title`}>{m.title}</h2>
          <p className="module-positioning">{m.positioning}</p>
        </div>

        {showVideos && (
          <div className="video-pair">
            <VideoSlot url={m.videos.tyler} label="Hear from Tyler" />
            <VideoSlot url={m.videos.student} label="Hear from a student" />
          </div>
        )}

        <div className={`module-grid${showProof ? "" : " is-single"}`}>
          <div className="module-copy">
            {m.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <ul className="module-components">
              {m.components.map((c) => <li key={c}><Check />{c}</li>)}
            </ul>
          </div>
          {showProof && (
            <figure className="module-proof">
              <figcaption className="eyebrow">{m.proof.label}</figcaption>
              <Proof p={m.proof} />
            </figure>
          )}
        </div>

        <p className="module-back"><a href="#modules" className="link-arrow">Back to top of modules ↑</a></p>
      </div>
    </section>
  );
}
