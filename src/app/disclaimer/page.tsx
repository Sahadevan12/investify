import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="August 1, 2026" crumbLabel="Disclaimer">
      <p>
        The content on this website is provided for general informational purposes only and does
        not constitute investment, tax or legal advice. {SITE.name} is not liable for any
        decisions made solely on the basis of information published here.
      </p>
      <h2>Market Risk</h2>
      <p>
        Investments in securities, mutual funds and related instruments are subject to market
        risk. Past performance is not indicative of future returns. Please read all
        scheme-related documents carefully before investing.
      </p>
      <h2>Regulatory Compliance</h2>
      <p>
        NRI investment activity is subject to FEMA, RBI and Income Tax Act regulations, which may
        change from time to time. Clients are responsible for ensuring their own compliance in
        their country of residence in addition to India.
      </p>
      <h2>No Guarantee</h2>
      <p>
        Illustrations, calculators and projections on this website are estimates only and do not
        guarantee any specific outcome or rate of return.
      </p>
    </LegalPage>
  );
}
