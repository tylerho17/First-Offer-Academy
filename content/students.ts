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
  headshot: string | null; // /public path; a missing file falls back to an initial
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
    homepage: true,
    approved: true,
    employerPermission: true,
  },
  {
    firstName: "Vasavi",
    track: "Finance",
    headline: "Tricon",
    role: "PE Analyst",
    otherCompanies: ["The Amazing Group", "Ditto"],
    quote: "His mentorship has given me a much stronger understanding of the industry and made the recruiting process feel more structured and manageable.",
    headshot: "/images/students/vasavi.png",
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
    homepage: false,
    approved: true,
    employerPermission: true,
  },
];

// Homepage quote cards, in this order.
export const HOMEPAGE_ORDER = ["Nathaniel", "Kim", "Pranav"];

const isDev = process.env.NODE_ENV !== "production";

export const isVisible = (s: Student) => s.approved || isDev;
export const visibleStudents = () => students.filter(isVisible);
export const homepageStudents = () =>
  HOMEPAGE_ORDER.map((n) => students.find((s) => s.firstName === n && s.homepage)).filter((s): s is Student => !!s && isVisible(s));

// Companies a visible student can be named with.
const namedCompanies = () =>
  new Set(visibleStudents().filter((s) => s.employerPermission).flatMap((s) => [s.headline, ...s.otherCompanies]));

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

// ---------------------------------------------------------------- logo strip

export type CompanyLogo = {
  company: string; // exactly as it appears in student data
  slug: string; // public/logos/<slug>.svg
  pairedWith?: string; // renders only alongside this company (Blackstone with Tricon)
};

// Strip order. A logo renders only when a visible student with employer
// permission lists the company (or, for a paired logo, its partner).
export const companyLogos: CompanyLogo[] = [
  { company: "PIMCO", slug: "pimco" },
  { company: "Morgan Stanley", slug: "morgan-stanley" },
  { company: "JPMorgan Chase", slug: "jpmorgan-chase" },
  { company: "Wells Fargo", slug: "wells-fargo" },
  { company: "U.S. Bank", slug: "us-bank" },
  { company: "Blackstone", slug: "blackstone", pairedWith: "Tricon" },
  { company: "Tricon", slug: "tricon" },
  { company: "BridgeBio", slug: "bridgebio" },
  { company: "Sila Nanotechnologies", slug: "sila" },
];

export function visibleLogos(): CompanyLogo[] {
  const named = namedCompanies();
  return companyLogos.filter((l) => named.has(l.pairedWith ?? l.company));
}

// ------------------------------------------------------------ student videos

// TODO(Tyler): paste unlisted YouTube ids. Tiles with an empty id don't render.
export const studentVideos: { videoId: string; title: string }[] = [
  { videoId: "", title: "" },
  { videoId: "", title: "" },
  { videoId: "", title: "" },
  { videoId: "", title: "" },
  { videoId: "", title: "" },
  { videoId: "", title: "" },
];
