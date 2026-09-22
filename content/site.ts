// Site-wide settings. Every outbound link on the site comes from here.

const founderLinkedIn = "https://www.linkedin.com/in/tylerho1";
const deposit = "$1,000";
const depositRefundDeadline = "December 15, 2026";

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

  // Pre-launch switch. true = show clearly labeled empty slots (testimonials,
  // employer bar) so you can see where content goes. Set to false before you
  // send the site to parents: empty slots then disappear.
  showPlaceholders: true,

  cohort: {
    name: "Founding cohort",
    start: "January 2027",
    seats: 24,
    sections: "three sections of 8",
    price: "$5,000",
    plan: "3 payments of $1,700",
    deposit,
    depositCents: 100000, // what Stripe Checkout charges for the deposit; keep in sync with `deposit`
  },

  calendlyUrl: "https://calendly.com/tylerch2-building",
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
  format: "", // e.g. "In person, Tuesdays 6–7:30pm"
  weeklyHours: "", // e.g. "6–8"
  applicationDeadline: "",
  // Founding cohort refund terms. /refunds, /pricing, the FAQ, and the deposit
  // button all read these. Changing them changes a written promise to families.
  refundTerms: `The ${deposit} deposit is fully refundable until ${depositRefundDeadline}. After that, it applies to tuition.`,
  depositRefundDeadline,
  withdrawalPolicy: "Withdraw before Week 3 for a prorated refund of unused weeks. No refunds after Week 3. If we cancel the cohort, every payment is refunded in full.",
};

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
