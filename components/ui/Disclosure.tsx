// Accordion / disclosure on native <details>: keyboard (Enter/Space) and
// screen readers work without script. Closed by default.
export default function Disclosure({ summary, children, open = false, className = "" }: { summary: React.ReactNode; children: React.ReactNode; open?: boolean; className?: string }) {
  return (
    <details className={`ui-disclosure ${className}`.trim()} open={open || undefined}>
      <summary className="ui-disclosure-summary">
        <span>{summary}</span>
        <span className="ui-disclosure-icon" aria-hidden="true" />
      </summary>
      <div className="ui-disclosure-body">{children}</div>
    </details>
  );
}
