// /pricing "How this compares". Factual, defensible rows; no marketing
// adjectives. "partial" means the alternative covers some of it.
// TODO(Tyler): review comparison claims (every cell) before merge.

export type Mark = "yes" | "partial" | "no";
export const compareColumns = ["First Offer Academy", "On your own", "AI tools", "Campus career center"] as const;

export const compareRows: { row: string; marks: [Mark, Mark, Mark, Mark] }[] = [
  { row: "1:1 resume and pitch feedback", marks: ["yes", "no", "partial", "partial"] },
  { row: "Live mock interviews with feedback", marks: ["yes", "no", "partial", "partial"] },
  { row: "Weekly accountability pod", marks: ["yes", "no", "no", "no"] },
  { row: "Outreach system and templates", marks: ["yes", "no", "partial", "partial"] },
  { row: "Coached by someone who just went through recruiting", marks: ["yes", "no", "no", "no"] },
  { row: "Offer-or-refund", marks: ["yes", "no", "no", "no"] },
];
