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
    // Confirmed by Tyler (v7 brief).
    { value: "10+", label: "internships" },
    { value: "12", label: "pilot students, 100% landed an internship or offer" },
    { value: "2027", label: "incoming investment banking summer analyst, Barclays" },
  ],

  // Newest first. Barclays shows "Summer 2027", the role, not the Jan 2026
  // offer date. An empty `dates` doesn't render.
  experience: [
    { org: "K1 Investment Management", role: "AI Engineering Intern", dates: "Oct 2026 – Present", detail: "AI automations", status: "current", caption: "AI Engineering Intern", logo: "/logos/tyler/k1.svg", logoRatio: 1 },
    { org: "Barclays Investment Bank", role: "Incoming 2027 Investment Banking Summer Analyst", dates: "Summer 2027", detail: "Global Technology Group · San Francisco Bay Area", status: "incoming", caption: "IB Summer Analyst · 2027", logo: "/logos/tyler/barclays.svg", logoRatio: 174 / 29 },
    { org: "Deloitte", role: "Summer Analyst", dates: "Jun – Aug 2026", detail: "", status: "past", caption: "Summer Analyst", logo: "/logos/tyler/deloitte.svg", logoRatio: 182 / 34 },
    { org: "Concordia Capital", role: "Tech Investment Banking Summer Analyst", dates: "Summer 2025", detail: "", status: "past", caption: "Tech IB Summer Analyst", logo: "/logos/concordia-capital.png", logoRatio: 907 / 314 },
    // TODO(Tyler): CB Capital dates, and the official logo file (monogram until then).
    { org: "CB Capital", role: "Tech Investment Banking Fall Co-op", dates: "", detail: "", status: "past", caption: "Tech IB Co-op", logo: null, monogram: "CB" },
    // TODO(Tyler): Futuraiser dates.
    { org: "Futuraiser", role: "Deeptech Venture Capital", dates: "", detail: "", status: "past", caption: "Venture Capital", logo: "/logos/futuraiser.png", logoRatio: 1396 / 222, logoMono: true },
    // TODO(Tyler): Crosspoint Financial dates, and the official logo file (monogram until then).
    { org: "Crosspoint Financial", role: "FP&A", dates: "", detail: "", status: "past", caption: "FP&A", logo: null, monogram: "CF" },
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
    // Paragraph 2. Until both numbers are set, the clause with them is cut.
    // TODO(Tyler): number of cold emails it took.
    coldEmails: "",
    // TODO(Tyler): number of coffee chats it took.
    coffeeChats: "",
    p2Rest: "Nobody taught me the timeline, how to write an email that gets answered, or how to talk to a banker. I learned it by getting it wrong, then wrote down what worked.",
    p3: "First Offer Academy is that system, built for every student, not just the ones who got into the right club.",
    pullQuote: "Nobody taught me the timeline. So I wrote it down.",
  },
};

// Story paragraph 2: with both numbers, the full sentence; otherwise the
// numbers clause is cut.
export function storyParagraph2() {
  const s = founder.story;
  const lead =
    s.coldEmails && s.coffeeChats
      ? `It took me ${s.coldEmails} cold emails, ${s.coffeeChats} coffee chats, and more rejections than I can count to land my first internship.`
      : "It took me more rejections than I can count to land my first internship.";
  return `${lead} ${s.p2Rest}`;
}

// Credentials with a value, as one line each ("12 pilot students, 100% …").
export const shownCredentials = () => founder.credentials.filter((c) => c.value.trim() !== "");

// "N internships" once Tyler sets the number; empty until then.
export const internshipsLine = () => {
  const c = founder.credentials.find((x) => x.label === "internships");
  return c?.value ? `${c.value} internships` : "";
};
