import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import SipCalculator from "@/components/calculators/SipCalculator";

export const metadata: Metadata = {
  title: "Financial Calculators",
  description:
    "Plan your NRI investments with free SIP, lumpsum and retirement calculators from Investify Prism.",
};

const MORE_TOOLS = [
  { icon: "PieChart", title: "Lumpsum Calculator", description: "Project the future value of a one-time investment." },
  { icon: "ShieldCheck", title: "NPS Calculator", description: "Estimate your retirement corpus and monthly pension." },
  { icon: "Receipt", title: "Tax Estimator", description: "Get a quick estimate of TDS on your NRI investment income." },
];

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Financial Calculators"
        description="Model your goals before you commit. Start with our SIP calculator below."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge Center" },
          { label: "Calculators" },
        ]}
      />

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="SIP Calculator"
            title="Estimate Your Mutual Fund SIP Returns"
            description="Adjust the sliders to see how your monthly investment could grow over time."
          />
          <div className="mt-12">
            <SipCalculator />
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeading eyebrow="Coming Soon" title="More Planning Tools" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {MORE_TOOLS.map((t) => (
              <div key={t.title} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-navy/10 text-navy">
                  <Icon name={t.icon} className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2.5 text-[19px] font-semibold text-navy">{t.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
