// The Playbook: free articles. Review every article before launch.
// Body is a list of blocks so no markdown library is needed.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "template"; title: string; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Getting started" | "Networking" | "Interviews" | "For parents";
  track?: "finance" | "consulting" | "marketing" | "tech";
  date: string; // ISO date
  readMinutes: number;
  author: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "freshman-internship-timeline",
    title: "The freshman internship timeline: what to do each quarter",
    excerpt: "Most students find out how early recruiting starts when it's already too late. Here's what freshman year should actually look like.",
    category: "Getting started",
    date: "2026-09-21",
    readMinutes: 5,
    author: "Tyler Ho",
    body: [
      { type: "p", text: "The most common thing I hear from sophomores is some version of: \"I didn't know it started this early.\" For finance, consulting, and a growing share of tech and marketing roles, the people who land internships in sophomore and junior summer started building toward them in freshman year. Not by applying to everything, but by doing a few boring things consistently." },
      { type: "p", text: "Here's the timeline I give every first-year student." },
      { type: "h2", text: "Fall quarter: build the foundation" },
      { type: "ul", items: [
        "Write a one-page resume, even if it's thin. High school leadership, jobs, and projects count right now.",
        "Pick one or two fields to explore. You don't need to be sure. You need a direction.",
        "Set up LinkedIn with a real photo and a clear headline.",
        "Record yourself answering \"tell me about yourself.\" Watch it. It will be uncomfortable. That's the point.",
      ] },
      { type: "h2", text: "Winter quarter: start talking to people" },
      { type: "ul", items: [
        "Build a list of 50 companies in your field, including small and local firms, not just the famous names.",
        "Send personalized emails to people at those companies. Aim for a steady weekly number, not a burst.",
        "Every call gets a thank-you note within two hours and a line in your tracker.",
        "Apply to freshman and sophomore programs: early-insight days, diversity programs, and local internships.",
      ] },
      { type: "h2", text: "Spring quarter: turn conversations into opportunities" },
      { type: "ul", items: [
        "Follow up with the people you spoke to in winter. Share something you learned or did.",
        "Ask for referrals once you have a real relationship, not on the first call.",
        "Prepare six behavioral stories: leadership, teamwork, failure, conflict, initiative, and why this field.",
        "Say yes to the small internship. A first role at a local firm makes the second role much easier.",
      ] },
      { type: "h2", text: "What matters most" },
      { type: "p", text: "Recruiting doesn't reward the smartest student. It rewards the one who sent the 40th email, followed up on time, and practiced out loud. That's a habit, and habits can be built in a single year." },
    ],
  },
  {
    slug: "cold-email-template",
    title: "How to write a cold email that gets a reply (with a template)",
    excerpt: "Five sentences, one specific question, and a follow-up schedule. The exact structure our students use.",
    category: "Networking",
    date: "2026-09-21",
    readMinutes: 4,
    author: "Tyler Ho",
    body: [
      { type: "p", text: "Most cold emails fail for the same reason: they ask a stranger to do work. \"Can you tell me about your job?\" is work. \"Could I ask you two questions about how you chose your group?\" is a favor people like doing." },
      { type: "h2", text: "The structure" },
      { type: "ul", items: [
        "Subject line: specific and short. \"UCI freshman: question about your path into consulting\".",
        "Line 1: who you are, in one sentence.",
        "Line 2: why them specifically. Their school, their team, a post they wrote.",
        "Line 3: the ask. Fifteen minutes, their schedule, phone or Zoom.",
        "Line 4: thanks. No paragraph of apologies.",
      ] },
      { type: "template", title: "Template", text: "Subject: UC Irvine freshman: quick question about your path into [field]\n\nHi [Name],\n\nI'm a freshman at UC Irvine studying [major] and starting to explore [field]. I saw that you [specific detail: went from UCI to X / wrote about Y / work on Z], and I'd love to hear how you approached it.\n\nWould you be open to a 15-minute call sometime in the next two weeks? Happy to work around your schedule.\n\nThank you,\n[Your name]\n[LinkedIn URL]" },
      { type: "h2", text: "The follow-up" },
      { type: "p", text: "No reply is normal. Follow up once after five business days with a single line: \"Just bumping this in case it got buried. Totally understand if now's busy.\" Then move on. Log everything. Twenty-five good emails a week will produce more calls than you can handle within a month." },
      { type: "h2", text: "After the call" },
      { type: "p", text: "Send a thank-you within two hours that mentions one specific thing they said. That note is what makes someone remember you when a referral comes up months later." },
    ],
  },
  {
    slug: "tell-me-about-yourself",
    title: "\"Tell me about yourself\": a 60-second answer that works",
    excerpt: "The first question in almost every interview, and the one most students wing. A simple three-part structure.",
    category: "Interviews",
    date: "2026-09-21",
    readMinutes: 4,
    author: "Tyler Ho",
    body: [
      { type: "p", text: "\"Tell me about yourself\" is not a request for your life story. It's the interviewer asking: who are you, why are you here, and should I keep listening? You have about sixty seconds to answer all three." },
      { type: "h2", text: "Past, present, future" },
      { type: "ul", items: [
        "Past (15 seconds): where you're from and the one experience that pointed you toward this field.",
        "Present (25 seconds): what you're doing now that shows you're serious. Classes, clubs, a project, a job, conversations with people in the field.",
        "Future (20 seconds): why this role, at this company, is the logical next step.",
      ] },
      { type: "h2", text: "Make it sound like you" },
      { type: "p", text: "Write it down once, then stop reading it. Practice it out loud ten times until you can say it in slightly different words each time. Memorized answers sound memorized; practiced answers sound confident." },
      { type: "h2", text: "Record it" },
      { type: "p", text: "In our program, every student records this answer in Week 1 and again in Week 12. Watching the two side by side is the clearest proof of progress we know. Try it yourself: record today, practice for a month, and record again." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
