import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "resume-with-zero-experience",
  title: "How to write a top-tier resume with zero experience",
  excerpt: "You don't need an impressive resume. You need a clean, specific one you can talk about. The rubric we grade every resume against, bullet rewrites, and a full before-and-after.",
  category: "Resume",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["resume-rubric", "resume-template"],
  related: ["tell-me-about-yourself", "behavioral-stories", "freshman-internship-timeline"],
  reviewedByTyler: false,
  body: [
    p("Every first-year student I talk to says some version of the same thing: \"I don't have anything to put on my resume.\" That's almost never true. What's true is that they don't know how to write about what they've done, so it reads like nothing."),
    p("Here's the good news. Nobody reading a freshman's resume expects a finance internship or a startup exit. What they want is a clean page, specific bullets, and a sense of who you are and what you're curious about. That's achievable for every student, regardless of background, by the end of a single weekend."),
    p("This guide covers the rubric we grade every resume against in the program, how to turn duties into outcomes, what counts as experience when you think you have none, and a full before-and-after example. The rubric and a one-page template are free downloads."),

    h2("What a resume is actually for"),
    p("Your resume is ranked second on the list of things that matter in recruiting, right behind networking. That ranking tells you what it's for. A resume rarely gets you the job on its own. It gets read because a person asked to see it, and then it becomes the agenda for every conversation that follows."),
    p("That changes how you should write it. Every line on your resume is a question someone might ask you. So every line should be something you'd enjoy answering, for two minutes, with a story behind it. If there's a line you'd dread being asked about, it doesn't belong there."),
    tyler("Your resume doesn't need to be impressive. It needs to be clean, specific, and easy to talk about. That's a much easier bar to clear, and it's the one that matters."),

    h2("The rubric"),
    p("This is the checklist every resume in the program is graded against. A resume passes when every box is checked. Print it, grade yours honestly, and fix every unchecked box before you send a single email."),
    ...tb.rubric(),

    h2("What counts as experience"),
    p("When you think you have no experience, you're usually filtering out everything that doesn't look like an internship. Stop filtering. At this stage, all of these count:"),
    ul(
      "Jobs of any kind: retail, food service, tutoring, babysitting, delivery, the family business. They show reliability, and reliability is exactly what a manager wants in an intern.",
      "High school leadership: team captain, club officer, student government, organizing an event, starting something.",
      "Campus involvement: club roles, committees, residence life, volunteering. A role, not just a membership.",
      "Projects: a stock pitch, a website, a small business, a research paper, a model in Excel, a campaign for a local shop. Projects count when they have a result.",
      "Responsibilities at home: translating for family, managing a household budget, caring for siblings. These can be real stories, written carefully and only if you're comfortable sharing them.",
      "Externships: a structured, short project with a real deliverable. More on these in the externships guide.",
    ),
    p("In freshman year, keep your high school section with real achievements. By junior year, drop it; your college experience should carry the page by then."),

    h2("Bullets are outcomes, not duties"),
    p("The single fastest way to improve a resume is to rewrite every bullet from what you were responsible for into what changed because you were there. The formula: strong verb + what you did + result, with a number wherever you can find one."),
    tb.bulletRewrites(),
    h3("How to find the number"),
    p("Students tell me they don't have numbers. You almost always do. Ask yourself:"),
    ul(
      "How many people? (customers served, students tutored, members recruited, attendees)",
      "How much money? (budget managed, sales made, funds raised, costs cut)",
      "How often? (per shift, per week, per quarter)",
      "How much time? (hours saved, deadline met, turnaround cut)",
      "What changed? (before vs. after: followers, grades, attendance, errors)",
    ),
    p("Estimate honestly if you don't have exact records, and be ready to explain how you got the number. \"About 150 transactions a shift\" is fine. An inflated number you can't defend in an interview is not."),
    h3("Strong verbs to start with"),
    table("Verbs by what you did", ["If you…", "Try"], [
      ["Led or organized", "Led, organized, launched, founded, coordinated, ran"],
      ["Built or made", "Built, designed, created, wrote, developed, produced"],
      ["Improved something", "Grew, increased, cut, reduced, streamlined, improved"],
      ["Analyzed", "Analyzed, researched, modeled, evaluated, compared, tested"],
      ["Worked with people", "Trained, tutored, advised, negotiated, recruited, presented"],
    ]),

    h2("A full before and after"),
    p("Here's a made-up student to show the whole transformation. Same experience, same person. The only thing that changed is how it's written."),
    ...tb.exampleResume(),
    p("Notice what changed. The \"after\" version has a clear header, specific titles, numbers in most bullets, a project that shows interest in the field, and skills that are real and testable. It also cut \"teamwork, communication, leadership\" from the skills line, because those are claims, not skills. Show them in bullets instead."),

    h2("Section by section"),
    h3("Header"),
    p("Name, phone, school email, city, and a customized LinkedIn URL. Nothing else: no photo, no full street address, no objective statement. Make sure your LinkedIn matches your resume, because people will check."),
    h3("Education"),
    p("School, degree, major, and expected graduation month and year. Include your GPA if it's 3.5 or higher; otherwise leave it off and be ready to answer honestly if asked. Only list coursework that's specific to the field."),
    h3("Experience"),
    p("Organization, title, city, and dates, then two to four outcome bullets. Put your most relevant experience first, not necessarily your most recent. If your strongest item is a project, it can go above a job."),
    h3("Leadership and activities"),
    p("Real roles with real bullets. A list of club names tells a reader nothing; one line about what you actually did in one club tells them a lot."),
    h3("Skills and interests"),
    p("Only skills you could use in an interview tomorrow: Excel with the specific functions you know, SQL, Python, Figma, languages with your level. Then two or three specific interests that start conversations. \"Long-distance running\" and \"Orange County food trucks\" get asked about. \"Sports\" and \"music\" don't."),

    h2("Formatting that passes the 6-second test"),
    p("Most readers decide in about six seconds whether to keep reading. In those six seconds, a stranger should be able to tell what you're interested in, and your strongest item should be in the top third of the page."),
    ul(
      "One page. No exceptions for first- and second-year students.",
      "One standard font, 10–12 pt body, margins of at least 0.5 inch.",
      "No photos, graphics, skill bars, color blocks, or two-column templates. They look nice and read badly, and many application systems can't parse them.",
      "Consistent dates, punctuation, and alignment on every line.",
      "Saved as a PDF named Firstname-Lastname-Resume.pdf.",
    ),

    h2("Using AI on your resume, carefully"),
    p("AI is genuinely useful for resumes, as long as you stay in charge. Use it to suggest stronger verbs, to cut a bullet from three lines to two, or to ask \"what questions would an interviewer ask about this line?\" Don't let it invent numbers, inflate your role, or add skills you don't have. Every word on your resume is something you're agreeing to talk about under pressure."),
    example("Example prompt", "\"Here is one bullet from my resume and the real details behind it: [paste]. Rewrite it as one line that starts with a strong verb and ends with a result. Use only the facts I gave you. Then list three questions an interviewer might ask about it.\""),

    h2("Your resume and your intro are the same story"),
    p("Once your resume passes the rubric, write your 60-second intro: where you're from, what pulled you in, what you've done, and why you're talking to this person. The \"what you've done\" part should come straight from your top two resume items. When your resume and your intro tell the same story, every interview feels more coherent."),
    tb.intro(),

    h2("Common mistakes"),
    ul(
      "Two pages. Cut until it fits.",
      "Bullets that start with \"responsible for\" or \"helped with.\"",
      "A skills section full of soft skills (\"leadership, teamwork\").",
      "Listing every club you joined, with no role or result.",
      "A number you can't explain.",
      "Typos. Read it backwards, then have someone else read it.",
    ),

    h2("Your weekend plan"),
    ol(
      "Download the resume template and move your content into it.",
      "Rewrite every bullet with the verb + what + result formula.",
      "Find a number for at least half your bullets.",
      "Grade it against the rubric and fix every unchecked box.",
      "Have one person you trust read it for typos and six-second clarity.",
      "Record your 60-second intro using your top two resume items.",
    ),
    check("Done when",
      "Every rubric box is checked",
      "You can talk for two minutes about every line",
      "A stranger can tell your direction in six seconds",
    ),
    p("In the program, the resume is the Week 2 deliverable, and the weekly 60-minute 1:1 is where we edit it live, bullet by bullet, until it passes. On your own, the rubric is the next best thing: be as honest grading yourself as a stranger would be."),
  ],
};
