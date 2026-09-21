import { rhythmNotes, weeklyRhythm } from "@/content/curriculum";
import Ornament from "../Ornament";
import { Check } from "../Icons";

export default function WeeklyRhythm() {
  return (
    <section className="section" id="rhythm" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Every week</span>
          <h2>Your student&apos;s weekly rhythm</h2>
        </div>
        <ol className="grid grid-4 rhythm-grid">
          {weeklyRhythm.map((r, i) => (
            <li className="card" key={r.name}>
              <span className="pain-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{r.name}</h3>
              <p>{r.body}</p>
            </li>
          ))}
        </ol>
        <ul className="rhythm-notes">
          {rhythmNotes.map((n) => <li key={n}><Check />{n}</li>)}
        </ul>
      </div>
    </section>
  );
}
