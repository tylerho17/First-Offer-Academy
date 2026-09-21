import { site } from "@/content/site";

const paths: Record<string, React.ReactNode> = {
  instagram: (<><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.3 6.7h.01" /></>),
  linkedin: (<><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5V16M8 7.8h.01M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3s1.9.9 1.9 2.3V16M11.5 10.5V16" /></>),
  tiktok: (<path d="M14 4v10.5a3.5 3.5 0 11-3.5-3.5M14 4c.4 2.3 2 3.8 4.5 4" />),
  youtube: (<><rect x="3" y="6" width="18" height="12" rx="4" /><path d="M10.5 9.5l4 2.5-4 2.5z" /></>),
};

export default function Social() {
  const entries = Object.entries(site.socials).filter(([, url]) => url);
  if (entries.length === 0) return null;
  return (
    <div className="socials">
      {entries.map(([name, url]) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
        </a>
      ))}
    </div>
  );
}
