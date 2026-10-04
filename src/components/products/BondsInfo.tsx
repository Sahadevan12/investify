import { Icon } from "@/components/ui/Icon";
import Container from "@/components/ui/Container";
import FactStrip, { type Fact } from "@/components/products/FactStrip";
import { BOND_QUOTES, BOND_QUOTES_DATE } from "@/lib/bonds-data";

const FACTS: Fact[] = [
  {
    icon: "ScrollText",
    value: `${BOND_QUOTES.length} bonds`,
    label: `Indicative quotes as of ${BOND_QUOTES_DATE}`,
  },
  { icon: "ShieldCheck", value: "AAA to A-", label: "Credit ratings across issuers" },
  { icon: "Receipt", value: "Monthly to annual", label: "Interest payout options" },
  { icon: "Target", value: "2027–2036", label: "Range of maturities" },
];

const WHY = [
  {
    icon: "Receipt",
    title: "Regular interest income",
    description:
      "Many bonds pay interest at set intervals, such as monthly, quarterly or annually, depending on the terms of the issue.",
  },
  {
    icon: "Target",
    title: "Known coupon and maturity",
    description:
      "The coupon rate and maturity date are stated upfront, so you know what the bond promises before you invest, subject to the issuer meeting its obligations.",
  },
  {
    icon: "ShieldCheck",
    title: "Visible credit ratings",
    description:
      "Independent rating agencies assess issuers, giving you a way to compare credit quality across different bonds.",
  },
  {
    icon: "PieChart",
    title: "Portfolio diversification",
    description:
      "Fixed-income holdings can sit alongside equities and mutual funds to help balance the overall portfolio.",
  },
];

const STEPS = [
  {
    title: "Discuss your needs",
    description:
      "Share your goals, preferred tenure and amount, and we shortlist bonds that may suit your profile.",
  },
  {
    title: "Compare the details",
    description:
      "Review coupon, yield, rating, maturity, payout frequency and security for each option side by side.",
  },
  {
    title: "Invest with support",
    description:
      "Complete the documentation and place your order with your relationship contact, then review your holdings periodically.",
  },
];

const COMPARE = [
  {
    title: "Credit rating",
    description:
      "Ratings from agencies such as CRISIL, ICRA, CARE and India Ratings indicate the assessed credit quality of the issuer.",
  },
  {
    title: "Yield and coupon",
    description:
      "The coupon is the stated interest rate, while the yield reflects the effective return at the price you pay.",
  },
  {
    title: "Maturity and repayment",
    description:
      "Check when the bond matures and whether principal is repaid at the end or in instalments.",
  },
  {
    title: "Secured or unsecured",
    description:
      "Secured bonds are backed by assets, while unsecured and sub-debt instruments rank lower and carry different risk.",
  },
  {
    title: "Ticket size",
    description:
      "Each bond has its own minimum or multiple of investment, so check the quantum before you plan your allocation.",
  },
];

export function BondsStats() {
  return (
    <FactStrip
      intro="Explore, compare, analyse and invest in bonds and NCDs"
      headline="All in one place"
      facts={FACTS}
    />
  );
}

export default function BondsInfo() {
  return (
    <>
      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Why Bonds
          </span>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Why Consider Bonds in Your Portfolio
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-relaxed text-body">
            Bonds can add stability, regular income and diversification alongside your other
            investments.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-3xl bg-white p-7 shadow-card">
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={w.icon} className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[18px] font-semibold text-navy">{w.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{w.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] italic leading-relaxed text-body">
            Bonds carry credit, interest-rate and liquidity risk, and returns are not guaranteed.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            How It Works
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Invest in Bonds With Investify Prism in 3 Steps
          </h2>
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-border p-7">
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

      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Compare Smartly
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            What to Look at Before You Invest
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARE.map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-card">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                  <Icon name="Check" className="size-4" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="mb-1.5 text-[17px] font-semibold text-navy">{c.title}</h3>
                  <p className="text-[14px] leading-relaxed text-body">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
