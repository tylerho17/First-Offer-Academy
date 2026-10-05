// Pilot students: first names only, no schools, no club names. Every field
// here was shared with the student's written permission.
//
// Nothing from a student (name, photo, quote, company, logo) renders in
// production unless `approved` is true; company names and logos also need
// `employerPermission`. In development everything renders, and unapproved
// cards carry a dashed "Pending permission" badge so Tyler can preview.
//
// Quotes are verbatim. Do not edit a single word or punctuation mark.
// Order is the /results order.

export type Student = {
  firstName: string;
  track: "Finance" | "Marketing" | "Accounting";
  headline: string; // company shown on the card
  role: string;
  otherCompanies: string[];
  quote: string;
  headshot: string | null; // /public path (the original); a missing file falls back to an initial
  // Crop tweaks for scripts/crop-headshots.mjs: zoom > 1 makes the face larger;
  // position shifts the crop center, as a fraction of the photo circle's
  // diameter (negative y moves up).
  headshotZoom?: number;
  headshotPosition?: { x?: number; y?: number };
  homepage: boolean;
  label?: string; // shown after the headline company, e.g. "Full-time offer"
  approved: boolean;
  employerPermission: boolean;
};

export const students: Student[] = [
  {
    firstName: "Henry",
    track: "Finance",
    headline: "PIMCO",
    role: "Summer Analyst, return offer",
    otherCompanies: ["Optimize Financial", "Allied HOA Partners"],
    quote: "Tyler covers all bases so that I felt ready in my interviews and coffee chats.",
    headshot: "/images/students/henry.png",
    homepage: false,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Jack",
    track: "Finance",
    headline: "Morgan Stanley",
    role: "Wealth Management Analyst",
    otherCompanies: ["Mercer Advisors"],
    quote: "He put me through multiple mock interviews with challenging questions and helped me understand what I needed to know going into each interview.",
    headshot: "/images/students/jack.png",
    headshotZoom: 0.82,
    headshotPosition: { y: -0.12 },
    homepage: false,
    label: "Full-time offer",
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Bella",
    track: "Finance",
    headline: "Wells Fargo",
    role: "Offers",
    otherCompanies: ["JPMorgan Chase", "U.S. Bank"],
    quote: "I started applying what he taught me and within a week I had set up 5 coffee chats and by the end of the recruitment cycle had landed offers at the companies I interviewed with.",
    headshot: "/images/students/bella.png",
    headshotZoom: 1.35,
    headshotPosition: { y: -0.14 },
    homepage: false,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Zach",
    track: "Finance",
    headline: "BridgeBio",
    role: "FP&A Intern",
    otherCompanies: ["Concordia Capital", "L&B Capital"],
    quote: "Having someone I could bounce ideas off of made navigating finance recruiting easier and much less intimidating in the beginning.",
    headshot: "/images/students/zach.png",
    headshotZoom: 0.94,
    headshotPosition: { y: -0.13 },
    homepage: false,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Kim",
    track: "Finance",
    headline: "Tricon",
    role: "PE Intern",
    otherCompanies: ["Black Legend Capital", "The Amazing Group"],
    quote: "He's tough; if something's off, he'll say so directly and push me to do better. But there's no question too small for him.",
    headshot: "/images/students/kim.png",
    headshotZoom: 1.05,
    headshotPosition: { y: -0.1 },
    homepage: true,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Vasavi",
    track: "Finance",
    headline: "Tricon",
    role: "PE Analyst",
    otherCompanies: ["The Amazing Group", "Ditto", "Lōkahi Therapeutics"],
    quote: "His mentorship has given me a much stronger understanding of the industry and made the recruiting process feel more structured and manageable.",
    headshot: "/images/students/vasavi.png",
    headshotZoom: 1.3,
    headshotPosition: { y: -0.12 },
    homepage: false,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Pranav",
    track: "Finance",
    headline: "Tricon",
    role: "Real Estate Analyst",
    otherCompanies: ["Valemont Group", "Clicinsight"],
    quote: "What I appreciated most was that his advice was always specific to my goals and experience rather than just giving me generic recruiting advice.",
    headshot: "/images/students/pranav.png",
    homepage: true,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Nathaniel",
    track: "Finance",
    headline: "Tricon",
    role: "Real estate / PE",
    otherCompanies: ["Sellside Group (M&A Analyst)"],
    quote: "As a first-generation student, breaking into the finance industry felt overwhelming… I went from feeling completely unprepared to securing my first offers with total confidence.",
    headshot: "/images/students/nathaniel.png",
    headshotZoom: 0.96,
    headshotPosition: { y: -0.13 },
    homepage: true,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Gavin",
    track: "Finance",
    headline: "Sila Nanotechnologies",
    role: "Accounting Intern",
    otherCompanies: ["Concordia Capital"],
    quote: "One of Tyler's biggest strengths is that he is able to meet you where you are.",
    headshot: "/images/students/gavin.png",
    headshotZoom: 0.82,
    headshotPosition: { y: -0.14 },
    homepage: false,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "James",
    track: "Finance",
    headline: "Concordia Capital",
    role: "IB Summer Analyst",
    otherCompanies: ["Xnergy", "Smart Asset Capital"],
    quote: "Even during his own recruiting, working eight-hour days and grinding through mocks, he made time for me and the rest of the freshmen. He's one of the least transactional people I know.",
    headshot: "/images/students/james.png",
    headshotZoom: 0.94,
    headshotPosition: { y: -0.13 },
    homepage: false,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Ishank",
    track: "Finance",
    headline: "Holter Holdings",
    role: "PE Intern",
    otherCompanies: ["Concordia Capital", "Futuraiser"],
    quote: "Coming into college, I had no direction on my career path. After meeting Tyler, everything became clear.",
    headshot: "/images/students/ishank.png",
    headshotZoom: 1.08,
    headshotPosition: { y: -0.1 },
    homepage: false,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Maddie",
    track: "Finance",
    headline: "The Amazing Group",
    role: "IB Intern",
    otherCompanies: [],
    quote: "He knows how to push people in a way that's gentle but still serious, and he's always made me want to work harder and do things I never would've had the confidence to do before.",
    headshot: "/images/students/maddie.png",
    headshotZoom: 1.28,
    headshotPosition: { y: -0.15 },
    homepage: false,
    approved: true,
    employerPermission: true,
  },
];

