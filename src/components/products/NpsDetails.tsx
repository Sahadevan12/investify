import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FactStrip, { type Fact } from "@/components/products/FactStrip";
import { SITE } from "@/lib/site-data";

const FACTS: Fact[] = [
  { icon: "ShieldCheck", value: "PFRDA", label: "Regulated pension scheme" },
  { icon: "PieChart", value: "E · C · G · A", label: "Four asset classes to choose from" },
  { icon: "Route", value: "Active & Auto", label: "Two ways to choose your allocation" },
  { icon: "Clock", value: "Tier I", label: "Long-term retirement account" },
];

const STEPS = [
  {
    title: "Open your NPS account",
    description:
      "Complete KYC and register to receive your Permanent Retirement Account Number (PRAN), subject to the eligibility rules that apply to you.",
  },
  {
    title: "Choose how to invest",
    description:
      "Pick a pension fund and decide between Active Choice and Auto Choice, then set how much goes into each asset class.",
  },
  {
    title: "Contribute regularly",
    description:
      "Add money at your own pace over your working years, subject to the minimum contribution rules, so the corpus can grow over time.",
  },
  {
    title: "Draw a pension at retirement",
    description:
      "At exit, part of the corpus is used to buy an annuity for a regular pension and the rest can be withdrawn, as per PFRDA rules.",
  },
];

const ASSETS = [
  {
    code: "E",
    title: "Equity",
    description:
      "Invests mainly in company shares and aims for long-term growth, with higher ups and downs along the way.",
  },
  {
    code: "C",
    title: "Corporate debt",
    description:
      "Invests in bonds issued by companies, generally seeking steadier income than equity with some credit risk.",
  },
  {
    code: "G",
    title: "Government securities",
    description:
      "Invests in bonds issued by the government, usually considered lower risk than corporate debt and equity.",
  },
  {
    code: "A",
    title: "Alternative assets",
    description:
      "A smaller allocation to assets such as REITs and InvITs, available within the limits set by the regulator.",
  },
];

const NRI_POINTS = [
  "Your eligibility and the KYC documents required for your profile",
  "The bank account used for contributions and the rules attached to it",
  "How contributions, withdrawals and exit proceeds are treated for an NRI",
  "Any repatriation rules that apply to money coming out of the scheme",
  "The tax position in India and in your country of residence",
];

export function NpsStats() {
  return (
    <FactStrip
      intro="Understand, plan and invest for retirement through NPS"
      headline="All in one place"
      facts={FACTS}
    />
  );
}

export default function NpsInfo() {
  return (
    <>
      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            How It Works
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            How NPS Works, From First Contribution to Pension
          </h2>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-green/10 text-[19px] font-bold text-green-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-[18px] font-semibold text-navy">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{s.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Asset Classes
          </span>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            The Four Asset Classes in NPS
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-relaxed text-body">
            NPS spreads your contributions across these asset classes. How much goes into each
            depends on the choice you make.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ASSETS.map((a) => (
              <div key={a.code} className="rounded-3xl border border-border p-7">
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-navy text-[20px] font-bold text-white">
                  {a.code}
                </span>
                <h3 className="mb-2 text-[18px] font-semibold text-navy">{a.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Active Choice or Auto Choice?
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-relaxed text-body">
            NPS gives you two ways to decide how your money is invested. Neither is better for
            everyone, so the right one depends on how involved you want to be.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-card">
              <h3 className="mb-3 text-[21px] font-semibold text-navy">Active Choice</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-body">
                You decide how your contributions are split across the asset classes, within the
                limits set by the regulator.
              </p>
              <ul className="space-y-2.5 text-[15px] text-body">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Suits investors who want control over the mix
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  You can review and change the split over time
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-card">
              <h3 className="mb-3 text-[21px] font-semibold text-navy">Auto Choice</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-body">
                A life-cycle option automatically shifts your allocation towards safer assets as
                you get closer to retirement.
              </p>
              <ul className="space-y-2.5 text-[15px] text-body">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Suits investors who prefer a hands-off approach
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  The equity share reduces gradually with age
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                <span className="size-1.5 rounded-full bg-current" />
                For NRIs
              </span>
              <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
                NPS for NRIs: What to Check
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                NRIs can subscribe to NPS subject to applicable eligibility, KYC, banking and
                regulatory requirements. We help you go through these points before you begin.
              </p>
              <div className="mt-7">
                <Button href={SITE.bookingUrl} external size="lg">
                  Talk to Our Team
                </Button>
              </div>
            </div>
            <ul className="space-y-3">
              {NRI_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-2xl bg-surface p-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                    <Icon name="Check" className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-body">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-[13px] italic leading-relaxed text-body">
            NPS is a market-linked scheme and returns are not guaranteed. Rules for contributions,
            withdrawals and taxation are set by the regulator and tax authorities and can change.
            Please read the scheme documents carefully and consult a tax professional.
          </p>
        </Container>
      </section>
    </>
  );
}
