import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { refunds } from "@/content/legal/refunds";

export const metadata: Metadata = { title: refunds.title, description: refunds.description };

export default function RefundsPage() {
  return <LegalPage doc={refunds} />;
}
