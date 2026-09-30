import { stats, statsNote } from "@/content/stats";
import CountUp from "./CountUp";

// The real stats from content/stats.ts. A stat with an empty value is skipped.
export default function StatsRow() {
  const shown = stats.filter((s) => s.value.trim() !== "");
  if (shown.length === 0) return null;
  return (
    <>
      <div className="stats" style={{ ["--n" as string]: shown.length } as React.CSSProperties}>
        {shown.map((s) => (
          <div className="stat" key={s.label}>
            <CountUp value={s.value} />
            <span>{s.label}{s.sub && <small>{s.sub}</small>}</span>
          </div>
        ))}
      </div>
      <p className="stats-note">{statsNote}</p>
    </>
  );
}
