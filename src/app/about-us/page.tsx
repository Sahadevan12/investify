import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import LeadForm from "@/components/home/LeadForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Investify Prism helps Non-Resident Indians manage investments, taxation, insurance and inheritance planning in India.",
};

const STATS = [
  { value: "15+", label: "Years serving NRI investors" },
  { value: "28,000+", label: "NRI clients worldwide" },
  { value: "45+", label: "Countries reached" },
  { value: "₹4,200 Cr+", label: "Assets under advisory" },
];

const VALUES = [
  {
    icon: "ShieldCheck",
    title: "Integrity First",
    description:
      "Every recommendation is made with your best interest at heart, never influenced by product commissions alone.",
  },
  {
    icon: "Globe2",
    title: "Built for Distance",
    description:
      "Our processes are designed from the ground up to work smoothly across time zones, currencies and jurisdictions.",
  },
  {
    icon: "UserCheck",
    title: "Genuinely Personal",
    description:
      "You get a dedicated relationship manager who knows your goals, not a rotating call-centre queue.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Wealth Guidance Built Around the NRI Journey"
        description="Investify Prism was founded to close the gap between talented Indians building lives abroad and the investment opportunities waiting for them back home."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] shadow-card">
                <Image
                  src="/images/about/about-team-diverse-office.jpg"
                  alt="Investify Prism advisory team"
                  width={800}
                  height={900}
                  className="h-[420px] w-full object-cover sm:h-[480px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-5 shadow-hover sm:block">
                <p className="text-[28px] font-bold text-navy">15+</p>
                <p className="text-[14px] text-body">Years of NRI-focused advisory</p>
              </div>
            </div>

            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                Our Story
              </span>
              <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
                Started by advisors who understood the NRI gap first-hand
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-body">
                Many of our founding advisors began their careers serving resident Indian
                investors, only to watch NRI clients struggle with paperwork, time-zone
                mismatches and confusing FEMA rules that resident-focused firms weren&rsquo;t built
                to handle.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-body">
                {SITE.name} was built specifically around that gap &mdash; a single relationship
                that covers demat accounts, equity, mutual funds, insurance, taxation and
                inheritance planning, with support structured around your time zone, not ours.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="text-[26px] font-bold text-navy sm:text-[30px]">{s.value}</p>
                    <p className="mt-1 text-[14.5px] text-body">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Principles Behind Every Recommendation"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-[20px] bg-white p-7 shadow-card">
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={v.icon} className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2.5 text-[19px] font-semibold text-navy">{v.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-body">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <LeadForm />
    </>
  );
}
