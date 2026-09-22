import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, template, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "call-to-referral",
  title: "How to turn a call into a referral without asking for one",
  excerpt: "Calls are how you meet people. Introductions are how you get in the door. The referral close, what to do with a yes or a no, and how to stay warm for months without being annoying.",
  oneLine: "The referral close, what to do with a yes or a no, and how to stay warm for months.",
  category: "Networking",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: [],
  related: ["networking-call-framework", "ai-cold-email-system", "why-this-industry-why-this-firm"],
  reviewedByTyler: true,
  body: [
    p("Here's a pattern I see all the time. A student has a great call. The person is friendly, generous with advice, and says \"let me know if I can help.\" The student says thanks, sends a nice note, and never hears from them again. The call was pleasant and led nowhere."),
    p("The missing piece is the close. A good call should end with a clear, easy next step, one that moves you one door closer to an opportunity without asking the person to stick their neck out. And the relationship should keep going after the call, so that when a role opens, you're the student they think of."),
    p("This guide covers the referral close, what to do with every kind of answer, how to stay warm for months, and how to track relationships so nothing slips. You can run all of it from the same spreadsheet you already use for outreach."),

    h2("Why you never ask for a referral directly"),
    p("A referral is a person putting their name next to yours. That's a big ask from someone who met you 20 minutes ago. Ask for it directly and you force them into an awkward choice: say yes to something they're not comfortable with, or say no to your face. Either way, the warmth of the call evaporates."),
    ...tb.referralClose(),

    h2("How to use the close"),
    p("Timing matters. Use the close in the last two or three minutes, after the conversation has gone well, and after you've asked your best questions. Say it plainly and then stop talking."),
    h3("The two lines"),
    table("When to use which", ["Line", "Best when"], [
      ["\"Is there anyone on the team you'd be comfortable introducing me to?\"", "You want to go deeper at this firm; the call went well and they mentioned teammates."],
      ["\"Is there another perspective you think would be good for me to hear?\"", "You're still exploring; you want breadth across firms or roles. Easier to say yes to."],
    ]),
    p("Notice what both lines do. They ask for a conversation, not a job. They let the person choose who and how. And they're easy to say yes to, because introducing a curious student to a colleague for a chat costs very little."),
    h3("What to say after a yes"),
    p("Thank them, and make it easy. Offer to send a short blurb they can forward, so they don't have to write anything. Then follow up within 24 hours if the intro hasn't happened. People mean to do it and forget."),
    template("Follow-up if the intro hasn't happened (24–48 hours)", "Hi [First name],\n\nThanks again for offering to connect me with [Name]. In case it's helpful, here's a short note you can forward:\n\n\"[Your name] is a freshman at [school] interested in [field]. We talked about [topic], and I think a conversation with you would be useful for them.\"\n\nNo rush at all, and thank you again.\n[Your name]"),
    h3("What to say after a no"),
    p("\"Totally understand, thank you for the time today.\" Then send the thank-you anyway, just as warmly. A no today is usually about timing, not about you. People who say no to an intro often say yes three months later, after you've sent them an update showing you took their advice."),
    h3("What to do with a maybe"),
    p("\"Let me think about who would be good\" is common. Thank them, mention it in your thank-you note (\"I'd be grateful for any introduction you think makes sense\"), and follow up once in about two weeks with an update and a gentle reminder."),

    h2("The intro email itself"),
    p("When someone introduces you, reply within a few hours. Move the introducer to BCC (\"Moving [name] to BCC to spare their inbox, thank you for connecting us!\"), then ask the new person for a short call, just like a cold email, but warmer."),
    example("Replying to an intro (made-up)", "\"Thanks so much, Alex (moving you to BCC). Hi Sam, it's great to meet you. Alex mentioned you moved from the audit side into deal work, which is exactly what I'm trying to understand. Would you be open to a short call in the next couple of weeks? Happy to work around your schedule.\""),
    p("After the call with the new person, send a thank-you to them and a short update to the person who introduced you. Closing the loop is how you earn the next intro."),

    h2("Staying warm for months"),
    p("Most relationships die from silence, not from rejection. A short, specific note every few weeks keeps you in someone's head when a role opens. Here's the schedule I use."),
    tb.stayWarm(),
    h3("What makes a good update"),
    ul(
      "It's short: two to four sentences.",
      "It's specific: \"You suggested I look at middle-market firms; I've had three calls with them since.\"",
      "It asks nothing, or asks one small question.",
      "It gives them credit for helping you.",
    ),
    template("The \"I took your advice\" update", "Hi [First name],\n\nQuick update: you suggested I [their advice]. I did, and [what happened, in one sentence]. Thank you again for pointing me in that direction.\n\nHope [something they mentioned on the call] is going well.\n[Your name]"),
    tyler("The update where you tell someone you took their advice is the most underrated email in recruiting. Everyone likes hearing that their advice mattered."),

    h2("Tracking every relationship"),
    p("If it's not in the tracker, you'll forget it, and so will they. For every person who replied, log: when you spoke, what they said, whether you used the close, who they introduced you to, and when you're due to follow up next. Sort by the next follow-up date every Sunday."),
    table("Tracker columns that matter for referrals", ["Column", "Why"], [
      ["Referral close used?", "So you can see whether you're actually closing"],
      ["Intro to", "Who they connected you with (and the chain it started)"],
      ["Next follow-up date", "So no relationship goes silent by accident"],
      ["Notes (what they said)", "The details you'll reference in updates"],
    ]),

    h2("How introductions become interviews"),
    p("An introduction isn't an interview, but it's a much shorter path to one. A colleague who takes your call because a teammate asked is already more open than a stranger. Over a few conversations, several things can happen: they tell you about a role before it posts, they flag your application internally, they suggest you apply to a program you didn't know about, or they introduce you to the person who makes the decision. None of these is a sure thing, and none happens after one call. They happen after a relationship."),
    p("In the program, the Week 6 deliverable is 200 emails sent, 5 calls, the close used on every call, and a first intro earned. By Week 8, the Level 4 gate includes 2 referrals or intros. The numbers are deliberately modest. A handful of warm relationships beats a hundred forgotten calls."),

    h2("A worked example: one call, three doors"),
    p("Here's how the close plays out over a couple of months, for a made-up student. The names and firms are invented; the sequence is the point."),
    table("One relationship over eight weeks (made-up)", ["When", "What happened", "What the student did"], [
      ["Week 1", "A 20-minute call with Alex, an analyst at a boutique. Good conversation about their move from audit into deals.", "Used the first close line. Alex offered to introduce them to Sam, a teammate."],
      ["Same day", "Thank-you sent 90 minutes after the call, mentioning Alex's point about organizing information.", "Offered the forwardable blurb. Logged the call and the pending intro."],
      ["Week 2", "No intro yet.", "Sent the 24–48 hour follow-up with the blurb. Alex made the intro that afternoon."],
      ["Week 3", "Call with Sam. Sam mentioned the team sometimes takes a sophomore intern and suggested talking to Jordan at a similar firm.", "Used the second close line. Thanked Sam, and sent Alex a short update closing the loop."],
      ["Week 7", "The student acted on Sam's advice about building a small valuation model.", "Sent Sam the \"I took your advice\" update with a one-line summary of the model."],
      ["Week 8", "Sam replied that the team's summer posting would go up soon and to apply when it did.", "Added the deadline to the game plan and prepared for the interview."],
    ]),
    p("Nothing in that sequence required luck or a famous connection. It required using the close every time, following up when an intro stalled, closing the loop with the person who helped, and sending an update weeks later. That's the whole skill."),

    h2("Practicing the close"),
    p("The close feels awkward until you've said it out loud ten times. In the Week 6 session, students practice it until it sounds natural and role-play the awkward \"no\" so it stops being scary. Try it with a friend: have them say yes, no, and maybe, and practice your response to each."),

    h2("Common mistakes"),
    ul(
      "Asking \"Can you refer me?\" on the first call.",
      "Skipping the close because the call went well and you don't want to ruin it.",
      "Not following up when an intro doesn't happen.",
      "Forgetting to thank the person who introduced you.",
      "Going silent for months, then reappearing only when you need something.",
      "Not logging relationships, so follow-ups slip.",
    ),
    ol(
      "This week: use the close on every call.",
      "Within 24 hours of every yes: send the forwardable blurb.",
      "Every Sunday: sort your tracker by next follow-up date and send what's due.",
    ),
    check("You're doing it right when",
      "Every call ends with the close",
      "Every intro gets a reply within hours and a thank-you to the introducer",
      "Everyone whose advice you used hears about it",
      "No one in your tracker goes more than 8 weeks without hearing from you",
    ),
  ],
};
