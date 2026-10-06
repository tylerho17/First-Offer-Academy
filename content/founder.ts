// The founder, in one place (single source of truth): /about, the homepage
// founder card, the coach card, and the FAQ read this. Only facts Tyler gave
// (2026-10-05 about-v6 brief). Nothing is invented: an empty field renders
// nothing in production and a labeled TODO box in development.

export type ExperienceStatus = "current" | "incoming" | "past";
// `logo`: a file in /public (null = monogram tile). `logoRatio`: the logo's
// width / height, used to give every logo the same visual weight. `logoMono`:
// the official file is white-only, so it's drawn as a navy silhouette.
// Sources: public/logos/tyler/SOURCES.md.
export type Experience = {
  org: string; role: string; dates: string; detail: string; status: ExperienceStatus;
  caption: string; logo: string | null; logoRatio?: number; logoMono?: boolean; monogram?: string;
  // The /about card's category tag (Tyler, 2026-10-05).
  category: string;
};

export const founder = {
  name: "Tyler Ho",
  title: "Founder & Head Coach",
  // TODO(Tyler): approve wording.
  oneLiner: "I figured out recruiting with no roadmap. Now I give students the one I didn't have.",
  linkedin: "https://www.linkedin.com/in/tylerho1",
  // TODO(Tyler): intro video YouTube ID. Nothing renders until it's set.
  introVideoId: null as string | null,

  // Shown as the /about stat tiles and on the homepage founder card. A tile
  // with an empty value doesn't render.
  credentials: [
    // Confirmed by Tyler (v7 brief; wording 2026-10-05).
    { id: "internships", value: "10+", label: "internships across finance, accounting, sales, and AI engineering" },
    { value: "12", label: "pilot students, 100% landed an internship or offer" },
    { value: "2027", label: "incoming investment banking summer analyst, Barclays" },
  ],

  // Newest first. Barclays shows "Summer 2027", the role, not the Jan 2026
  // offer date. An empty `dates` doesn't render.
  experience: [
    { org: "K1 Investment Management", role: "AI Engineering Intern", dates: "Oct 2026 – Present", detail: "AI automations", category: "AI Engineering", status: "current", caption: "AI Engineering Intern", logo: "/logos/tyler/k1.svg", logoRatio: 1 },
    { org: "Barclays Investment Bank", role: "Incoming 2027 Investment Banking Summer Analyst", dates: "Summer 2027", detail: "Global Technology Group · San Francisco Bay Area", category: "Finance", status: "incoming", caption: "IB Summer Analyst · 2027", logo: "/logos/tyler/barclays.svg", logoRatio: 174 / 29 },
    { org: "Deloitte", role: "Summer Analyst", dates: "Jun – Aug 2026", detail: "", category: "Accounting (Tax)", status: "past", caption: "Summer Analyst", logo: "/logos/tyler/deloitte.svg", logoRatio: 182 / 34 },
    { org: "Concordia Capital", role: "Tech Investment Banking Summer Analyst", dates: "Summer 2025", detail: "", category: "Finance", status: "past", caption: "Tech IB Summer Analyst", logo: "/logos/concordia-capital.png", logoRatio: 907 / 314 },
    { org: "CB Capital", role: "Tech Investment Banking Fall Co-op", dates: "Sep 2025 – Feb 2026", detail: "", category: "Finance", status: "past", caption: "Tech IB Co-op", logo: "/logos/tyler/cb-capital.png", logoRatio: 1 },
    { org: "Futuraiser", role: "Deeptech Venture Capital", dates: "Apr – Jun 2026", detail: "", category: "Finance", status: "past", caption: "Venture Capital", logo: "/logos/futuraiser.png", logoRatio: 1396 / 222, logoMono: true },
    { org: "Crosspoint Financial", role: "FP&A", dates: "Aug 2024 – Aug 2025", detail: "", category: "Finance (FP&A)", status: "past", caption: "FP&A", logo: "/logos/tyler/crosspoint-financial.png", logoRatio: 155 / 57 },
  ] as Experience[],

  education: { school: "UC Irvine", field: "Finance & Computer Science" },

  // TODO(Tyler): approve naming these clubs. Until then the generic `fallback` text renders.
  leadership: [
    { named: "Co-Founder, Atlas", fallback: "Co-founded a freshman recruiting society" },
    { named: "President, Irvine Investment & Trading Group", fallback: "President of a campus investment & trading group" },
    { named: "Portfolio Manager, Student Managed Investment Fund (2025)", fallback: "Portfolio manager of a $50K student-managed investment fund" },
  ],
  showNamedLeadership: false, // flip to true once Tyler approves

  // /about "My story".
  story: {
    p1: "I'm the son of Vietnamese parents who worked hard but couldn't show me how recruiting worked.",
    // Paragraph 2 (numbers confirmed by Tyler, 2026-10-05).
    p2Lead: "Over my own recruiting, I sent about 4,000 cold emails, had 174 coffee chats, and went through 19 first-round interviews.",
    p2Rest: "Nobody taught me the timeline, how to write an email that gets answered, or how to talk to a banker. I learned it by getting it wrong, then wrote down what worked.",
    p3: "First Offer Academy is that system, built for every student, not just the ones who got into the right club.",
    pullQuote: "Nobody taught me the timeline. So I wrote it down.",
  },
};

// Story paragraph 2.
export function storyParagraph2() {
  return `${founder.story.p2Lead} ${founder.story.p2Rest}`;
}

// Credentials with a value, as one line each ("12 pilot students, 100% …").
export const shownCredentials = () => founder.credentials.filter((c) => c.value.trim() !== "");

// "10+ internships across finance, accounting, sales, and AI engineering":
// the one-line summary of Tyler's background (founder card, /about, the coach
// card, the FAQ). Empty until the number is set.
export const internshipsLine = () => {
  const c = founder.credentials.find((x) => x.id === "internships");
  return c?.value ? `${c.value} ${c.label}` : "";
};
