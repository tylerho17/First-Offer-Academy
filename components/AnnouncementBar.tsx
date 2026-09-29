import { site } from "@/content/site";
import PayButton from "./PayButton";

export default function AnnouncementBar() {
  const c = site.cohort;
  return (
    <div className="announce">
      <div className="wrap">
        <span>{c.name} starts {c.start} — <strong>{c.seats} seats</strong> —</span>
        <PayButton className="">Reserve a seat</PayButton>
      </div>
    </div>
  );
}
