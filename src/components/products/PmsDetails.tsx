import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";
import FactStrip from "@/components/products/FactStrip";

const STATS = [
  { icon: "Wallet", value: "₹50 Lakh", label: "SEBI minimum investment for PMS" },
  { icon: "BarChart3", value: "₹1 Crore", label: "Typical SEBI minimum for AIFs" },
  { icon: "PieChart", value: "Direct", label: "PMS stocks held in your own demat" },
  { icon: "Target", value: "Cat I · II · III", label: "Categories of AIFs" },
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
  [
    "Structure",
    "Individual portfolio managed for you",
    "Pooled fund set up under SEBI AIF rules",
    "Pooled scheme open to all investors",
  ],
  [
    "Ownership",
    "Securities held in your own demat account",
    "Units of the fund",
    "Units of the scheme",
  ],
  [
    "Minimum investment",
    "₹50 lakh, as mandated by SEBI",
    "Typically ₹1 crore, as prescribed by SEBI",
    "Can start with much smaller amounts",
  ],
  [
    "Strategy",
    "Customised around your goals",
    "Defined fund strategy, such as private equity, debt or hedge",
    "Same strategy for every investor",
  ],
  [
    "Liquidity",
    "Subject to the portfolio's terms and any exit charges",
    "Often closed-ended with a fixed tenure; check lock-in terms",
    "Generally open-ended with regular redemption",
  ],
  [
    "Suited to",
    "HNI and long-horizon investors",
    "Eligible, experienced HNI investors",
    "A broad range of investors",
  ],
];

const AIF_CATEGORIES = [
  {
    icon: "Rocket",
    title: "Category I AIFs",
    description:
      "Invest in start-ups, early-stage ventures, SMEs, infrastructure and other sectors seen as socially or economically desirable. Examples include venture capital, angel, SME and infrastructure funds.",
  },
  {
    icon: "PieChart",
    title: "Category II AIFs",
    description:
      "Include private equity and debt funds and funds of funds. They do not use leverage other than to meet day-to-day operational needs, within SEBI limits.",
  },
  {
    icon: "TrendingUp",
    title: "Category III AIFs",
    description:
      "Follow diverse or complex trading strategies, such as hedge-fund style approaches, and may use leverage within the limits set by SEBI.",
  },
];

const AIF_POINTS = [
  {
    title: "Minimum investment",
    description:
      "Typically ₹1 crore per investor as prescribed by SEBI, with limited exceptions.",
  },
  {
    title: "Structure",
    description:
      "A privately pooled fund that invests under a defined strategy. You hold units of the fund.",
  },
  {
    title: "Lock-in and tenure",
    description:
      "Category I and II AIFs are usually closed-ended with a fixed tenure. Category III may be open-ended.",
  },
  {
    title: "Eligibility",
    description:
      "Open to eligible investors, subject to the fund's terms and SEBI rules. The offer document explains the details.",
  },
];

const CHOOSE = [
  "Track record and consistency of the strategy over time",
  "Investment philosophy and how the portfolio is built",
  "Risk management approach",
  "Fee structure, including any performance-linked fee",
  "Transparency and quality of reporting",
  "SEBI registration status of the portfolio manager or fund manager",
  "For AIFs, the lock-in period, tenure and exit terms",
];

export function PmsStats() {
  return (
    <FactStrip
      intro="Explore, compare, analyse and invest in PMS and AIF solutions"
      headline="All in one place"
      facts={STATS}
    />
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
            PMS strategies are usually grouped by the part of the market they focus on.
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
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            AIF
          </span>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Alternative Investment Funds (AIFs)
          </h2>
          <p className="mb-10 max-w-3xl text-[16px] leading-relaxed text-body">
            An Alternative Investment Fund is a privately pooled investment vehicle, registered
            with SEBI, that collects money from investors and invests it under a defined strategy.
            AIFs are meant for experienced, eligible investors and usually have a higher minimum
            investment than mutual funds or PMS.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {AIF_CATEGORIES.map((c) => (
              <div key={c.title} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={c.icon} className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[19px] font-semibold text-navy">{c.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{c.description}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-5 mt-12 text-[20px] font-semibold text-navy">AIFs at a glance</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AIF_POINTS.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-white p-5">
                <p className="mb-1.5 text-[16px] font-semibold text-navy">{a.title}</p>
                <p className="text-[14px] leading-relaxed text-body">{a.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[13px] italic leading-relaxed text-body">
            AIFs are less liquid than mutual funds, can be concentrated in a few investments, and
            carry the risk of loss of capital. Please read the private placement memorandum
            carefully before investing.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            PMS vs AIF vs Mutual Funds
          </h2>
          <p className="mb-8 max-w-2xl text-[16px] leading-relaxed text-body">
            None of these is better for everyone. The right choice depends on your goals, risk
            appetite, the amount you want to invest and how long you can stay invested.
          </p>
          <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-card">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="bg-navy text-[13px] font-semibold uppercase tracking-wide text-white">
                  <th className="px-6 py-4"> </th>
                  <th className="px-6 py-4">PMS</th>
                  <th className="px-6 py-4">AIF</th>
                  <th className="px-6 py-4">Mutual funds</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([k, a, b, c]) => (
                  <tr key={k} className="border-b border-border align-top last:border-0">
                    <td className="px-6 py-4 text-[15px] font-semibold text-navy">{k}</td>
                    <td className="px-6 py-4 text-[15px] text-body">{a}</td>
                    <td className="px-6 py-4 text-[15px] text-body">{b}</td>
                    <td className="px-6 py-4 text-[15px] text-body">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                <span className="size-1.5 rounded-full bg-current" />
                Choosing a PMS or AIF
              </span>
              <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
                How to Choose the Right PMS or AIF
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
                <li key={c} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                    <Icon name="Check" className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-body">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-[13px] italic leading-relaxed text-body">
            PMS and AIF investments are market-linked and returns are not guaranteed. Past
            performance is not indicative of future results. Please read all disclosure documents
            carefully before investing.
          </p>
        </Container>
      </section>
    </>
  );
}
