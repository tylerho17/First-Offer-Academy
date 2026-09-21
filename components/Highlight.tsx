// Soft sage underline highlight behind navy text. Use at most once per page.
export default function Highlight({ children }: { children: React.ReactNode }) {
  return <mark className="highlight">{children}</mark>;
}
