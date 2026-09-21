// Only true, checkable numbers. A stat with an empty value does not render.

import { site } from "./site";

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "8", label: "students coached to internships in their first year of college" },
  { value: "", label: "internships landed by those students" }, // TODO: total count
  { value: "7+", label: "internships Tyler worked, with offers from many more" },
  { value: site.founder.offerCount, label: "internship offers Tyler received" }, // TODO(Tyler): site.founder.offerCount
  { value: "24", label: "seats in the January 2027 founding cohort" },
];
