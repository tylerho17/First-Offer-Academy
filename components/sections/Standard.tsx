import { levels } from "@/content/program";
import { Report } from "../Icons";

export default function Standard() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Standard</span>
          <h2>Progress you can see, graded on evidence</h2>
          <p className="lede">Every student is always at a level. Levels move on proof in the tracker, not on how the week felt.</p>
        </div>
        <ol className="ladder" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {levels.map((l) => (
            <li className="rung" key={l.n}>
              <span className="lvl">{l.n}</span>
              <div>
                <h3>{l.name}</h3>
                <p>{l.gate}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="note-line"><Report />Every two weeks, parents get a one-page progress report showing their student&apos;s level and numbers.</p>
      </div>
    </section>
  );
}
