import { tracks } from "@/content/tracks";
import TrackTabs from "../TrackTabs";

// Homepage: the three tracks as tabs (copy from /program's track cards).
export default function HomeTracks() {
  return (
    <section className="section" id="tracks" style={{ paddingTop: 0 }} aria-labelledby="tracks-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="tracks-title">Three tracks</h2>
          <p className="lede">Everyone shares Weeks 1–4, then splits by track for technicals in Weeks 5–6.</p>
        </div>
        <TrackTabs tracks={tracks.map(({ slug, name, roles }) => ({ slug, name, roles }))} />
      </div>
    </section>
  );
}
