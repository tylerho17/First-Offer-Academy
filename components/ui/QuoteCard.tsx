// A text-only testimonial card (a parent quote without video): an optional
// eyebrow label, the quote in the display serif with curly quotes added here
// (the data stores it without quote marks), and the credit line in the same
// style as video credits ("Tom · Kim's dad"). Content is top-aligned; in a row
// it stretches to the row's height.
export default function QuoteCard({ quote, person, parentOf, label }: { quote: string; person: string; parentOf?: string; label?: string }) {
  return (
    <figure className="card ui-quote-card">
      {label && <span className="eyebrow ui-quote-card-label">{label}</span>}
      <blockquote className="ui-quote-card-quote">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="vt-who">{parentOf ? `${person} · ${parentOf}'s dad` : person}</figcaption>
    </figure>
  );
}
