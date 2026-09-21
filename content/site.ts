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
  // TODO: real inbox on the domain.
  email: "hello@firstofferacademy.com",
  // TODO: social profile URLs. Empty ones don't render.
  socials: {
    instagram: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
  },
  // TODO: newsletter signup endpoint (e.g. beehiiv). Empty = friendly "not connected" notice.
  newsletterEndpoint: "",


  // TODO: fill in. Empty strings render as "To be announced".
  format: "", // e.g. "In person in Irvine, Tuesdays 6–7:30pm"
  weeklyHours: "", // e.g. "6–8"
  applicationDeadline: "",
  refundTerms: "", // e.g. "Fully refundable until December 15, 2026."
};
