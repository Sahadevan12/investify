import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Regulators" };

const REGULATORS = [
  { name: "Securities and Exchange Board of India (SEBI)", url: "https://www.sebi.gov.in" },
  { name: "Reserve Bank of India (RBI)", url: "https://www.rbi.org.in" },
  { name: "National Stock Exchange of India (NSE)", url: "https://www.nseindia.com" },
  { name: "BSE Limited", url: "https://www.bseindia.com" },
  { name: "Pension Fund Regulatory and Development Authority (PFRDA)", url: "https://www.pfrda.org.in" },
  { name: "Insurance Regulatory and Development Authority of India (IRDAI)", url: "https://www.irdai.gov.in" },
];

export default function RegulatorsPage() {
  return (
    <LegalPage title="Regulators" updated="August 1, 2026" crumbLabel="Regulators">
      <p>
        Our products and services are offered in accordance with guidelines set by the following
        regulatory bodies. Client complaints unresolved by our internal grievance process may be
        escalated to the relevant regulator.
      </p>
      <ul>
        {REGULATORS.map((r) => (
          <li key={r.name}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-dark underline"
            >
              {r.name}
            </a>
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
