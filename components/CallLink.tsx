import { site } from "@/content/site";

export default function CallLink({ className = "btn btn-secondary", children = "Book a parent call" }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={site.calendlyUrl} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
