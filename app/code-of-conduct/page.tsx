import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { codeOfConduct } from "@/content/legal/codeOfConduct";

export const metadata: Metadata = { title: codeOfConduct.title, description: codeOfConduct.description };

export default function CodeOfConductPage() {
  return <LegalPage doc={codeOfConduct} />;
}
