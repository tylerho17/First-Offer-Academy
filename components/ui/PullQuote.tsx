// Blockquote set large between sections. `cite` is optional.
export default function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <figure className="ui-pullquote">
      <blockquote>{children}</blockquote>
      {cite && <figcaption>{cite}</figcaption>}
    </figure>
  );
}
