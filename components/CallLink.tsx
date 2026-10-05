import { PARENT_CALL_URL } from "@/content/site";

export default function CallLink({ className = "btn btn-secondary", children = "Book a parent call" }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={PARENT_CALL_URL} className={className} target="_blank" rel="noopener noreferrer" data-event="parent_call_click">
      {children}
    </a>
  );
}
