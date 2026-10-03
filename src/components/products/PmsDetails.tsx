import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";

const STATS = [
  { icon: "Wallet", value: "₹50 Lakh", label: "SEBI minimum investment" },
  { icon: "PieChart", value: "Direct", label: "Stocks held in your own demat" },
  { icon: "UserCheck", value: "1:1", label: "Dedicated relationship manager" },
  { icon: "BarChart3", value: "Daily", label: "Portfolio tracking" },
];

const WHY = [
  {
    icon: "Target",
    title: "Tailored portfolios",
    description:
      "A portfolio built around your goals, risk profile and time horizon rather than a one-size-fits-all strategy.",
  },
  {
    icon: "UserCheck",
    title: "Professional management",
    description:
      "Portfolio managers run the strategy full time and take allocation decisions on your behalf.",
  },
  {
    icon: "ShieldCheck",
    title: "Transparent ownership",
    description:
      "Securities are held in your own demat account, giving you visibility into every holding and transaction.",
  },
];

const CATEGORIES = [
  "Large Cap",
  "Mid Cap",
  "Small Cap",
  "Micro Cap",
  "Flexi Cap",
  "Multi Cap",
  "Large & Mid Cap",
  "Mid & Small Cap",
  "Multi Asset",
];

const COMPARE_ROWS = [
  ["Ownership", "Securities held in your own demat account", "Units of a pooled scheme"],
  ["Portfolio", "Customised around your goals", "Same strategy for every investor"],
  ["Minimum investment", "₹50 lakh, as mandated by SEBI", "Can start with much smaller amounts"],
  ["Visibility", "Holding-level view of your portfolio", "Periodic scheme disclosures"],
  ["Suited to", "HNI and long-horizon investors", "A broad range of investors"],
];

const CHOOSE = [
  "Track record and consistency of the strategy over time",
  "Investment philosophy and how the portfolio is built",
  "Risk management approach",
  "Fee structure, including any performance-linked fee",
  "Transparency and quality of reporting",
  "SEBI registration status of the portfolio manager",
];

export function PmsStats() {
  return (
    <section className="border-b border-border bg-white py-10 sm:py-12">
      <Container>
        <div className="text-center">
          <p className="mx-auto max-w-xl text-[16px] leading-relaxed text-body sm:text-[18px]">
            Explore, compare, analyse and invest in PMS and AIF solutions
          </p>
          <p className="mt-1 text-[20px] font-semibold tracking-wide text-navy sm:text-[22px]">
            All in one place
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 border-t border-border pt-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-4 px-3 py-4 sm:px-6 ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              } ${i % 2 === 1 ? "border-l border-border lg:border-l" : ""}`}
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-green/20 bg-green/10 text-green-dark">
                <Icon name={s.icon} className="size-6" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[20px] font-bold leading-tight text-navy sm:text-[22px]">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[13px] font-medium leading-snug text-body sm:text-[14px]">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function PmsInfo() {
  return (
    <>
      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Why PMS
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Why Consider Portfolio Management Services
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHY.map((w) => (
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
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            PMS Strategies
          </span>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Types of PMS Strategies
          </h2>
          <p className="mb-8 max-w-2xl text-[16px] leading-relaxed text-body">
            PMS strategies are usually grouped by the part of the market they focus on. Alternative
            Investment Funds (AIFs) are classed as Category I, II and III, each with its own
            structure and eligibility rules.
          </p>
          <ul className="flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-[15px] font-medium text-navy"
              >
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            PMS vs Mutual Funds
          </h2>
          <p className="mb-8 max-w-2xl text-[16px] leading-relaxed text-body">
            Neither is better for everyone. The right choice depends on your goals, risk appetite
            and the amount you want to invest.
          </p>
          <div className="overflow-x-auto rounded-3xl bg-white shadow-card">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-navy text-[13px] font-semibold uppercase tracking-wide text-white">
                  <th className="px-6 py-4"> </th>
                  <th className="px-6 py-4">PMS</th>
                  <th className="px-6 py-4">Mutual funds</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-border last:border-0">
                    <td className="px-6 py-4 text-[15px] font-semibold text-navy">{k}</td>
                    <td className="px-6 py-4 text-[15px] text-body">{a}</td>
                    <td className="px-6 py-4 text-[15px] text-body">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                <span className="size-1.5 rounded-full bg-current" />
                Choosing a PMS
              </span>
              <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
                How to Choose the Right PMS
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                We help you review these points together, so that the strategy you select fits your
                goals, risk tolerance and investment horizon.
              </p>
              <div className="mt-7">
                <Button href={SITE.bookingUrl} external size="lg">
                  Talk to Our Team
                </Button>
              </div>
            </div>
            <ul className="space-y-3">
              {CHOOSE.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-2xl bg-surface p-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                    <Icon name="Check" className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-body">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-[13px] italic leading-relaxed text-body">
            PMS investments are market-linked and returns are not guaranteed. Past performance is
            not indicative of future results. Please read all disclosure documents carefully before
            investing.
          </p>
        </Container>
      </section>
    </>
  );
}
