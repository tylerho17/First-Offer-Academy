// Hidden field that people never see or fill; bots usually do. The API
// routes silently discard any submission where it isn't empty.
export default function Honeypot() {
  return (
    <div className="hp" aria-hidden="true">
      <label>
        Leave this field empty
        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
