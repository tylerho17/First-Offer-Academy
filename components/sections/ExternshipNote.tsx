// The externship block: applications and coaching, never placement.
// Shown on /pricing and /parents. Sage left border, one accent per screen.
export default function ExternshipNote({ block }: { block: { title: string; body: string } }) {
  return (
    <aside className="ext-note">
      <p><strong>{block.title}</strong> {block.body}</p>
    </aside>
  );
}
