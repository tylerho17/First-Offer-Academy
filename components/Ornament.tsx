// Small decorative mark above section headings: sage, navy, sage dots.
// Sage dots carry a thin navy ring so they never float alone on mist.
export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <span className={`ornament ${className}`} aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}
