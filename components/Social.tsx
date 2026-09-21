import { site } from "@/content/site";

type Network = keyof typeof site.socials;

const labels: Record<Network, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  tiktok: "TikTok",
  facebook: "Facebook",
  reddit: "Reddit",
  spotify: "Spotify",
  podcast: "Podcast",
};

const paths: Record<Network, React.ReactNode> = {
  instagram: (<><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.3 6.7h.01" /></>),
  linkedin: (<><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5V16M8 7.8h.01M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3s1.9.9 1.9 2.3V16M11.5 10.5V16" /></>),
  youtube: (<><rect x="3" y="6" width="18" height="12" rx="4" /><path d="M10.5 9.5l4 2.5-4 2.5z" /></>),
  tiktok: (<path d="M14 4v10.5a3.5 3.5 0 11-3.5-3.5M14 4c.4 2.3 2 3.8 4.5 4" />),
  facebook: (<path d="M14.5 8H16V4.5h-2a4 4 0 00-4 4V11H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9a1 1 0 011-1z" />),
  reddit: (<><ellipse cx="12" cy="14" rx="7.5" ry="5" /><circle cx="18.5" cy="6" r="1.5" /><path d="M12 9l1.2-4.5 5.3 1.5M9.5 13.5h.01M14.5 13.5h.01M9.5 16.3c1.5 1 3.5 1 5 0" /></>),
  spotify: (<><circle cx="12" cy="12" r="8.5" /><path d="M7.5 9.5c3-1 6.5-.7 9 .8M8 12.5c2.5-.7 5.2-.4 7.2.8M8.5 15.3c2-.5 4-.3 5.6.6" /></>),
  podcast: (<><circle cx="12" cy="10" r="2.5" /><path d="M12 14.5V21M7.5 14.5a6 6 0 119 0M5 17a9 9 0 1114 0" /></>),
};

// WSM-style square tiles, 2 rows of 4 on desktop. Only networks with a URL
// render, and the grid hides entirely when none are set.
export default function Social() {
  const entries = (Object.keys(site.socials) as Network[]).filter((n) => site.socials[n]);
  if (entries.length === 0) return null;
  return (
    <ul className="social-grid" aria-label="Social media">
      {entries.map((n) => (
        <li key={n}>
          <a href={site.socials[n]} target="_blank" rel="noopener noreferrer" aria-label={labels[n]}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[n]}</svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
