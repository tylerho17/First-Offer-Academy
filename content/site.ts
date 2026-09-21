// Site-wide settings. Every outbound link on the site comes from here.

export const site = {
  name: "First Offer Academy",
  tagline: "Build the skills. Be that candidate. Get the offer.",
  domain: "firstofferacademy.com",

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
    deposit: "$1,000",
  },

  // TODO: replace with a dedicated "Parent call" event link once created.
  calendlyUrl: "https://calendly.com/ctylerho714",
  // TODO: Stripe payment link for the $1,000 refundable deposit.
  depositUrl: "",
  // TODO: where applications go (Supabase edge function, Tally, Formspree...).
  // Empty = the form shows a "not connected yet" notice instead of submitting.
  applyEndpoint: "",
  // TODO(Tyler): legal business entity name (e.g. "First Offer Academy LLC").
  // Empty = the privacy policy and terms say "First Offer Academy" only.
  legalEntityName: "",
  city: "Irvine, California",

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
  // TODO: social profile URLs. Empty ones don't render; the footer tile grid
  // hides entirely while all are empty.
  socials: {
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    facebook: "",
    reddit: "",
    spotify: "",
    podcast: "", // Apple Podcasts or any podcast feed page
  },
  // Link to a public review platform (Google, etc.). Stays hidden in the
  // header until real reviews exist.
  reviewsUrl: "",
  // TODO: newsletter signup endpoint (e.g. beehiiv). Empty = friendly "not connected" notice.
  newsletterEndpoint: "",


  // TODO: fill in. Empty strings render as "To be announced".
  format: "", // e.g. "In person in Irvine, Tuesdays 6–7:30pm"
  weeklyHours: "", // e.g. "6–8"
  applicationDeadline: "",
  refundTerms: "", // e.g. "Fully refundable until December 15, 2026."
};
