// Statistic / KPI tile: a big serif value over a small label.
export default function Stat({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  return (
    <div className={`card ui-stat ${className}`.trim()}>
      <span className="ui-stat-value">{value}</span>
      <span className="ui-stat-label">{label}</span>
    </div>
  );
}
