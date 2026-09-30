import { offerOrRefund } from "@/content/program";

// Cream panel directly under the price band. Terms live in the FAQ entry
// #offer-or-refund.
export default function OfferOrRefund() {
  return (
    <section className="section-tight" aria-labelledby="offer-or-refund-title">
      <div className="wrap">
        <div className="card refund-panel">
          <h3 id="offer-or-refund-title">{offerOrRefund.title}</h3>
          <p>{offerOrRefund.body}</p>
          <p className="refund-link"><a href="#offer-or-refund">See refund terms</a></p>
        </div>
      </div>
    </section>
  );
}
