import { phases, throughout, weekly } from "@/content/program";

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>12 weeks. Six parts. A real search, fully executed.</h2>
        </div>
        <ol className="timeline" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {phases.map((p, i) => (
            <li className="card step" key={p.name}>
              <div className="num">{i + 1}</div>
              <span className="weeks">{p.weeks}</span>
              <h3>{p.name}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
        <div className="card throughout">
          <span className="weeks">{throughout.weeks}</span>
          <h3>{throughout.name}</h3>
          <p>{throughout.body}</p>
        </div>
        <div className="weekly-strip">
          {weekly.map((w) => (
            <div className="card" key={w.name}>
              <span className="weeks eyebrow" style={{ marginBottom: 6 }}>Every week</span>
              <h3>{w.name}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
