import { founder, internshipsLine } from "./founder";

// Site-wide settings. Every outbound link on the site comes from here.

const deposit = "$1,000";
const depositRefundDeadline = "December 15, 2026";
const balance = "$4,000";

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
    seats: 24,
    price: "$5,000", // everything included; paid in full, or deposit + balance
    deposit,
    balance, // due before Week 1
    balanceDue: "before Week 1",
  },

  calendlyUrl: "https://calendly.com/tyler-firstofferacademy",

  // Luma calendars and sessions: content/events.ts and lib/events.ts.

  // Stripe Payment Links live in lib/payments.ts.
  // TODO(Tyler): legal business entity name (e.g. "First Offer Academy LLC").
  // Empty = the privacy policy and terms say "First Offer Academy" only.
  legalEntityName: "",

  // Every outside service that touches personal data. The privacy policy
  // lists exactly these, so keep it accurate when a tool is added or dropped.
  serviceProviders: [
    { name: "Vercel", purpose: "Website hosting and cookieless, aggregate site analytics", url: "https://vercel.com/legal/privacy-policy" },
    { name: "Supabase", purpose: "Database that stores form submissions (applications, contact messages, subscribers)", url: "https://supabase.com/privacy" },
    { name: "Stripe", purpose: "Payment processing for deposits and tuition", url: "https://stripe.com/privacy" },
    { name: "Calendly", purpose: "Scheduling calls", url: "https://calendly.com/privacy" },
    { name: "Resend", purpose: "Sending confirmation and program emails", url: "https://resend.com/legal/privacy-policy" },
    { name: "YouTube and Vimeo", purpose: "Embedded videos (loaded in privacy-enhanced mode; they only collect data when you play a video)", url: "https://policies.google.com/privacy" },
  ],

  // TODO: real inbox on the domain.
  email: "hello@firstofferacademy.com",
  // Social profile URLs live in content/social.ts.
  // /zh (Mandarin parent page) stays noindex, out of the nav, and out of the
  // sitemap until a native speaker has reviewed content/zh.ts.
  zhReviewed: false,
  // Link to a public review platform (Google, etc.). Stays hidden in the
  // header until real reviews exist.
  reviewsUrl: "",



  // TODO: fill in. Empty strings render as "To be announced".
  format: "", // TODO(Tyler): [[FORMAT]], e.g. "Online, live sessions on Zoom"
  weeklyHours: "", // e.g. "6–8"
  // TODO(Tyler): [[OUTREACH_HOURS]], e.g. "3–4". Empty = the FAQ says outreach time
  // "will be confirmed before the cohort starts".
  outreachHours: "",
  applicationDeadline: "",
  // Founding cohort refund terms. /refunds, /pricing, the FAQ, and the deposit
  // button all read these. Changing them changes a written promise to families.
  refundTerms: `The ${deposit} deposit is fully refundable through ${depositRefundDeadline}. After that, it applies to tuition, and the ${balance} balance is due before Week 1.`,
  depositRefundDeadline,
  withdrawalPolicy: "Withdraw before Week 3 for a prorated refund of unused weeks. No refunds after Week 3. If we cancel the cohort, every payment is refunded in full.",
};

// The line that sits next to every deposit button.
export const depositRefundLine = () =>
  `${site.cohort.deposit} deposit holds your seat, fully refundable through ${site.depositRefundDeadline}.`;

// "A $1,000 deposit, refundable until December 15, 2026, holds a seat."
// Used wherever a page mentions the deposit, so no page calls it refundable
// without the deadline.
export const depositLine = () =>
  site.depositRefundDeadline
    ? `A ${site.cohort.deposit} deposit, fully refundable through ${site.depositRefundDeadline}, holds a seat.`
    : `A ${site.cohort.deposit} deposit holds a seat.`;

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
