import Link from "next/link";
import { tracks } from "@/content/program";
import { Chart, Code, Compass, Megaphone } from "../Icons";

const icons: Record<string, React.ReactNode> = {
  Finance: <Chart />,
  Consulting: <Compass />,
  Marketing: <Megaphone />,
  Tech: <Code />,
};

export default function Tracks() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Track Technicals · Weeks 9–10</span>
          <h2>One method. Pick the field you want to break into.</h2>
          <p className="lede">In Weeks 9–10, Track Technicals splits the cohort into four fields.</p>
        </div>
        <div className="grid grid-4">
          {tracks.map((t) => (
            <Link href={`/tracks/${t.slug}`} className="card track" key={t.name}>
              <div className="icon-dot">{icons[t.name]}</div>
              <h3>{t.name}</h3>
              <p>{t.roles}</p>
              <span className="link-arrow">Explore {t.name} →</span>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <Link href="/program" className="link-arrow">See the full program →</Link>
        </p>
      </div>
    </section>
  );
}
