import NewsletterForm from "./NewsletterForm";

// The newsletter row that sits above the footer on every page.
export default function NewsletterBand() {
  return (
    <section className="nl-band" aria-labelledby="nl-title">
      <div className="wrap">
        <div className="card nl-card">
          <div className="nl-copy">
            <h2 id="nl-title">The First Offer Newsletter</h2>
            <p>Recruiting timelines, outreach templates, and interview tips for students and parents.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
