// Every Stripe Payment Link on the site. Pages and components import from
// here; never paste a Stripe URL anywhere else. Links render only through
// components/PayButton.tsx, which also fires the analytics event.
//
// The deposit link's Stripe success URL should be
// https://firstofferacademy.com/apply?deposit=1 (set in the Stripe dashboard).

export const payments = {
  deposit: "https://buy.stripe.com/4gM9ALgTDgXd6JQbpT6g802", // $1,000
  full: "https://buy.stripe.com/aFa14f0UF6iz1pw9hL6g803", // $5,000

  // No balance link: after the deposit, the remaining balance is sent as a
  // separate Stripe Invoice.
};
