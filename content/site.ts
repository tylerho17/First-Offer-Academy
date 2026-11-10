import { founder, internshipsLine } from "./founder";

// Site-wide settings. Every outbound link on the site comes from here.

const depositRefundDeadline = "December 15, 2026";

// Students coached in the pilot, before the academy existed. Every page that
// states the pilot number reads this.
export const PILOT_STUDENTS = 12;
// How many of them landed an internship or an offer (some pilot students were
// juniors or seniors, and one result is a full-time offer).
export const PILOT_LANDED = 12;

// Firms named in the hero proof row. Only list firms whose students have given
// permission.
export const PLACEMENT_FIRMS = ["Wells Fargo", "Morgan Stanley", "PIMCO", "Tricon"];

export const site = {
  name: "First Offer Academy",
  tagline: "Build the skills. Be that candidate. Get the offer.",
  // The homepage hero subhead, also the site's default meta description.
  description: "For business students starting recruiting. Built for finance and accounting; the outreach and interview system works for any business role. 12 weeks of training and mocks, then weekly check-ins and mocks every other week until you land an offer.",
  domain: "firstofferacademy.com",

  founder: {
    name: "Tyler Ho",
    linkedin: founder.linkedin,
    // TODO(Tyler): exact number of internship offers you received, e.g. "12".
    // Empty = the site says "and offers from many more". Once set, stats and
    // the founder copy say "[N] internship offers".
    offerCount: "",
  },

  // Labeled empty slots (testimonials, employer bar, video slots) so you can
  // see where content still needs to go. Visible only when running locally:
  // `npm run dev` shows them, and any production build hides them, so a
  // visitor never sees a dashed "Placeholder" box.
  showPlaceholders: process.env.NODE_ENV !== "production",

  cohort: {
    name: "Founding cohort",
    start: "January 2027",
    seats: 12, // founding cohort cap; every page reads this
    week0: "January 1, 2027", // Week 0 prep materials sent
    week1: "Monday, January 4, 2027", // Week 1 starts
  },

  // Tuition and the payment schedule. /pricing, /parents, the FAQ, /terms and
  // /refunds all read these. The deposit is a Stripe Payment Link
  // (lib/payments.ts); the two later payments are Zelle requests.
  tuition: {
    total: "$5,000",
    deposit: "$1,000",
    payments: [
      { amount: "$2,000", due: "December 15, 2026" },
      { amount: "$2,000", due: "January 15, 2027" },
    ],
    zelleFrom: "tyler@firstofferacademy.com",
  },

  calendlyUrl: "https://calendly.com/tyler-firstofferacademy",
  // What the parent call is, in one line (the /parents call card, and the
  // note under the main CTA on the homepage, /parents and /pricing).
  callNote: "Twenty minutes with Tyler and Kenji to talk through your student's situation and whether the program fits.",

  // Luma calendars and sessions: content/events.ts and lib/events.ts.

  // Stripe Payment Links live in lib/payments.ts.
  // Legal name of the business, used wherever the legal pages name it.
  legalEntityName: "Tyler Ho, doing business as First Offer Academy",

  // Every outside service that touches personal data. The privacy policy
  // lists exactly these, so keep it accurate when a tool is added or dropped.
  serviceProviders: [
    { name: "Vercel", purpose: "Website hosting and cookieless, aggregate site analytics", url: "https://vercel.com/legal/privacy-policy" },
    { name: "Supabase", purpose: "Database that stores form submissions (applications, contact messages, subscribers)", url: "https://supabase.com/privacy" },
    { name: "Stripe", purpose: "Payment processing for deposits", url: "https://stripe.com/privacy" },
    { name: "Calendly", purpose: "Scheduling calls", url: "https://calendly.com/privacy" },
    { name: "Resend", purpose: "Sending confirmation and program emails", url: "https://resend.com/legal/privacy-policy" },
    { name: "YouTube and Vimeo", purpose: "Embedded videos (loaded in privacy-enhanced mode; they only collect data when you play a video)", url: "https://policies.google.com/privacy" },
  ],

  email: "hello@firstofferacademy.com",
  // Reply-To on every outgoing email, unless the email sets its own
  // (owner notifications reply to the applicant or parent).
  replyTo: "tyler@firstofferacademy.com",
  // Where new-application, scholarship and deposit alerts go, unless
  // NOTIFY_EMAIL / OWNER_NOTIFY_EMAIL override it.
  notifyEmail: "tyler@firstofferacademy.com",
  // Social profile URLs live in content/social.ts.
  // /zh (Mandarin parent page) stays noindex, out of the nav, and out of the
  // sitemap until a native speaker has reviewed content/zh.ts.
  zhReviewed: false,
  // Link to a public review platform (Google, etc.). Stays hidden in the
  // header until real reviews exist.
  reviewsUrl: "",



  // The FAQ answer to "Is it online or in person?". Empty strings below render
  // as "To be announced" / "will be confirmed".
  format: "Online, live sessions on Zoom",
  applicationDeadline: "",
  // Founding cohort refund terms. /refunds, /pricing, the FAQ, and the deposit
  // button all read these. Changing them changes a written promise to families.
  refundTerms: `Your deposit is fully refundable through ${depositRefundDeadline}. After that, it counts toward tuition.`,
  depositRefundDeadline,
  // The First Offer Scholarship: one full-tuition seat per cohort (/scholarship).
  scholarship: {
    closes: "November 30, 2026",
    closesShort: "Nov 30",
    finalists: "first week of December",
    decision: "December 10, 2026",
    finalistsBy: "December 7",
    decisionBy: "December 10",
  },
  withdrawalPolicy: `Cancel before ${depositRefundDeadline} for a full refund. Before Week 3, a prorated refund of unused weeks. After Week 3, no refund. If we cancel the cohort, every payment is refunded in full.`,
  // /refunds and the FAQ.
  latePayments: "7 days late: sessions, 1:1s, and check-ins pause until paid. 14 days late: the student is removed, payments made are not refunded, and offer-or-refund ends.",
};

// "$5,000 total: a $1,000 deposit at enrollment (fully refundable through
// December 15, 2026), then $2,000 due December 15, 2026 and $2,000 due
// January 15, 2027, paid by Zelle request from tyler@firstofferacademy.com."
export const tuitionLine = () => {
  const t = site.tuition;
  const [a, b] = t.payments;
  return `${t.total} total: a ${t.deposit} deposit at enrollment (fully refundable through ${site.depositRefundDeadline}), then ${a.amount} due ${a.due} and ${b.amount} due ${b.due}, paid by Zelle request from ${t.zelleFrom}.`;
};

// The line that sits next to every deposit button.
export const depositRefundLine = () =>
  `Your deposit holds your seat, fully refundable through ${site.depositRefundDeadline}.`;

// "A deposit, fully refundable through December 15, 2026, holds a seat."
// Used wherever a page mentions the deposit, so no page calls it refundable
// without the deadline.
export const depositLine = () =>
  site.depositRefundDeadline
    ? `A deposit, fully refundable through ${site.depositRefundDeadline}, holds a seat.`
    : "A deposit holds a seat.";

// "N internships" from content/founder.ts, plus the exact offer count once
// Tyler sets founder.offerCount. Empty until Tyler sets the internship number.
export const founderInternships = () => {
  const n = internshipsLine();
  if (!n) return "";
  return site.founder.offerCount ? `${n}, and ${site.founder.offerCount} internship offers` : n;
};

// Small whole numbers spelled out for running prose ("coached eight
// freshmen"). Falls back to digits past twelve.
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
export const spell = (n: number) => WORDS[n] ?? String(n);
