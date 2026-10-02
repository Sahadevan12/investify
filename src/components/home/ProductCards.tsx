import Link from "next/link";
import {
  SOLUTIONS,
  SOLUTION_ROW_LABELS,
  SECONDARY_SOLUTIONS,
} from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const CHIP_COLORS = [
  "bg-green/10 text-green-dark",
  "bg-blue/10 text-blue",
  "bg-cyan/10 text-cyan",
  "bg-teal/10 text-teal",
  "bg-gold/10 text-gold",
  "bg-navy/10 text-navy",
];

export default function ProductCards() {
  return (
    <section id="products" className="section-pad scroll-mt-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Investment Solutions"
          title="Comprehensive Wealth & Investment Solutions"
          description="Explore a range of investment solutions designed to help you build, diversify and manage wealth across different market cycles. From equities and mutual funds to PMS, AIF, fixed income and global investments, Investify Prism brings multiple opportunities together through a relationship-led approach."
        />

        {SOLUTION_ROW_LABELS.map((label, rowIndex) => (
          <div key={label} className={rowIndex === 0 ? "mt-14" : "mt-10"}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-green-dark">
              {label}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SOLUTIONS.slice(rowIndex * 3, rowIndex * 3 + 3).map((s, i) => {
                const chipIndex = rowIndex * 3 + i;
                return (
                  <div
                    key={s.title}
                    className="group flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover"
                  >
                    <span
                      className={`mb-6 flex size-14 items-center justify-center rounded-2xl ${CHIP_COLORS[chipIndex % CHIP_COLORS.length]}`}
                    >
                      <Icon name={s.icon} className="size-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mb-3 text-[22px] font-semibold text-navy">
                      {s.title}
                    </h3>
                    <p className="mb-6 flex-1 text-[16px] leading-relaxed text-body">
                      {s.description}
                    </p>
                    <Link
                      href={s.href ?? "/contact-us"}
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-green-dark"
                    >
                      {s.cta}
                      <Icon
                        name="ArrowRight"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-12 rounded-3xl bg-surface p-7 sm:p-9">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-body/70">
            Also Available Through the IIFL Ecosystem
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SECONDARY_SOLUTIONS.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-2xl bg-white p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <Icon name={s.icon} className="size-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h4 className="mb-1.5 text-[16px] font-semibold text-navy">
                    {s.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-body">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-body/60">
            IIFL Capital&rsquo;s current capital-market offering includes commodities, currencies, US stocks, ETFs and derivatives in addition to its core investment products.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 rounded-3xl bg-navy px-7 py-10 text-center sm:px-12">
          <h3 className="text-[22px] font-semibold text-white sm:text-[26px]">
            Looking for a more personalised investment approach?
          </h3>
          <p className="max-w-xl text-[16px] leading-relaxed text-white/70">
            Speak with Investify Prism to discuss your investment objectives, portfolio and wealth goals.
          </p>
          <Button href="/contact-us" size="lg">
            Discuss Your Wealth Goals
          </Button>
        </div>
      </Container>
    </section>
  );
}
