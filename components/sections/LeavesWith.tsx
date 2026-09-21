import { leavesWith } from "@/content/program";
import { modules } from "@/content/programOverview";
import IconTile from "../IconTile";
import ModuleIcon from "../ModuleIcon";
import Ornament from "../Ornament";
import { Check } from "../Icons";

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

// "What the student leaves with": the six parts as cards. Card copy comes
// straight from content/programOverview.ts, the source of truth.
export default function LeavesWith({ flush = true }: { flush?: boolean }) {
  return (
    <section className="section" id="leaves-with" style={flush ? { paddingTop: 0 } : undefined}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <h2>{leavesWith.title}</h2>
          <p className="lede">{leavesWith.note}</p>
        </div>
        <div className="tile-grid">
          {modules.map((m) => (
            <IconTile
              key={m.slug}
              icon={<ModuleIcon name={m.icon} />}
              title={m.title}
              bullets={m.components}
              detail={m.detail}
              href={`/program#${m.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
