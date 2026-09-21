import { employers, MIN_EMPLOYERS_TO_SHOW } from "@/content/employers";
import { site } from "@/content/site";

export default function LogoMarquee() {
  const shown = employers.filter((e) => e.employerPermission);
  const ready = shown.length >= MIN_EMPLOYERS_TO_SHOW;
  if (!ready && !site.showPlaceholders) return null;

  const items = ready
    ? shown
    : Array.from({ length: 6 }, (_, i) => ({ name: `Employer ${i + 1}`, logo: undefined, placeholder: true }));

  return (
    <section className="marquee-band" aria-label="Where our students have interned">
      <p className="marquee-title">Our students have interned at</p>
      <div className="marquee">
        <div className="marquee-track">
          {[...items, ...items].map((e, i) => (
            <div className={`logo-tile${"placeholder" in e ? " is-placeholder" : ""}`} key={i} aria-hidden={i >= items.length}>
              {e.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={e.logo} alt={e.name} />
              ) : (
                <span>{e.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      {!ready && <p className="marquee-note">Placeholder: add 4+ employers with permission in content/employers.ts</p>}
    </section>
  );
}
