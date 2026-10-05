import NewsletterForm from "./NewsletterForm";
import { captureConfigured } from "@/lib/capture";

// The newsletter row that sits above the footer on every page. Hidden when
// email capture isn't set up (no Supabase keys), so no visitor ever sees a
// signup form that can't save.
export default function NewsletterBand() {
  if (!captureConfigured()) return null;
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
