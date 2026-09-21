import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "networking-call-framework",
  title: "The networking call: a full framework and question bank",
  excerpt: "A reply isn't the win. The call is. How to prep fast, open so it doesn't feel like an interview, listen 80% of the time, ask questions that prove you listened, and send the thank-you that gets you remembered.",
  category: "Networking",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["call-framework"],
  related: ["call-to-referral", "cold-email-template", "why-this-industry-why-this-firm"],
  reviewedByTyler: false,
  body: [
    p("Students work hard to get a reply, and then treat the call that follows like an interview: stiff, over-prepared, and forgettable. They ask five questions they found online, take notes in silence, say thank you, and hang up. The person on the other end forgets them by dinner."),
    p("The biggest failure mode on a networking call is being dry. The goal of a call isn't to extract information. It's to have a real conversation that the other person enjoys and remembers, so that when a role opens or a colleague asks \"know any good students?\", your name comes to mind."),
    p("This is the framework I use for every call. It covers how to prep, how to open, how to structure 20 minutes, the questions to ask, the thank-you, and the mistakes that sink calls. The one-page call framework is a free download."),

    h2("Before the call: quick prep"),
    p("Prep with AI on the firm and the person, then check every fact yourself. You want four things in your head, not on a script:"),
    ol(
      "What the firm does, in two sentences you could say out loud.",
      "Two or three recent things worth asking about: a deal, a launch, a hire, an expansion, a post they wrote.",
      "Their path: school, first job, moves since, anything unusual.",
      "One question about their personal path that you genuinely want answered.",
    ),
    example("Call-prep prompt", "\"I have a 20-minute call with [name], [title] at [firm]. Here's their profile and what I know about the firm: [paste]. Give me: a two-line summary of what the firm does, three recent things worth asking about, five questions that show I did my homework, and one question about their personal path.\" Then verify everything it gives you."),
    h3("Logistics"),
    ul(
      "Confirm the day before with a one-line email.",
      "Be early. For video, test your camera and audio; sit somewhere quiet with light on your face.",
      "Have your resume open but don't read from it.",
      "Keep a notes doc open to capture two or three specifics they say. You'll need them for the thank-you.",
    ),

    h2("The framework, minute by minute"),
    tb.callFramework(),
    tyler("I open every call with \"Anything exciting going on lately?\" When they ask it back, I answer long and casually. It sets the tone: we're two people talking, not an interview. Then I move to my intro and their story, and I listen 80% of the time."),

    h2("The open: set the tone"),
    p("The first three minutes decide whether this is a conversation or an interview. Most students skip straight to \"So, can you tell me about your role?\" and lock the call into Q&A mode for the next 17 minutes."),
    p("Instead, ask \"Anything exciting going on lately?\" It's easy to answer, it's human, and it almost always gets asked back. When it does, don't say \"Not much, just school.\" Answer long and casually: a trip, a class you like, something you're building, a show you're watching. You're modeling the kind of conversation you want to have."),
    h3("Your intro"),
    p("Then give your 60-second intro, loosened up: where you're from, what pulled you in, what you've done, and why you wanted to talk to them specifically. That last part matters. \"I reached out because you went from our school into advisory, and I'm trying to understand that path\" tells them exactly how to help you."),

    h2("The middle: their story, and listening"),
    p("Most of the call is them talking. Your job is to be genuinely curious and to follow the conversation where it goes. Talk about 20% of the time."),
    h3("Questions that prove you were listening"),
    p("The best question on any call is a follow-up to something they just said. \"You mentioned the first year was mostly learning to organize information. What did that look like day to day?\" A follow-up proves you're listening, and people love talking to someone who listens. Prepared questions are your backup when the conversation stalls."),
    h3("The question bank"),
    p("Pick three or four before each call, based on what you learned in prep. You won't get to all of them, and that's fine."),
    ...tb.questionBank(),
    h3("Questions to avoid"),
    ul(
      "Anything the firm's website answers (\"What does your firm do?\").",
      "\"Are you hiring?\" or \"Can you refer me?\" Use the close instead.",
      "Salary and hours on a first call.",
      "Questions that ask them to criticize their employer.",
    ),

    h2("The close: ask for the next door, not a referral"),
    p("At about 18 minutes, start wrapping up. Never ask for a referral directly. It puts people on the spot. Instead, give them an easy way to help:"),
    ul(
      "\"Is there anyone on the team you'd be comfortable introducing me to?\"",
      "\"Is there another perspective you think would be good for me to hear?\"",
    ),
    p("Then thank them and end on time. If they want to keep talking, let them; that's a great sign. But never be the reason a call runs over. The next guide goes deep on the close and what happens after."),

    h2("The thank-you: 1–2 hours later"),
    p("Send the thank-you 1–2 hours after the call, not the next day. Mention one specific thing they said and one thing you'll do because of it. If you promised a next step (\"I'll reach out to Sam as you suggested\"), say so. This note is what makes someone remember you months later."),
    tb.thankYou(),
    p("Then log the call in your tracker: the date, what they said, whether you used the close, who they introduced you to, the thank-you time, and when to follow up next."),

    h2("What a good call sounds like"),
    p("Here's a compressed, made-up exchange that shows the framework in motion. Notice how little of it is the student asking prepared questions."),
    table("A call, annotated (made-up)", ["Moment", "What was said", "Why it works"], [
      ["Open", "\"Anything exciting going on lately?\" / \"Honestly, just got back from a trip. You?\" / \"I just finished my first cooking class series. I burned everything for three weeks and finally made a decent dumpling.\"", "Casual, a little funny, and long enough to set the tone."],
      ["Intro", "\"I did the books for my family's restaurant growing up, and that got me curious about how businesses make money. I reached out because you went from our school into advisory.\"", "Short, specific, and tells them exactly how to help."],
      ["Their story", "\"…and my first year was mostly learning to organize information.\" / \"What did that look like day to day?\"", "A follow-up on their words, not a scripted question."],
      ["Listening", "The student mostly listens, takes two notes, and asks one more follow-up.", "80/20."],
      ["Close", "\"This has been really helpful. Is there anyone on the team you'd be comfortable introducing me to?\"", "Easy to say yes to, and asked at the right moment."],
    ]),
    p("That call ends with two specifics for the thank-you note (the organizing point and the cooking-class tangent they laughed at), a possible intro, and a person who enjoyed talking to a student. That's a successful call, whether or not anything happens this month."),

    h2("Phone vs. video vs. coffee"),
    table("Formats", ["Format", "Tips"], [
      ["Phone", "Stand up and smile while you talk; it changes your voice. Have notes in front of you."],
      ["Video", "Camera at eye level, light on your face, quiet room. Look at the camera when you talk."],
      ["Coffee (local firms)", "Offer to meet near their office, arrive early, and pay if you can. Keep it to 30 minutes unless they stay."],
    ]),

    h2("What sinks a call"),
    tb.callFailures(),

    h2("Practicing before the real thing"),
    p("In the program, Week 5 students run mock calls in pairs, then take the hot seat with the coach playing a distracted associate who checks their phone and gives one-word answers. It's uncomfortable on purpose. You can do a version of this with a friend: have them play someone busy and slightly bored, and practice keeping the conversation warm anyway. Record it and watch where your energy drops."),

    h2("After ten calls"),
    p("Something changes around the tenth call. You stop being nervous, you start recognizing patterns in what people say about their jobs, and your \"why this field\" answer starts writing itself from real conversations. That's the goal. Every call is research for your interviews, and every call is a relationship that might open a door."),
    check("Every call",
      "Quick prep done, facts verified",
      "Opened with \"anything exciting lately?\"",
      "Listened 80% of the time",
      "At least one follow-up question about something they said",
      "Used the close",
      "Thank-you sent within 2 hours and logged",
    ),
    p("In the program, the Level 3 gate (Week 5) is 150 emails sent, 3 calls completed, and a thank-you within 2 hours of each. It's a small number of calls on purpose: done well, three calls teach you more than thirty done badly."),
  ],
};
