import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FactStrip, { type Fact } from "@/components/products/FactStrip";
import AmcLogos from "@/components/home/AmcLogos";
import { SITE } from "@/lib/site-data";

const FACTS: Fact[] = [
  { icon: "PieChart", value: "60+ AMCs", label: "Fund houses on the platform" },
  { icon: "Wallet", value: "SIP & Lump sum", label: "Flexible ways to invest" },
  { icon: "Target", value: "Goal-based", label: "Portfolios built around your goals" },
  { icon: "BarChart3", value: "Regular", label: "Portfolio reviews" },
];

const TYPES = [
  {
    icon: "TrendingUp",
    title: "Equity funds",
    description:
      "Invest mainly in company shares and aim for long-term growth, with higher ups and downs along the way.",
  },
  {
    icon: "ScrollText",
    title: "Debt funds",
    description:
      "Invest in bonds and other fixed-income instruments, usually for steadier returns and shorter horizons.",
  },
  {
    icon: "PieChart",
    title: "Hybrid funds",
    description:
      "Combine equity and debt in one fund, so your money is spread across growth and stability.",
  },
  {
    icon: "BarChart3",
    title: "Index funds & ETFs",
    description:
      "Track a market index at a low cost instead of relying on a manager to pick stocks.",
  },
  {
    icon: "Globe2",
    title: "International funds",
    description:
      "Add exposure to global markets, subject to the limits and rules that apply to such funds.",
  },
  {
    icon: "Target",
    title: "Goal-oriented funds",
    description:
      "Funds designed around goals such as retirement or a child's education, with a built-in long-term focus.",
  },
];

const STEPS = [
  {
    title: "Understand your goals",
    description:
      "We start with your goals, time horizon, risk comfort and existing investments.",
  },
  {
    title: "Shortlist suitable funds",
    description:
      "We narrow the choice to funds that fit your profile, comparing category, cost, consistency and risk.",
  },
  {
    title: "Start your SIP or invest a lump sum",
    description:
      "Set up regular SIPs or invest a lump sum, with the paperwork handled alongside you.",
  },
  {
    title: "Review and rebalance",
    description:
      "We revisit your portfolio at regular intervals so it stays in line with your goals as markets and life change.",
  },
];

export function MfStats() {
  return (
    <FactStrip
      intro="Explore, compare, analyse and invest in mutual funds"
      headline="All in one place"
      facts={FACTS}
    />
  );
}

export default function MfInfo() {
  return (
    <>
      <AmcLogos />

      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Fund Categories
          </span>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Types of Mutual Funds You Can Explore
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-relaxed text-body">
            A well-built portfolio usually mixes more than one category. We help you decide the
            right balance for your goals.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TYPES.map((t) => (
              <div key={t.title} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={t.icon} className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[19px] font-semibold text-navy">{t.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            SIP or Lump Sum?
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-relaxed text-body">
            Both are valid ways to invest. The better fit depends on how your money becomes
            available and how you prefer to invest it.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border p-8">
              <h3 className="mb-3 text-[21px] font-semibold text-navy">Systematic Investment Plan (SIP)</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-body">
                Invest a fixed amount at regular intervals, building the habit of disciplined
                investing without trying to time the market.
              </p>
              <ul className="space-y-2.5 text-[15px] text-body">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Suits regular income and long-term goals
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Spreads your purchase cost across market highs and lows
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Can start with a relatively small amount
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border p-8">
              <h3 className="mb-3 text-[21px] font-semibold text-navy">Lump sum</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-body">
                Invest a larger amount in one go, for example from a bonus, business proceeds or
                the sale of an asset.
              </p>
              <ul className="space-y-2.5 text-[15px] text-body">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Suits surplus money that is available today
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Whole amount is exposed to the market from day one
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="mt-1 size-4 shrink-0 text-green-dark" strokeWidth={3} />
                  Often combined with a SIP for balance
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            How We Help
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Four Steps to a Mutual Fund Portfolio That Fits You
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
          <div className="mt-10">
            <Button href={SITE.bookingUrl} external size="lg">
              Talk to Our Team
            </Button>
          </div>
          <p className="mt-8 text-[13px] italic leading-relaxed text-body">
            Mutual fund investments are subject to market risks. Read all scheme related
            documents carefully.
          </p>
        </Container>
      </section>
    </>
  );
}
