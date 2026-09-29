// Every Stripe Payment Link on the site. Pages and components import from
// here; never paste a Stripe URL anywhere else. Links render only through
// components/PayButton.tsx, which also fires the analytics event.
//
// The deposit link's Stripe success URL should be
// https://firstofferacademy.com/apply?deposit=1 (set in the Stripe dashboard).

export const payments = {
  deposit: "https://buy.stripe.com/4gM9ALgTDgXd6JQbpT6g802", // $1,000
  full: "https://buy.stripe.com/aFa14f0UF6iz1pw9hL6g803", // $5,000
  plan: "https://buy.stripe.com/dRm9AL0UFfT95FM1Pj6g804", // 3 × $1,700

  // Balance links for families who already paid the deposit. Emailed, never
  // shown on the site.
  // TODO(Tyler): [[STRIPE_BALANCE_FULL_URL]] — balance in full, $4,000.
  balanceFull: "",
  // TODO(Tyler): [[STRIPE_BALANCE_PLAN_URL]] — balance plan, 2 × $2,050.
  balancePlan: "",
};

// What's left after the deposit. Stated on /pricing and /refunds.
export const balance = {
  full: "$4,000",
  plan: "2 payments of $2,050",
};
