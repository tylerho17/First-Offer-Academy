import { levels } from "@/content/program";

export default function LevelBadge({ n, long = false }: { n?: number; long?: boolean }) {
  if (!n) return null;
  const name = levels.find((l) => l.n === n)?.name ?? "";
  return <span className="level-badge">{long ? `Level ${n} reached: ${name}` : `Level ${n} · ${name}`}</span>;
}
