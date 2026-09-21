// Week-by-week syllabus for /program. Seeded only with what's already
// known: each week's phase, and the Standard levels each phase works toward
// (from content/program.ts). Per-week detail is empty until Tyler writes it;
// an empty `detail` shows the phase summary instead.

import { levels, phases } from "./program";

export type SyllabusWeek = {
  week: number;
  detail: string; // TODO(Tyler): what this specific week covers
};

export type SyllabusPhase = {
  weeks: string;
  name: string;
  summary: string;
  levels: number[]; // Standard levels this phase works toward
  items: SyllabusWeek[];
};

const weeks = (from: number, to: number): SyllabusWeek[] =>
  Array.from({ length: to - from + 1 }, (_, i) => ({ week: from + i, detail: "" }));

// Which Standard levels each phase's work maps to (phase deliverables match
// the level gates in content/program.ts).
const phaseLevels = [[1, 2], [3, 4], [], [5]];
const phaseWeeks: [number, number][] = [[1, 3], [4, 8], [9, 10], [11, 12]];

export const syllabus: SyllabusPhase[] = phases.map((p, i) => ({
  weeks: p.weeks,
  name: p.name,
  summary: p.body,
  levels: phaseLevels[i],
  items: weeks(...phaseWeeks[i]),
}));

export const levelName = (n: number) => levels.find((l) => l.n === n)?.name ?? "";
