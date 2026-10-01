import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = { title: "Investor Awareness" };

export default function InvestorAwarenessPage() {
  return (
    <LegalPage title="Investor Awareness" updated="August 1, 2026" crumbLabel="Investor Awareness">
      <div className="rounded-2xl border border-gold/30 bg-gold/10 p-5 text-[15px] leading-relaxed text-navy">
        <p className="mb-1 font-semibold">Content Pending Review</p>
        <p>
          Investor Awareness disclosures for Authorised Persons are generally prescribed by SEBI,
          the exchanges and IIFL Capital Services Limited. The placeholder text below must be
          reviewed and replaced with the exact wording approved by IIFL before this page is relied
          upon by clients.
        </p>
      </div>
      <h2>Know Your Risks</h2>
      <p>
        Investments in securities and related instruments are subject to market risk. Investors
        are encouraged to read all scheme-related and product-related documents carefully and to
        understand the risks involved before investing.
      </p>
      <h2>Verify Before You Invest</h2>
      <p>
        Investors are encouraged to verify the registration status of intermediaries, including
        {" "}{SITE.name}&rsquo;s status as an Authorised Person of IIFL Capital Services Limited,
        directly with SEBI or the relevant exchange before transacting.
      </p>
      <h2>Grievance Redressal</h2>
      <p>
        Complaints that remain unresolved through {SITE.name}&rsquo;s or IIFL Capital Services
        Limited&rsquo;s internal grievance process may be escalated to the relevant regulator or
        exchange investor grievance mechanism.
      </p>
    </LegalPage>
  );
}
