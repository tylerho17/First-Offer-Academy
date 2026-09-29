// Only true, checkable numbers. A stat with an empty value does not render.
// Shown on the homepage and /results (components/StatsRow.tsx).

import { PILOT_LANDED, PILOT_STUDENTS, PILOT_TWO, site } from "./site";

export type Stat = { value: string; label: string };

const n = (v: number | null) => (v === null ? "" : String(v));

export const stats: Stat[] = [
  { value: String(PILOT_STUDENTS), label: "students coached in the pilot" },
  { value: n(PILOT_LANDED), label: "landed an internship in their first year" },
  { value: n(PILOT_TWO), label: "landed two" },
  { value: String(site.cohort.seats), label: "seats in the founding cohort" },
];

export const statsNote = "Pilot results. Hiring decisions belong to employers.";
