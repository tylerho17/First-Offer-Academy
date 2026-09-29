import { programOverview } from "@/content/programOverview";
import CallLink from "../../CallLink";
import VideoSlot from "../../VideoSlot";
import ArchPhoto from "../../ArchPhoto";
import { site } from "@/content/site";
import PayButton from "@/components/PayButton";

export default function ProgramHero() {
  const h = programOverview.hero;
  return (
    <section className="hero program-hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow" style={{ display: "block" }}>{h.eyebrow}</span>
          <h1>{h.title}</h1>
          <p className="lede">{h.lede} {h.sub}</p>
          <div className="btn-row">
            <PayButton />
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
