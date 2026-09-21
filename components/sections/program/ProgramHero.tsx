import Link from "next/link";
import { programOverview } from "@/content/programOverview";
import CallLink from "../../CallLink";
import VideoSlot from "../../VideoSlot";
import Ornament from "../../Ornament";
import ArchPhoto from "../../ArchPhoto";
import { site } from "@/content/site";
import { positioning } from "@/content/program";

export default function ProgramHero() {
  const h = programOverview.hero;
  return (
    <section className="hero program-hero">
      <div className="wrap hero-grid">
        <div>
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>{h.eyebrow}</span>
          <h1>{h.title}</h1>
          <p className="lede">{positioning} {h.sub}</p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply</Link>
            <CallLink />
          </div>
        </div>
        {h.videoUrl || site.showPlaceholders ? (
          <VideoSlot url={h.videoUrl} label={h.videoLabel} note="2–3 minutes" />
        ) : (
          <ArchPhoto />
        )}
      </div>
    </section>
  );
}
