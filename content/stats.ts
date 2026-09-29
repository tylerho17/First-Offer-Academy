// Only true, checkable numbers. A stat with an empty value does not render.
// Shown on the homepage, /results, and /program (components/StatsRow.tsx).

import { PILOT_LANDED, PILOT_STUDENTS, site } from "./site";

export type Stat = { value: string; label: string; sub?: string };

export const stats: Stat[] = [
  { value: String(PILOT_STUDENTS), label: "students coached in the pilot" },
  {
    value: `${Math.round((PILOT_LANDED / PILOT_STUDENTS) * 100)}%`,
    label: "landed an internship in their first year",
    sub: `${PILOT_LANDED} of ${PILOT_STUDENTS} pilot students`,
  },
  { value: String(site.cohort.seats), label: "seats in the founding cohort" },
];

export const statsNote = "Pilot results. Hiring decisions belong to employers.";
