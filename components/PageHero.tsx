export default function PageHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}
