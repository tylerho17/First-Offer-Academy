import type { Guide } from "./types";
import { check, example, h2, h3, note, ol, p, table, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";
import { targetListColumns } from "../toolkit";

export const guide: Guide = {
  slug: "target-list-of-50",
  title: "Building a target list of 50 companies (and finding the right contacts)",
  excerpt: "A target list is 50 names you'll actually email, not 50 companies you might apply to someday. How to tier it A/B/C, where first-year opportunities really come from, and how to find the right person at each firm.",
  oneLine: "Tier 50 companies A/B/C and find a named contact at each one.",
  category: "Networking",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: [],
  related: ["ai-cold-email-system", "cold-email-template", "freshman-internship-timeline"],
  reviewedByTyler: true,
  body: [
    p("Most students have a list of companies they'd like to work for. Almost none of them have a target list. The difference is names. A target list is 50 companies, each with a specific person you're going to email, a way to reach them, and one detail you can use in your first line. Without names, it's a wish list."),
    p("The target list is the Level 1 gate of our program, due in Week 2, because everything after it depends on it. Your outreach system sends emails to this list. Your calls come from this list. Your referrals come from the people on it. Build it well once, and the next ten weeks get much easier."),
    p("This guide walks through how to tier your list, where first-year opportunities actually come from, how to find the right person at each firm, and what to log. All you need is one spreadsheet in Google Sheets or Excel."),

    h2("Why 50, and why now"),
    p("Fifty is enough to keep a steady weekly pace without recycling the same people, and small enough to research properly. It's also the number where the math starts working in your favor. Most cold emails don't get replies, and that's normal. With a good list and good emails, your reply rate should move toward 10%. Fifty well-chosen contacts, plus the new names you add as people introduce you to others, gives you a real pipeline of calls."),
    p("You'll keep adding to the list. Every call that ends with \"you should talk to my colleague\" adds a name. Every firm you learn about on a call adds a row. The first 50 is the starting line, not the finish."),

    h2("The A/B/C tiers"),
    tb.tiers(),
    h3("A tier: dream firms, for relationships"),
    p("These are the firms you'd be thrilled to work at. As a freshman, you're very unlikely to get an internship at most of them this year, and that's fine. You're emailing A-tier contacts to build relationships that pay off in sophomore and junior year. Ask about their path, stay in touch, and update them when you make progress."),
    h3("B tier: where first-year internships actually come from"),
    p("This is the heart of your list. Boutiques, middle-market firms, local firms, and startups hire first- and second-year interns far more often than the famous names, and they get far fewer emails from students. A single good call at a B-tier firm can turn into an interview, because there may not be a formal program standing between you and the decision-maker."),
    h3("C tier: safe, and still valuable"),
    p("Local businesses, campus roles, small startups, and companies in your family's network. They give you reps (every call makes the next one better) and a real line on your resume. Never skip your C tier because it feels less exciting."),

    h2("Where to find companies"),
    p("Start with the kinds of firms that hire first-years, then find specific names within each type."),
    tb.earlyMarket(),
    h3("Places to look"),
    ul(
      "Your school's alumni on LinkedIn: search your school, filter by company and title.",
      "Local business journals and 'best places to work' lists for your area.",
      "Startup directories and local accelerator portfolios.",
      "Industry association member lists (accounting, wealth management, marketing, tech meetups).",
      "The firms your calls mention. Ask every person: \"What firms like yours should I be looking at?\"",
      "Early-insight and diversity program listings at larger firms (put these in A or B depending on fit).",
    ),

    h2("What a list looks like by track"),
    p("The tiers work the same for everyone, but the firms in each tier look different depending on your track. Here's the general shape. Swap in real names from your own research."),
    table("Firm types by track and tier", ["Track", "A tier (relationships)", "B tier (realistic)", "C tier (safe)"], [
      ["Finance", "Large banks and well-known investment firms with early-insight programs", "Boutique advisory firms, middle-market banks, local wealth managers and family offices", "Local accounting firms, a campus investment fund, small financial planners"],
      ["Consulting", "Large strategy and management consulting firms", "Boutique and specialty consultancies, in-house strategy teams at local companies", "Small local consultancies, nonprofits needing project help, campus consulting groups"],
      ["Marketing", "Big consumer brands and well-known agencies", "Mid-size agencies, growing DTC brands, local marketing teams", "Local businesses, campus offices, small startups that need social or content help"],
      ["Tech", "Large tech companies with formal internship programs", "Growth-stage startups, mid-size software companies, local tech firms", "Early-stage startups, campus research labs, small businesses needing a site or data work"],
    ]),
    p("If you're split between two tracks, it's fine to build a mixed list for your first few weeks. After ten or so calls, you'll know which direction pulls you, and you can re-tier the list around it."),

    h2("Finding the right person"),
    p("The right contact is someone doing the job you want to learn about, ideally someone with something in common with you. Here's the order I use."),
    tb.sourcing(),
    h3("Who to email at each firm"),
    table("Picking a contact", ["Firm type", "Best first contact", "Why"], [
      ["Large firm", "An analyst or associate 1–4 years out of school, ideally an alum", "Closest to your situation and most likely to reply"],
      ["Boutique or middle market", "An analyst, associate, or VP", "Small teams, so one person can open a real door"],
      ["Local firm", "An associate or a partner", "Partners at small firms often read their own email"],
      ["Startup", "A founder or early employee", "They answer cold emails and hire for hustle"],
      ["Brand or agency (marketing)", "A coordinator, associate, or manager on the team you want", "They know what the team needs right now"],
      ["Tech company", "An engineer, PM, or data person 1–4 years in", "Referrals often matter more than applications"],
    ]),
    tyler("Alumni from your school reply more than anyone else. Start there. After that, look for anything you share: hometown, high school, first job, first-gen path. People help people who remind them of themselves."),
    h3("Contact tools"),
    p("Tools like Apollo or RecruitEm can help you find work emails. Most have a free tier that's enough for a student. When the tool gives you an email format (first.last@firm.com), verify it with a second source if you can, like a press release or another employee's email on a public page. Never email generic inboxes like info@ or careers@; they don't count toward your 50."),
    note("Be respectful with contact data", "Use work emails you find for one purpose: a short, personal note asking for a conversation. Don't add people to newsletters, don't share their details, and stop emailing anyone who asks you to."),

    h2("What to log for each contact"),
    p("Your sheet has one row per company with these columns. The most important column is the last personal one: a specific detail for your first line. That's what turns a template into a personal email."),
    table("Target list columns", ["Column", "What goes in it"], targetListColumns.map((c) => [c, columnHint(c)])),
    example("Example row (made-up)", "B · Example Growth Co. · Startup · Remote · Sam Example · Founder · sam@example.com · linkedin.com/in/example2 · Same hometown · Launched a new product in March · Apollo · 2027-01-12"),

    h2("A weekend plan to build the list"),
    ol(
      "Friday, 1 hour: write down 15 firms you already know you're curious about. Tier them.",
      "Saturday, 2 hours: use the market types above to find 35 more. Aim for roughly 10 A, 30 B, 10 C.",
      "Saturday, 1 hour: for each firm, find 2–3 people on LinkedIn. Pick the best one and note a backup.",
      "Sunday, 2 hours: find work emails for your top pick at each firm; note one personal detail each.",
      "Sunday, 30 minutes: sort by tier and pick the first 50 for your first week of outreach.",
    ),

    h2("Keeping the list alive"),
    p("A target list isn't a one-time assignment. Every week in the program, students add names from their calls and move people into the tracker when they reply. A few rules keep it useful:"),
    ul(
      "When someone replies, move them into your outreach tracker. Only track people who reply; everyone else lives in your sequence until they do.",
      "When someone introduces you to a colleague, add that person immediately with the introducer noted.",
      "When a firm isn't a fit after a call, don't delete it. Mark it and note why.",
      "Re-tier every month. A C-tier firm where you had a great call might deserve a second contact.",
    ),

    h2("Common mistakes"),
    ul(
      "Only famous firms. If your list is all A tier, you'll get very few replies and very few first-year opportunities.",
      "Companies with no names. Every row needs a person.",
      "Picking the most senior person you can find. A second-year analyst is far more likely to reply than a managing director.",
      "Skipping the personal detail. Without it, your email reads like everyone else's.",
      "Spending three weeks researching instead of sending. The list is done when it's good enough to send to.",
    ),
    check("Your list is ready when",
      "It has 50 companies, tiered A/B/C (roughly 10/30/10)",
      "Every company has a named contact and a work email",
      "Every contact has one personal detail for the first line",
      "It's in one sheet you'll actually open every week",
    ),
    p("Next up: the AI outreach system that turns this list into 50 personalized emails a week, and the cold email templates to use for each type of contact."),
  ],
};

function columnHint(c: string): string {
  const hints: Record<string, string> = {
    "Tier (A/B/C)": "A = dream firm, B = realistic, C = safe",
    Company: "The firm's name",
    Type: "Boutique, middle market, local firm, startup, brand, agency, tech company",
    City: "Where the team sits (local firms are an advantage)",
    "Contact name": "A named person, never a generic inbox",
    Title: "Their current title",
    Email: "Work email, verified if possible",
    "LinkedIn URL": "Their profile, for research",
    "School / shared background": "Same school, hometown, first job, or path",
    "Personal detail for first line": "One specific, verifiable thing about them or their work",
    Source: "Where you found them (alumni search, Apollo, a referral)",
    "Date added": "When the row was added",
  };
  return hints[c] ?? "";
}