// The circle-cropped 400px webp made from `headshot` by
// scripts/crop-headshots.mjs.
export const croppedHeadshot = (s: Student) =>
  s.headshot ? `/images/students/cropped/${s.headshot.split("/").pop()!.replace(/\.\w+$/, "")}.webp` : null;

// Homepage quote cards, in this order.
export const HOMEPAGE_ORDER = ["Nathaniel", "Kim", "Pranav"];

const isDev = process.env.NODE_ENV !== "production";

export const isVisible = (s: Student) => s.approved || isDev;
export const visibleStudents = () => students.filter(isVisible);
export const homepageStudents = () =>
  HOMEPAGE_ORDER.map((n) => students.find((s) => s.firstName === n && s.homepage)).filter((s): s is Student => !!s && isVisible(s));

// Tricon is shown with its parent company on first mention per card.
export const TRICON_NOTE = "Tricon (a Blackstone portfolio company)";
export function companyNamer() {
  const seen = new Set<string>();
  return (name: string) => {
    const first = !seen.has(name);
    seen.add(name);
    return name === "Tricon" && first ? TRICON_NOTE : name;
  };
}

// ---------------------------------------------------------------- logo marquee

// Companies as shown in the marquee: "Sellside Group (M&A Analyst)" -> "Sellside Group".
export const companyDisplay = (name: string) => name.replace(/\s*\([^)]*\)\s*$/, "").trim();

// Companies with an official logo in public/logos/<slug>.svg or .png. Every
// other company renders as a text wordmark. Tricon is never shown as Blackstone;
// the marquee caption calls it a Blackstone portfolio company.
export const companyLogos: Record<string, string> = {
  PIMCO: "pimco",
  "Morgan Stanley": "morgan-stanley",
  "JPMorgan Chase": "jpmorgan-chase",
  "Wells Fargo": "wells-fargo",
  "U.S. Bank": "us-bank",
  Tricon: "tricon",
  BridgeBio: "bridgebio",
  "Sila Nanotechnologies": "sila",
  "Mercer Advisors": "mercer-advisors",
  // Boutique firms: each logo is from the firm's own website (see
  // public/logos/README.md). Ditto, Valemont Group, Holter Holdings, and The
  // Amazing Group have no usable official logo, so they stay text wordmarks.
  "Black Legend Capital": "black-legend-capital",
  "Concordia Capital": "concordia-capital",
  Clicinsight: "clicinsight",
  Futuraiser: "futuraiser",
  "L&B Capital": "lb-capital",
  "Lōkahi Therapeutics": "lokahi-therapeutics",
  "Optimize Financial": "optimize-financial",
  "Sellside Group": "sellside-group",
  "Smart Asset Capital": "smart-asset-capital",
  Xnergy: "xnergy",
};

export type MarqueeCompany = { name: string; slug?: string };

// Every company a visible student (with employer permission) lists, once,
// logos in companyLogos order, with the text wordmarks spread evenly between them.
export function marqueeCompanies(): MarqueeCompany[] {
  const names = [...new Set(visibleStudents().filter((s) => s.employerPermission).flatMap((s) => [s.headline, ...s.otherCompanies]).map(companyDisplay))];
  const withLogo = names.filter((n) => companyLogos[n]).sort((a, b) => Object.keys(companyLogos).indexOf(a) - Object.keys(companyLogos).indexOf(b));
  const text = names.filter((n) => !companyLogos[n]);
  // Spread the text wordmarks evenly between the logos.
  const ordered = [...withLogo];
  text.forEach((t, i) => ordered.splice(Math.round(((i + 1) * (withLogo.length + i + 1)) / (text.length + 1)), 0, t));
  return ordered.map((name) => ({ name, slug: companyLogos[name] }));
}
