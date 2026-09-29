// Site-wide settings. Every outbound link on the site comes from here.

const founderLinkedIn = "https://www.linkedin.com/in/tylerho1";
const deposit = "$1,000";
const depositRefundDeadline = "December 15, 2026";
const installment = "$1,700";

// Students coached to internships in their first year of college, before the
// academy existed. Every page that states the pilot number reads this.
export const PILOT_STUDENTS = 8;
// TODO(Tyler): [[PILOT_LANDED]] — how many pilot students landed an internship
// in their first year. null = the stat doesn't render.
export const PILOT_LANDED: number | null = null;
// TODO(Tyler): [[PILOT_TWO]] — how many landed two. null = doesn't render.
export const PILOT_TWO: number | null = null;

export const site = {
  name: "First Offer Academy",
  tagline: "Build the skills. Be that candidate. Get the offer.",
  domain: "firstofferacademy.com",

  founder: {
    name: "Tyler Ho",
    linkedin: founderLinkedIn,
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

  scholarship: "One founding seat is awarded as a scholarship by application.",

  cohort: {
    name: "Founding cohort",
    start: "January 2027",
    seats: 24,
    sections: "three sections of 8",
    price: "$5,000",
    installment,
    plan: `3 payments of ${installment}`,
    deposit,
  },

  calendlyUrl: "https://calendly.com/tyler-firstofferacademy",

  // Luma event calendars. People subscribe there and get every new date;
  // individual sessions can also be listed in content/events.ts.
  luma: {
    parents: "https://luma.com/parentFOA",
    students: "https://luma.com/firstofferacademy",
  },

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
  // TODO(Tyler): referral reward, e.g. "$250 off tuition for you and your
  // friend". Empty = /refer doesn't mention a reward at all.
  referralReward: "",
  // /zh (Mandarin parent page) stays noindex, out of the nav, and out of the
  // sitemap until a native speaker has reviewed content/zh.ts.
  zhReviewed: false,
  // Link to a public review platform (Google, etc.). Stays hidden in the
  // header until real reviews exist.
  reviewsUrl: "",



  // TODO: fill in. Empty strings render as "To be announced".
  format: "", // TODO(Tyler): [[FORMAT]], e.g. "Online, live sessions on Zoom"
  weeklyHours: "", // e.g. "6–8"
  applicationDeadline: "",
  // Founding cohort refund terms. /refunds, /pricing, the FAQ, and the deposit
  // button all read these. Changing them changes a written promise to families.
  refundTerms: `The ${deposit} deposit is refunded in full if the fit call shows the program isn't a fit, or if you withdraw before ${depositRefundDeadline}. After that, it applies to tuition.`,
  depositRefundDeadline,
  withdrawalPolicy: "Withdraw before Week 3 for a prorated refund of unused weeks. No refunds after Week 3. If we cancel the cohort, every payment is refunded in full.",
};

// The line that sits next to every deposit button.
export const depositRefundLine = () =>
  `Refunded in full if the fit call shows it isn't a fit, or if you withdraw before ${site.depositRefundDeadline}.`;

// "A $1,000 deposit, refundable until December 15, 2026, holds a seat."
// Used wherever a page mentions the deposit, so no page calls it refundable
// without the deadline.
export const depositLine = () =>
  site.depositRefundDeadline
    ? `A ${site.cohort.deposit} deposit, fully refundable until ${site.depositRefundDeadline}, holds a seat.`
    : `A ${site.cohort.deposit} deposit holds a seat.`;

// "7+ internships worked, and offers from many more", or the exact offer
// count once Tyler sets founder.offerCount.
export const founderInternships = () =>
  site.founder.offerCount
    ? `7+ internships worked, and ${site.founder.offerCount} internship offers`
    : "7+ internships worked, and offers from many more";

// Small whole numbers spelled out for running prose ("coached eight
// freshmen"). Falls back to digits past twelve.
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
export const spell = (n: number) => WORDS[n] ?? String(n);
