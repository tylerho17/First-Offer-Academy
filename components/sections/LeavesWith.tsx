import Link from "next/link";
import { leavesWith, tracks } from "@/content/program";
import { modules } from "@/content/programOverview";
import ModuleIcon from "../ModuleIcon";
import { Check } from "../Icons";
import { videosFor } from "@/content/videoTestimonials";
import VideoTestimonial from "../VideoTestimonial";

// Compact list of the six part names (used inside other cards).
export function LeavesWithList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`week12-list${compact ? " is-compact" : ""}`}>
      {leavesWith.items.map((i) => (
        <li key={i}><Check />{i}</li>
      ))}
    </ul>
  );
}

// Track Technicals names the three tracks, each linked to its page.
function TrackLinks() {
  return (
    <>
      Weeks 5–6 split by track:{" "}
      {tracks.map((t, i) => (
        <span key={t.slug}>
          {i > 0 && (i === tracks.length - 1 ? ", or " : ", ")}
          <Link href={`/tracks/${t.slug}`}>{t.name}</Link>
        </span>
      ))}
      .
    </>
  );
}

// "What the student leaves with": the six parts, one sentence each, linking
// to the full section on /program. Card copy comes from
// content/programOverview.ts, the source of truth. This is the only place on
// the homepage that names the six parts.
// `homeVideo`: the homepage adds the home-leaves-with video as the last tile.
export default function LeavesWith({ flush = true, homeVideo = false }: { flush?: boolean; homeVideo?: boolean }) {
  const video = homeVideo ? videosFor("home-leaves-with")[0] : undefined;
  return (
    <section className="section" id="leaves-with" style={flush ? { paddingTop: 0 } : undefined}>
      <div className="wrap">
        <div className="section-head">
          <h2>{leavesWith.title}</h2>
          <p className="lede">{leavesWith.note}</p>
        </div>
        <ul className="tile-grid part-grid">
          {modules.map((m) => (
            <li className="card part-card" key={m.slug}>
              <span className="icon-dot" aria-hidden="true"><ModuleIcon name={m.icon} /></span>
              <h3 id={`part-${m.slug}`}>{m.title}</h3>
              <p>{m.slug === "track-technicals" ? <TrackLinks /> : m.detail}</p>
              <Link href={`/program#${m.slug}`} className="link-arrow" aria-describedby={`part-${m.slug}`}>Read more</Link>
            </li>
          ))}
          {video && (
            <li className="part-video">
              <VideoTestimonial video={video} label="See it: a 60-second pitch built in the program." />
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
