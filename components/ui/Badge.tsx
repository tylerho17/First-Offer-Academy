// Badge / tag: a short status label. `tone` picks the colors.
export default function Badge({ children, tone = "navy" }: { children: React.ReactNode; tone?: "navy" | "sage" | "outline" }) {
  return <span className={`ui-badge is-${tone}`}>{children}</span>;
}
