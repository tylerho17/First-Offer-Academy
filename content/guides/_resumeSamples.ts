// Sample resumes for the resume guide.
//
// The Penn samples are linked, not copied: they belong to Penn Career Services,
// so the site sends readers to Penn's own files instead of republishing them.
//
// tylerResume renders only when filled in. Before adding it, remove the
// names of Tyler's employers (CLAUDE.md: never name them on the site) and
// anything else he wouldn't want public (phone, email, street address).

import type { Block, ResumeDoc } from "../blocks";

export const tylerResume: ResumeDoc | null = null; // TODO(Tyler)

export const PENN_SAMPLES_PAGE = "https://careerservices.upenn.edu/preparing-effective-resumes/undergraduates-student-resume-samples/";

const pennSamples = [
  { label: "Finance (Wharton)", note: "Deals nested under each banking role, and extracurricular bullets that end in a number.", href: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/74/2021/09/SampleFinanceResume-3.jpg" },
  { label: "Consulting (Wharton + Engineering)", note: "SAT scores broken out by section, and a student consulting role with dollar figures in the bullets.", href: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/74/2021/09/SampleConsultingResume.pdf" },
  { label: "Computer Science", note: "Technical skills and coursework right under education, and projects in their own section.", href: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/74/2026/06/Sample_Resume_Undergrad_ComputerScience.pdf" },
  { label: "Computer Engineering", note: "A TA role, a marketing internship, and a retail job on one page. Non-technical work still counts.", href: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/74/2026/06/Sample_Resume_Undergrad_ComputerEngineering.pdf" },
];

// The "Sample resumes" section of the guide.
export const sampleResumeBlocks = (): Block[] => [
  ...(tylerResume
    ? [{ type: "resume", label: "Tyler's resume", note: "The real thing, with employer names removed.", doc: tylerResume } as Block]
    : []),
  {
    type: "links",
    title: "Undergraduate resume samples from Penn Career Services",
    items: pennSamples,
    source: "Samples by the University of Pennsylvania Career Services; each opens on Penn's site. First Offer Academy isn't affiliated with Penn. Research and nursing samples are on",
    more: { label: "Penn's full samples page", href: PENN_SAMPLES_PAGE },
  },
];
