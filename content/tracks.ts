// Track pages (/tracks/[slug]). Modeled on Leland's category pages:
// what the field is, roles, what we prep, coach, events, and reading.

export type Track = {
  slug: string;
  name: string;
  roles: string; // one line for cards
  headline: string;
  intro: string;
  roleList: string[];
  prep: { title: string; body: string }[];
};

export const tracks: Track[] = [
  {
    slug: "finance",
    name: "Finance",
    roles: "Investment banking, private equity, asset management, corporate finance, FP&A.",
    headline: "Break into finance before junior year.",
    intro:
      "Finance recruiting starts earlier than any other field. Many firms fill sophomore and junior summer seats through networking that begins freshman year. The Finance track gets your student into those conversations with the technical base to back them up.",
    roleList: ["Investment banking", "Private equity & venture", "Asset & wealth management", "Corporate finance & FP&A", "Sales & trading"],
    prep: [
      { title: "Accounting and the three statements", body: "How the income statement, balance sheet, and cash flow statement connect, explained from zero." },
      { title: "Valuation basics", body: "Comparable companies, precedent transactions, and the logic of a DCF at the level first-round interviews test." },
      { title: "Market awareness", body: "One deal and one market story your student can explain clearly in any interview." },
      { title: "Finance behaviorals", body: "\"Why banking?\", \"Why this firm?\", and \"Walk me through your resume\", rehearsed until they sound natural." },
    ],
  },
  {
    slug: "accounting",
    name: "Accounting",
    roles: "Audit, tax, and advisory at public accounting firms, plus corporate accounting in industry.",
    headline: "Start your accounting career before junior year.",
    intro:
      "Many public accounting firms run early-identification and leadership programs for freshmen and sophomores that feed into junior-summer internships, the main path to full-time offers. The Accounting track gets your student ready for those programs early. Planning coursework early also matters for the CPA's 150-credit-hour requirement in most states.",
    roleList: ["Audit and assurance", "Tax", "Advisory", "Mid-size and regional public accounting", "Corporate accounting in industry"],
    prep: [
      { title: "Debits, credits, and the three statements", body: "How a transaction moves through the books, and how the three financial statements connect. Weeks 5–6, with answer walk-throughs." },
      { title: "Accruals and revenue recognition", body: "When revenue and expenses are recorded, and why that isn't always when cash moves. The first graded mock is in Week 6." },
      { title: "Audit, tax, or advisory", body: "What each service line does day to day, so the \"why accounting\" and \"why this firm\" answers are specific." },
      { title: "Outreach built on firm events", body: "A target list organized around firm recruiting events, office visits, and early-identification deadlines, plus campus accounting society events." },
    ],
  },
];

export const getTrack = (slug: string) => tracks.find((t) => t.slug === slug);
