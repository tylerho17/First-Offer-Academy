import Link from "next/link";
import type { Track } from "@/content/tracks";
import { tracks } from "@/content/tracks";
import CoachCard from "./CoachCard";
import EventsSchedule from "./sections/EventsSchedule";
import LatestArticles from "./sections/LatestArticles";
import FinalCta from "./sections/FinalCta";
import CallLink from "./CallLink";
import { Check } from "./Icons";

export default function TrackView({ track }: { track: Track }) {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{track.name} track</span>
          <h1>{track.headline}</h1>
          <p className="lede">{track.intro}</p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply for the {track.name} track</Link>
            <CallLink />
          </div>
          <div className="pill-row" style={{ marginTop: 28 }}>
            <span className="pill-label">Other tracks:</span>
            {tracks.filter((t) => t.slug !== track.slug).map((t) => (
              <Link key={t.slug} href={`/tracks/${t.slug}`} className="topic-pill">{t.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Roles this track prepares for</span>
            <h2>Where {track.name.toLowerCase()} students aim</h2>
            <ul className="role-list">
              {track.roleList.map((r) => <li key={r}><Check />{r}</li>)}
            </ul>
          </div>
          <div className="grid">
            {track.prep.map((p, i) => (
              <div className="card prep-card" key={p.title}>
                <span className="offer-n">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Your coach</span>
            <h2>Get started with an expert</h2>
          </div>
          <CoachCard focus={track.name} />
        </div>
      </section>

      <EventsSchedule track={track.slug} limit={3} />
      <LatestArticles track={track.slug} title={`Free ${track.name.toLowerCase()} recruiting guides`} />
      <FinalCta />
    </>
  );
}
