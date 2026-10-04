import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import LeadForm from "@/components/home/LeadForm";
import Link from "next/link";
import { OFFICES, PROCESS_STEPS, SITE } from "@/lib/site-data";

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

const WHO = [
  {
    icon: "Wallet",
    title: "HNI & Affluent Investors",
    description:
      "Structured conversations around substantial, long-term wealth goals and diversification.",
  },
  {
    icon: "BarChart3",
    title: "Business Owners & Entrepreneurs",
    description:
      "Investment discussions that fit around business cash flows and a busy schedule.",
  },
  {
    icon: "Globe2",
    title: "NRI Investors",
    description:
      "Support with onboarding and understanding the eligibility, KYC and regulatory requirements that apply.",
  },
  {
    icon: "UserCheck",
    title: "Salaried Professionals",
    description:
      "Disciplined, goal-based investing through SIPs and long-term planning.",
  },
  {
    icon: "Heart",
    title: "First-Time Investors",
    description:
      "Clear explanations of products, risks and costs before you take your first step.",
  },
];

const OFFER = [
  { icon: "Wallet", title: "Demat & Trading Account", description: "Hold and transact in eligible securities.", href: "/products/demat-account" },
  { icon: "PieChart", title: "Mutual Funds & SIP", description: "Explore funds across categories and goals.", href: "/products/mutual-funds" },
  { icon: "BarChart3", title: "PMS & AIF", description: "Professionally managed and alternative solutions.", href: "/products/portfolio-management-services" },
  { icon: "ScrollText", title: "Bonds, NCDs & Fixed Income", description: "Diversify with debt-oriented opportunities.", href: "/products/bonds-ncds-fixed-income" },
  { icon: "Rocket", title: "IPOs", description: "Explore new public issues you may be eligible for.", href: "/products/ipo" },
  { icon: "ShieldCheck", title: "NPS & Retirement Planning", description: "Build a structured retirement corpus.", href: "/products/nps" },
  { icon: "HeartPulse", title: "Insurance", description: "Life, health and general insurance options.", href: "/products/life-health-insurance" },
  { icon: "TrendingUp", title: "Commodities & Currency", description: "Additional diversification or tactical exposure.", href: "/contact-us" },
];

const REG_LINKS = [
  { label: "Regulatory Information", href: "/regulators" },
  { label: "Investor Awareness", href: "/investor-awareness" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
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
            eyebrow="Who We Work With"
            title="Investment Support for Different Investor Journeys"
            description="Every investor has different goals, responsibilities and time horizons. Our approach adapts to where you are."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHO.map((w) => (
              <div key={w.title} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={w.icon} className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[19px] font-semibold text-navy">{w.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Investment Solutions Under One Relationship"
            description="Explore a range of eligible products through the IIFL Capital platform, with Investify Prism providing relationship and onboarding support."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OFFER.map((o) => (
              <Link
                key={o.title}
                href={o.href}
                className="group flex flex-col rounded-3xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-green/10 text-green-dark">
                  <Icon name={o.icon} className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mb-1.5 text-[17px] font-semibold text-navy">{o.title}</h3>
                <p className="mb-4 flex-1 text-[14px] leading-relaxed text-body">{o.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-green-dark">
                  Learn more
                  <Icon
                    name="ArrowRight"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] italic leading-relaxed text-body">
            Product availability depends on investor eligibility and applicable regulations.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A Structured Approach, From First Conversation to Review"
          />
          <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((p) => (
              <li key={p.step} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-green/10 text-[19px] font-bold text-green-dark">
                  {p.step}
                </span>
                <h3 className="text-[18px] font-semibold text-navy">{p.title}</h3>
                <p className="mb-2 mt-1 text-[14px] font-medium text-green-dark">{p.subtitle}</p>
                <p className="text-[15px] leading-relaxed text-body">{p.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-pad bg-white">
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

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-3xl bg-white p-8 shadow-card sm:p-10">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                Your Point of Contact
              </span>
              <div className="flex items-center gap-4">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-navy text-[22px] font-bold text-white">
                  KD
                </span>
                <div>
                  <h2 className="text-[24px] font-semibold text-navy">Kishore Devaraj</h2>
                  <p className="text-[15px] text-body">
                    Authorised Person (AP) &ndash; IIFL Capital Services Limited
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[16px] leading-relaxed text-body">
                Speak with Kishore Devaraj to discuss your goals and explore the available
                investment options.
              </p>
              <ul className="mt-5 space-y-3 text-[15px] text-body">
                <li className="flex items-center gap-3">
                  <Icon name="Phone" className="size-4 text-green-dark" />
                  <a href={`tel:${SITE.phoneHref}`} className="hover:text-green-dark">
                    {SITE.phone.join(" / ")}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" className="size-4 text-green-dark" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-green-dark">
                    {SITE.email}
                  </a>
                </li>
              </ul>
              <div className="mt-7">
                <Button href={SITE.bookingUrl} external size="lg">
                  Talk to Our Team
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-card sm:p-10">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                Our Association
              </span>
              <h2 className="text-[24px] font-semibold leading-snug text-navy">
                Investify Prism &amp; IIFL Capital Services Limited
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                Investify Prism is an Authorised Person associated with IIFL Capital Services
                Limited. Your demat and trading account, execution and market infrastructure are
                provided through the IIFL Capital platform, while Investify Prism provides
                relationship and onboarding support.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {REG_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex items-center justify-between rounded-xl bg-surface px-4 py-3 text-[14px] font-medium text-navy transition-colors hover:text-green-dark"
                    >
                      {l.label}
                      <Icon name="ArrowUpRight" className="size-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Visit Us"
            title="Our Offices"
            description="Meet us in person, or reach out by phone or email from anywhere."
          />
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {OFFICES.map((o) => (
              <div key={o.city} className="rounded-3xl bg-surface p-7">
                <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-green/10 text-green-dark">
                  <Icon name="MapPin" className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[19px] font-semibold text-navy">{o.city} Office</h3>
                <p className="text-[15px] leading-relaxed text-body">{o.address}</p>
                <a
                  href={o.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-green-dark hover:underline"
                >
                  Open in Maps
                  <Icon name="ArrowUpRight" className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <LeadForm />
    </>
  );
}
