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
    slug: "consulting",
    name: "Consulting",
    roles: "Strategy, operations, and advisory roles at consulting firms and in-house teams.",
    headline: "Learn to think like a consultant, then interview like one.",
    intro:
      "Consulting interviews test structured thinking out loud. The Consulting track teaches case frameworks, mental math, and how to run a case conversation, alongside the networking every firm expects.",
    roleList: ["Strategy consulting", "Operations & implementation", "Risk & advisory", "In-house strategy teams", "Boutique consulting firms"],
    prep: [
      { title: "Case structure", body: "Breaking an ambiguous business problem into a clear, MECE plan of attack." },
      { title: "Mental math & charts", body: "Fast, clean arithmetic and reading exhibits under time pressure." },
      { title: "Running the case", body: "Leading the conversation, stating a hypothesis, and closing with a recommendation." },
      { title: "Fit interviews", body: "Leadership, teamwork, and impact stories told in a tight, consulting-style format." },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    roles: "Brand, growth, content, and product marketing at startups and consumer companies.",
    headline: "Show the work, not just the resume.",
    intro:
      "Marketing hiring managers want to see what you've made. The Marketing track pairs outreach with a small portfolio: real campaigns, content, or growth experiments your student can point to in interviews.",
    roleList: ["Brand marketing", "Growth & performance", "Content & social", "Product marketing", "Marketing analytics"],
    prep: [
      { title: "A starter portfolio", body: "Two or three concrete pieces of work that prove taste and results." },
      { title: "Metrics that matter", body: "Reach, conversion, retention, and how to talk about them credibly." },
      { title: "Brand teardown", body: "Analyzing a company's positioning and proposing one smart idea for it." },
      { title: "Marketing behaviorals", body: "Stories about creativity, iteration, and working with data." },
    ],
  },
];

export const getTrack = (slug: string) => tracks.find((t) => t.slug === slug);
