import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { accessibility } from "@/content/legal/accessibility";

export const metadata: Metadata = { title: accessibility.title, description: accessibility.description };

export default function AccessibilityPage() {
  return <LegalPage doc={accessibility} />;
}
