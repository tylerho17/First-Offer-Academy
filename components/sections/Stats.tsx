import { stats } from "@/content/stats";

export default function Stats() {
  const shown = stats.filter((s) => s.value.trim() !== "");
  if (shown.length === 0) return null;
  return (
    <section className="section-tight" aria-label="Results in numbers">
      <div className="wrap">
        <div className="stats" style={{ ["--n" as string]: shown.length } as React.CSSProperties}>
          {shown.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
