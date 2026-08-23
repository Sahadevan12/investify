import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "KYC",
  description: "Complete your NRI KYC documentation with Investify Prism.",
};

const STEPS = [
  {
    title: "Submit Basic Details",
    description: "Share your PAN, overseas address and passport details through our secure form.",
  },
  {
    title: "Upload Documents",
    description: "PAN card, passport, overseas address proof and a passport-size photograph.",
  },
  {
    title: "Video KYC",
    description: "A short video verification call, scheduled at a time that suits your time zone.",
  },
  {
    title: "Account Activation",
    description: "Once verified, your demat, trading and investment accounts go live within days.",
  },
];

export default function KycPage() {
  return (
    <>
      <PageHero
        eyebrow="Onboarding"
        title="Complete Your KYC From Anywhere"
        description="Indian KYC regulations require every investor to be verified. Here's exactly what the process looks like for NRIs."
        crumbs={[{ label: "Home", href: "/" }, { label: "KYC" }]}
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-[20px] border border-border p-6">
                <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-navy text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-[17px] font-semibold text-navy">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[24px] bg-surface p-8 text-center sm:p-10">
            <h2 className="mb-3 text-[22px] font-semibold text-navy">
              Documents You&rsquo;ll Need
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-[15.5px] leading-relaxed text-body">
              PAN card, valid passport, overseas address proof (utility bill or bank statement),
              a recent passport-size photograph, and your NRE/NRO bank account details.
            </p>
            <div className="flex justify-center">
              <Button href="/contact-us">Start My KYC</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
