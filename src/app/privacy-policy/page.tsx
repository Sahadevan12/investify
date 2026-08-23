import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 1, 2026" crumbLabel="Privacy Policy">
      <p>
        {SITE.legalName} (&ldquo;{SITE.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects
        your privacy. This policy explains what information we collect from visitors and clients,
        how we use it, and the choices available to you.
      </p>
      <h2>Information We Collect</h2>
      <ul>
        <li>Contact details you submit through forms, such as name, email, phone and city.</li>
        <li>KYC and financial information required to open and service investment accounts.</li>
        <li>Usage data such as pages visited and device information, collected via cookies.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to enquiries and provide the products and services you request.</li>
        <li>To meet regulatory, KYC and anti-money-laundering obligations.</li>
        <li>To send updates you have opted in to, such as our e-magazine.</li>
      </ul>
      <h2>Sharing of Information</h2>
      <p>
        We do not sell your personal information. Data is shared only with regulated partners
        (depositories, mutual fund houses, insurers) necessary to execute your instructions, and
        with regulators where legally required.
      </p>
      <h2>Your Choices</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data by writing to{" "}
        <a href={`mailto:${SITE.email}`} className="text-green-dark underline">
          {SITE.email}
        </a>
        . You can unsubscribe from marketing communications at any time using the link in those
        emails.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to our support desk at {SITE.email} or{" "}
        {SITE.phone[0]}.
      </p>
    </LegalPage>
  );
}
