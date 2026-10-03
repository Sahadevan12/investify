import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import LeadForm from "@/components/home/LeadForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Investify Prism helps HNI, affluent, business and NRI investors build and manage long-term wealth through our association with IIFL Capital Services Limited.",
};

const POSITIONING = [
  {
    number: "01",
    title: "HNI & Affluent Focus",
    description: "Investment conversations designed around substantial and long-term wealth goals.",
  },
  {
    number: "02",
    title: "Multi-Product Access",
    description:
      "Explore equities, mutual funds, IPOs, bonds/NCDs, PMS, AIFs and other eligible solutions.",
  },
  {
    number: "03",
    title: "Personal Relationship",
    description:
      "A dedicated point of contact for investment discussions, onboarding and ongoing support.",
  },
  {
    number: "04",
    title: "IIFL Capital Association",
    description:
      "Investify Prism operates as an Authorised Person associated with IIFL Capital Services Limited.",
  },
];

const VALUES = [
  {
    icon: "Target",
    title: "Investor First",
    description:
      "We begin by understanding your financial goals, investment horizon, risk preferences and existing portfolio before exploring suitable investment solutions.",
  },
  {
    icon: "ShieldCheck",
    title: "Clarity & Transparency",
    description:
      "We keep investment conversations straightforward, helping you understand products, risks, costs and important terms before making decisions.",
  },
  {
    icon: "UserCheck",
    title: "Personal Relationship",
    description:
      "From onboarding to ongoing support, you have a dedicated relationship point for your investment questions and service requirements.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Investment Solutions Built Around Your Wealth Goals"
        description="Investify Prism works with HNI, affluent, business and individual investors who are looking beyond individual investments and thinking about long-term wealth creation, diversification and financial goals. We help clients explore suitable investment solutions through our association with IIFL Capital Services Limited."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      >
        <Button href={SITE.bookingUrl} external size="lg">
          Talk to an Investment Specialist
        </Button>
      </PageHero>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                Our Story
              </span>
              <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
                Built Around Your Goals. Focused on Long-Term Wealth.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-body">
                {SITE.name} was created to make investing more structured, transparent and
                relationship-driven for individuals, HNI investors, business owners and NRIs
                looking to build and manage wealth over the long term.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-body">
                Our approach begins with understanding your financial goals, investment horizon,
                risk preferences and existing portfolio. From there, we help you explore suitable
                investment solutions across equities, mutual funds, IPOs, fixed-income products
                and other eligible offerings available through our association with IIFL Capital
                Services Limited.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {POSITIONING.map((p) => (
                <div key={p.number} className="rounded-3xl bg-surface p-6">
                  <p className="text-[28px] font-bold text-green-dark">{p.number}</p>
                  <h3 className="mb-2 mt-2 text-[18px] font-semibold text-navy">{p.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Principles Behind How We Work With Investors"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={v.icon} className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2.5 text-[19px] font-semibold text-navy">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <LeadForm />
    </>
  );
}
