import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FactStrip, { type Fact } from "@/components/products/FactStrip";
import { SITE } from "@/lib/site-data";

const FACTS: Fact[] = [
  { icon: "Wallet", value: "Demat", label: "Account needed to hold allotted shares" },
  { icon: "BarChart3", value: "Price band", label: "Range within which you bid" },
  { icon: "Target", value: "Lot size", label: "Minimum shares per application" },
  { icon: "ShieldCheck", value: "Not guaranteed", label: "Allotment depends on demand" },
];

const STEPS = [
  {
    title: "Company announces the issue",
    description:
      "The company files its offer document and announces the price band, lot size and the dates the issue will be open.",
  },
  {
    title: "Subscription opens",
    description:
      "The issue stays open for a short window, usually a few working days, during which investors can place their bids.",
  },
  {
    title: "You apply",
    description:
      "Place your application through your investment account for the number of lots you wish to bid for, within the price band.",
  },
  {
    title: "Allotment",
    description:
      "Shares are allotted based on demand and the allotment rules. Allotted shares are credited to your demat account, and any unused amount is released.",
  },
  {
    title: "Listing",
    description:
      "The shares list on the stock exchanges, after which they can be bought and sold like other listed shares.",
  },
];

const TYPES = [
  {
    icon: "Rocket",
    title: "Mainboard IPOs",
    description:
      "Larger companies offering shares to the public on the main exchange platforms, usually with wider investor participation.",
  },
  {
    icon: "TrendingUp",
    title: "SME IPOs",
    description:
      "Smaller companies listing on dedicated SME platforms. These often have larger minimum application sizes and different risk characteristics.",
  },
  {
    icon: "PieChart",
    title: "Offer for Sale (OFS)",
    description:
      "Existing shareholders sell part of their holding to the public, so the money goes to the sellers rather than to the company.",
  },
  {
    icon: "ScrollText",
    title: "NCD & bond issues",
    description:
      "Companies raise money by issuing debt instruments that pay interest and repay principal on maturity, subject to the issuer's ability to pay.",
  },
];

const REVIEW = [
  "The company's business, track record and financial position",
  "How the money raised will be used (objects of the issue)",
  "The price band and how it compares with similar listed companies",
  "Risk factors disclosed in the offer document",
  "Lot size, application category and your own eligibility",
  "Whether the investment fits your goals and time horizon",
];

export function IpoStats() {
  return (
    <FactStrip
      intro="Understand, evaluate and apply for IPOs"
      headline="All in one place"
      facts={FACTS}
    />
  );
}

export default function IpoInfo() {
  return (
    <>
      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            How It Works
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            How an IPO Works, Step by Step
          </h2>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-white p-6 shadow-card">
                <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-green/10 text-[18px] font-bold text-green-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-[17px] font-semibold text-navy">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-body">{s.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Types of Offers
          </span>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Types of Public Offers You May Come Across
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-relaxed text-body">
            Not every public issue works the same way. Knowing the type helps you judge the risk
            and what you are actually buying.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TYPES.map((t) => (
              <div key={t.title} className="rounded-3xl border border-border p-7">
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={t.icon} className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[18px] font-semibold text-navy">{t.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                <span className="size-1.5 rounded-full bg-current" />
                Before You Apply
              </span>
              <h2 className="text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
                What to Review Before Applying
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                An IPO is an investment decision, not a lottery ticket. We help you go through
                these points together so that you apply with clarity.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button href={SITE.loginUrl} external size="lg">
                  Open Demat Account
                </Button>
                <Button href={SITE.bookingUrl} external variant="outline" size="lg">
                  Talk to Our Team
                </Button>
              </div>
            </div>
            <ul className="space-y-3">
              {REVIEW.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                    <Icon name="Check" className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-body">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-[13px] italic leading-relaxed text-body">
            Investments in securities are subject to market risks. IPO allotment is not guaranteed
            and listing gains are not assured. Please read the offer document carefully before
            applying.
          </p>
        </Container>
      </section>
    </>
  );
}
