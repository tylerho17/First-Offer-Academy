import { stats } from "@/content/stats";
import StatsRow from "../StatsRow";

export default function Stats() {
  if (!stats.some((s) => s.value.trim() !== "")) return null;
  return (
    <section className="section-tight" aria-label="Results in numbers">
      <div className="wrap">
        <StatsRow />
      </div>
    </section>
  );
}
