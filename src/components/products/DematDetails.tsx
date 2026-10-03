import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";

const WHY = [
  {
    icon: "HeartHandshake",
    title: "Relationship-led onboarding",
    description:
      "A dedicated point of contact guides you through account opening and documentation, so the process stays clear from the very first conversation.",
  },
  {
    icon: "PieChart",
    title: "One account, many opportunities",
    description:
      "Use your account to access equities, derivatives, mutual funds, IPOs, bonds and other eligible solutions, subject to applicable eligibility and regulations.",
  },
  {
    icon: "ShieldCheck",
    title: "IIFL Capital platform, Investify Prism support",
    description:
      "Your account runs on the IIFL Capital platform, while Investify Prism, an Authorised Person associated with IIFL Capital Services Limited, provides relationship and onboarding support.",
  },
  {
    icon: "BarChart3",
    title: "Portfolio perspective",
    description:
      "Structured discussions help you review your holdings against your goals and decide what you may want to add.",
  },
];

const STEPS = [
  {
    title: "Talk to Investify Prism",
    description:
      "Tell us about your goals and the kind of investments you want to explore, whether you are in India or abroad.",
  },
  {
    title: "Complete your documents",
    description:
      "We help you understand the KYC and account documents needed for your profile and walk you through the account-opening process.",
  },
  {
    title: "Get your account activated",
    description:
      "Once your application is verified and approved, your demat and trading account is activated.",
  },
  {
    title: "Invest and review",
    description:
      "Start investing, and review your holdings and goals regularly with your relationship contact.",
  },
];

const USES = [
  "Equities on NSE and BSE",
  "Equity derivatives",
  "Mutual funds & SIPs",
  "IPOs",
  "Bonds & NCDs",
  "Fixed deposits",
  "Commodities & currency",
  "PMS & AIF (subject to eligibility)",
];

export default function DematDetails() {
  return (
    <>
      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Why Investify Prism
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Open Your Demat &amp; Trading Account With Confidence
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            How To Get Started
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Four Simple Steps to Your Account
          </h2>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="rounded-3xl bg-navy p-8 text-white sm:p-12">
            <h2 className="text-[26px] font-semibold leading-[1.25] text-white sm:text-[32px]">
              What You Can Do With Your Account
            </h2>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-white/70">
              Your account is the base for building a diversified portfolio across the solutions
              Investify Prism offers.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {USES.map((u) => (
                <li
                  key={u}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[14px] font-medium"
                >
                  {u}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={SITE.loginUrl} external size="lg">
                Open Your Investment Account
              </Button>
            </div>
            <p className="mt-6 text-[12px] leading-relaxed text-white/50">
              Account opening, product availability and charges are subject to the terms of IIFL
              Capital Services Limited and applicable regulations.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
