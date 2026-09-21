import { site } from "@/content/site";

// "Connect on LinkedIn" text link to Tyler's profile (content/site.ts).
export default function LinkedInLink({ label = "Connect on LinkedIn" }: { label?: string }) {
  if (!site.founder.linkedin) return null;
  return (
    <a href={site.founder.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M8 10.5V16M8 7.8h.01M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3s1.9.9 1.9 2.3V16M11.5 10.5V16" />
      </svg>
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
