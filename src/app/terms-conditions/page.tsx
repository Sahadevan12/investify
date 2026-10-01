import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="August 1, 2026" crumbLabel="Terms & Conditions">
      <div className="rounded-2xl border border-gold/30 bg-gold/10 p-5 text-[15px] leading-relaxed text-navy">
        <p className="mb-1 font-semibold">Content Pending Review</p>
        <p>
          As an Authorised Person associated with IIFL Capital Services Limited, {SITE.name}&rsquo;s
          Terms &amp; Conditions should reflect the exact wording provided or approved by IIFL
          Capital Services Limited. The placeholder text below must be reviewed and replaced with
          that approved wording before this page is relied upon by clients.
        </p>
      </div>
      <h2>Use of This Website</h2>
      <p>
        This website is made available for general information about the investment solutions
        accessible through {SITE.name} as an Authorised Person of IIFL Capital Services Limited.
        Use of this website does not, by itself, create a client relationship or constitute
        investment advice.
      </p>
      <h2>Eligibility &amp; Regulatory Compliance</h2>
      <p>
        Access to specific products and services referenced on this website is subject to
        applicable eligibility criteria, KYC requirements and the regulatory framework governing
        IIFL Capital Services Limited and its Authorised Persons.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        {SITE.name} and IIFL Capital Services Limited shall not be liable for any loss arising
        from reliance on the general information published on this website in place of
        product-specific documentation and professional advice.
      </p>
    </LegalPage>
  );
}
