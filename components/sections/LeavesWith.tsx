import { leavesWith } from "@/content/program";
import Ornament from "../Ornament";
import { Check } from "../Icons";

export function LeavesWithList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`week12-list${compact ? " is-compact" : ""}`}>
      {leavesWith.items.map((i) => (
        <li key={i}><Check />{i}</li>
      ))}
    </ul>
  );
}

// "What every student leaves with": program requirements, not outcomes.
export default function LeavesWith({ flush = true }: { flush?: boolean }) {
  return (
    <section className="section" style={flush ? { paddingTop: 0 } : undefined}>
      <div className="wrap">
        <div className="card week12">
          <div>
            <Ornament />
            <span className="eyebrow" style={{ display: "block" }}>What the program requires</span>
            <h2>{leavesWith.title}</h2>
            <p className="week12-note">{leavesWith.note}</p>
          </div>
          <LeavesWithList />
        </div>
      </div>
    </section>
  );
}
