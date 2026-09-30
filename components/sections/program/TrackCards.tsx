import Link from "next/link";
import { tracks } from "@/content/tracks";
import { videosFor } from "@/content/videoTestimonials";
import VideoGroup from "../../VideoGroup";

// Three track cards; the detail lives on /tracks/<slug>.
export default function TrackCards() {
  return (
    <section className="section" id="tracks" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>Three tracks</h2>
          <p className="lede">Everyone shares Weeks 1–4, then splits by track for technicals in Weeks 5–6.</p>
        </div>
        <ul className="grid grid-3 track-grid">
          {tracks.map((t) => (
            <li className="card track-card-lg" key={t.slug}>
              <h3>{t.name}</h3>
              <p>{t.roles}</p>
              <Link href={`/tracks/${t.slug}`} className="link-arrow">The {t.name} track →</Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 20 }}><VideoGroup videos={videosFor("program-tracks")} columns={2} /></div>
      </div>
    </section>
  );
}
