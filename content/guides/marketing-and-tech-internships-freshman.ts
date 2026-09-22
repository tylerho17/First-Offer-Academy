import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, tyler, ul } from "./_helpers";
import { technicals } from "../toolkit";

export const guide: Guide = {
  slug: "marketing-and-tech-internships-freshman",
  title: "Breaking into marketing and tech internships as a freshman",
  excerpt: "Marketing and tech reward what you can show more than where you go to school. How to build proof (portfolio pieces, one strong project), who to target, how recruiting timelines differ, and the questions to practice.",
  oneLine: "Build proof with portfolio pieces and one strong project, then target the right teams.",
  category: "Technicals",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["technicals-marketing", "technicals-tech"],
  related: ["target-list-of-50", "cold-email-template", "externships"],
  reviewedByTyler: true,
  body: [
    p("Finance and consulting get most of the attention in campus recruiting conversations, so students interested in marketing or tech often feel like they're figuring it out alone. The good news is that both fields reward something every student can build, starting today: proof. A marketing student with two portfolio pieces and a tech student with one real project they can explain end to end have something to talk about in every email and every interview."),
    p("This guide covers what marketing and tech internships look for in first- and second-year students, how to build proof, who to target, how the timelines differ, and the questions to practice for each. The marketing and tech question banks are free downloads."),

    h2("What's different about marketing and tech"),
    table("Marketing vs. tech at a glance", ["", "Marketing", "Tech (software, data, product)"], [
      ["What gets you noticed", "Portfolio pieces, a campaign you ran, numbers you moved", "One strong project, coding practice, a referral"],
      ["Where first-year roles come from", "Agencies, startups, local businesses, brand teams, campus offices", "Startups, research labs, mid-size companies, first-year programs"],
      ["Timelines", "Rolling; many postings in winter and spring", "Many roles post in late summer and fall for the next summer"],
      ["Interviews", "Behaviorals, a portfolio walkthrough, marketing questions", "Behaviorals, a project walkthrough, coding/SQL/product questions"],
      ["What matters most", "Showing how you think about customers", "Showing how you think while you build"],
    ]),
    tyler("In tech, a referral often matters more than the application. In marketing, a portfolio piece often matters more than the resume. Build the thing, then send the email."),

    h2("Marketing"),
    h3("Build two portfolio pieces"),
    p("You don't need a job to have a marketing portfolio. You need two things you made that show how you think. One campaign idea and one analysis is a strong start."),
    ul(
      "A campaign idea: pick a real local business or brand, define the goal and the audience, choose a channel, write the message, and explain how you'd measure success.",
      "An analysis: a brand teardown of a recent campaign (goal, audience, channel, message, result), or a look at a company's social or email marketing with three specific suggestions.",
      "Anything you actually ran: a club's social account, an event you promoted, an email you tested. Real numbers beat hypothetical ones every time.",
    ),
    example("A brand teardown outline (made-up)", "Brand: a local coffee chain's spring menu launch. Goal: bring back lapsed customers. Audience: students and young professionals nearby. Channel: Instagram and in-store signs. Message: \"new season, same neighborhood spot.\" What worked: consistent visuals and a clear offer. What I'd change: test a student-specific offer and track redemptions by location."),
    h3("The metrics that matter"),
    p("You don't need jargon. You need to understand a handful of ideas well enough to explain them simply: reach (how many people saw it), engagement (how many interacted), conversion (how many did the thing you wanted), customer acquisition cost (what it cost to win a customer), and retention (how many came back). If you can explain how you'd measure whether a campaign worked, you're ahead of most applicants."),
    h3("Who to target"),
    ul(
      "Small and mid-size agencies, which often need extra hands on social, content, and research.",
      "Startups and direct-to-consumer brands with small marketing teams.",
      "Local businesses that need help with social media or email.",
      "Campus offices and organizations that run events and communications.",
      "Brand teams at larger companies (A tier: build relationships early).",
    ),

    h2("Tech"),
    h3("Build one strong project"),
    p("One project you can explain end to end is worth more than five tutorials you followed. Pick something small that solves a real problem for real people, ideally people you know. Build it, ship it, and be ready to talk about every decision."),
    table("What makes a project strong", ["Quality", "Why it matters"], [
      ["It solves a real problem", "Gives you a story about users, not just code"],
      ["You built most of it yourself", "You can answer any question about it"],
      ["Someone actually uses it", "Shows you finish things and care about users"],
      ["You can explain the tradeoffs", "Shows how you think, which is what interviews test"],
      ["The code is on a public profile", "Lets people check your work before they talk to you"],
    ]),
    h3("Practice the fundamentals"),
    p("For software roles, practice core data structures and problem solving regularly, explaining your thinking out loud as you go. For data roles, practice SQL until joins, grouping, and filtering feel easy. For product roles, practice product questions: how would you improve an app you use every day, and how would you measure whether a new feature worked? A little every week beats a cram session before an interview."),
    h3("Referral strategy"),
    p("Many tech companies receive far more applications than they can read closely, and a referral can help an application get seen. Build relationships with engineers, data people, and product managers who are one to four years into their careers, the same way you would in any field: cold emails, real calls, and the referral close. Never ask for a referral directly; ask whether there's anyone else you should talk to, and let relationships develop."),
    h3("Who to target"),
    ul(
      "Early- and growth-stage startups, where founders and early engineers answer emails.",
      "Mid-size software companies and local tech firms.",
      "Campus research labs that need programming help.",
      "Small businesses and nonprofits that need a site, a tool, or data work.",
      "First-year programs at larger tech companies (check each one's dates).",
    ),

    h2("Interviews in marketing and tech"),
    p("Both fields use behavioral questions, just like finance and consulting, so your 8 stories and your 60-second intro matter just as much. What's different is the walkthrough: sooner or later, someone will ask you to walk them through your work."),
    h3("The portfolio or project walkthrough"),
    p("Prepare a two- to three-minute walkthrough of your best piece. Use the same shape every time, and practice it out loud until it's smooth."),
    table("The walkthrough", ["Part", "What to say"], [
      ["The problem", "Who it was for and what wasn't working"],
      ["Your approach", "What you decided to do, and why that over other options"],
      ["What you built or made", "The key pieces, briefly; show it if you can"],
      ["The result", "Numbers if you have them; what users or the client said if you don't"],
      ["What you'd change", "One honest improvement. This shows judgment, not weakness."],
    ]),
    p("Expect follow-ups on every decision: why this channel, why this database, why this audience, why this design. That's why it has to be your own work. If you can explain every choice, even the ones that didn't work, the walkthrough becomes the strongest part of your interview."),

    h2("Emails that lead with proof"),
    p("In both fields, the best cold emails mention something you've made. It gives the reader a reason to reply and something concrete to talk about on the call."),
    example("Marketing email line (made-up)", "\"I put together a short teardown of your team's spring campaign as practice. I'd love to hear whether I read it right, if you'd be open to a short call.\""),
    example("Tech email line (made-up)", "\"I built a small app that helps students at my school find study partners, and your post on onboarding flows changed how I designed the sign-up screen. Would you be open to a short call?\""),
    p("Keep the same rules as any cold email: under 120 words, one ask, a specific first line, and up to 4 follow-ups."),

    h2("Timelines, in practice"),
    p("Marketing and tech run on different calendars, so plan accordingly. In marketing, roles often post when a team needs someone, so keep your portfolio ready and your relationships warm; the student who can send a relevant piece the day a role posts has an edge. In tech, many internships for the following summer post in late summer and fall, often with online assessments first, so start coding practice and relationship-building months before you apply. In both, confirm real dates on each company's careers page and put deadlines in your game plan as soon as you find them."),

    h2("Practice questions: marketing"),
    { type: "ol", items: technicals.marketing.questions },

    h2("Practice questions: tech"),
    { type: "ol", items: technicals.tech.questions },

    h2("A freshman-year plan for either field"),
    ol(
      "Fall: resume v1, one or two portfolio pieces or a project started, 25 self-questions answered.",
      "Winter: target list of 50 with named contacts, outreach system live, first calls.",
      "Spring: finish and ship your project or pieces, 8 stories recorded, apply to every open role on your list.",
      "Summer: an internship, a freelance project, an externship, or a shipped project you can talk about.",
    ),
    p("In the program, marketing and tech students share Weeks 1–8 with everyone, then split in Weeks 9–10: marketing builds portfolio pieces, learns the metrics that matter, and does a brand teardown; tech works on one strong project, coding and SQL and product practice, and referral strategy. Then both face a full graded mock interview."),

    p("One last point for both fields: keep a simple public home for your work. A clean LinkedIn with your projects listed, a portfolio page, or a code profile gives anyone who reads your email a place to check your work in thirty seconds. Link it in your email signature and at the top of your resume."),

    h2("Common mistakes"),
    ul(
      "Waiting until you have \"real experience\" to start a portfolio or project.",
      "Five half-finished projects instead of one finished one.",
      "Portfolio pieces with no goal or measurement.",
      "Applying only through job boards without building relationships.",
      "Asking for a referral before there's a relationship.",
      "Not being able to explain every decision in your own project.",
    ),
    check("You're ready to reach out when",
      "You have two portfolio pieces (marketing) or one project you can explain end to end (tech)",
      "Your resume passes the rubric and features that work",
      "Your target list includes agencies/startups/local firms, not only big names",
      "You've practiced the questions for your field out loud",
    ),
  ],
};
