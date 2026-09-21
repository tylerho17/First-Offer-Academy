import { programOverview } from "@/content/programOverview";
import Ornament from "../../Ornament";
import { Check } from "../../Icons";

export function Week12List({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`week12-list${compact ? " is-compact" : ""}`}>
      {programOverview.week12.items.map((i) => (
        <li key={i}><Check />{i}</li>
      ))}
    </ul>
  );
}

export default function Week12Checklist() {
  const w = programOverview.week12;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="card week12">
          <div>
            <Ornament />
            <span className="eyebrow" style={{ display: "block" }}>What the program requires</span>
            <h2>{w.title}</h2>
            <p className="week12-note">{w.note}</p>
          </div>
          <Week12List />
        </div>
      </div>
    </section>
  );
}
