// Call-to-action banner: heading, one line of body copy, and one action (pass
// the existing button, e.g. <CallLink />, as `action`).
export default function CTABanner({ title, body, action }: { title: string; body?: string; action: React.ReactNode }) {
  return (
    <div className="card ui-cta-banner">
      <div>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>
      <div className="ui-cta-action">{action}</div>
    </div>
  );
}
