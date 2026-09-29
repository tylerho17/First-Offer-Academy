import { payments } from "@/lib/payments";
import { depositRefundLine, site } from "@/content/site";

type Kind = "deposit" | "full" | "plan";

const EVENTS: Record<Kind, string> = { deposit: "deposit_click", full: "pay_full_click", plan: "pay_plan_click" };

// A Stripe Payment Link. The only component that renders one; the analytics
// event rides on data-event (components/AnalyticsEvents.tsx).
export default function PayButton({
  kind = "deposit",
  className = "btn btn-primary",
  children,
}: { kind?: Kind; className?: string; children?: React.ReactNode }) {
  return (
    <a href={payments[kind]} className={className} target="_blank" rel="noopener noreferrer" data-event={EVENTS[kind]}>
      {children ?? `Reserve a seat · ${site.cohort.deposit}`}
    </a>
  );
}

// Sits next to every deposit button.
export function DepositNote({ className = "pay-note" }: { className?: string }) {
  return <p className={className}>{depositRefundLine()}</p>;
}
