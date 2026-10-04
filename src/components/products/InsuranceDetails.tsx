import Image from "next/image";
import {
  FOCUS_PRODUCTS,
  GENERAL_PARTNERS,
  HEALTH_PARTNERS,
  LIFE_PARTNERS,
  PRODUCT_OFFERING,
  type InsurancePartner,
} from "@/lib/insurance-data";
import { Icon } from "@/components/ui/Icon";
import Container from "@/components/ui/Container";
import FactStrip, { type Fact } from "@/components/products/FactStrip";
import LogoMarquee from "@/components/home/LogoMarquee";

const ALL_PARTNERS = [...LIFE_PARTNERS, ...HEALTH_PARTNERS, ...GENERAL_PARTNERS];
const COVER_COUNT = PRODUCT_OFFERING.reduce((n, c) => n + c.items.length, 0);

const FACTS: Fact[] = [
  { icon: "HeartPulse", value: `${LIFE_PARTNERS.length} life insurers`, label: "Life insurance partners" },
  { icon: "ShieldCheck", value: `${HEALTH_PARTNERS.length} health insurers`, label: "Health insurance partners" },
  { icon: "Globe2", value: `${GENERAL_PARTNERS.length}+ general insurers`, label: "Including PSU insurers" },
  { icon: "ScrollText", value: `${COVER_COUNT} covers`, label: "Health, motor, property and business" },
];

export function InsuranceStats() {
  return (
    <FactStrip
      intro="Explore, compare and choose life, health and general insurance"
      headline="All in one place"
      facts={FACTS}
    />
  );
}

export function InsuranceLogos() {
  return (
    <LogoMarquee
      heading="Insurance partners available through Investify Prism"
      logos={ALL_PARTNERS.map((p) => ({ name: p.name, src: p.logo, crop: p.crop, scale: p.scale }))}
      shape="card"
      duration="72s"
    />
  );
}

function PartnerGrid({
  title,
  partners,
  extra,
}: {
  title: string;
  partners: InsurancePartner[];
  extra?: string;
}) {
  return (
    <div>
      <h3 className="mb-5 text-[19px] font-semibold text-navy">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex h-28 items-center justify-center rounded-2xl border border-border bg-white p-4"
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={240}
              height={120}
              className="h-full w-full object-contain"
              style={p.crop ? { clipPath: "inset(16% 0 0 0)" } : undefined}
            />
          </div>
        ))}
        {extra && (
          <div className="flex h-28 items-center justify-center rounded-2xl border border-dashed border-border bg-white p-4 text-center text-[15px] font-semibold text-navy">
            {extra}
          </div>
        )}
      </div>
    </div>
  );
}

export default function InsuranceDetails() {
  return (
    <>
      <section className="section-pad bg-surface">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Life Insurance
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Life Insurance Partners
          </h2>

          <PartnerGrid title="Our life insurance partners" partners={LIFE_PARTNERS} />

          <h3 className="mb-5 mt-14 text-[19px] font-semibold text-navy">Focus products</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FOCUS_PRODUCTS.map((f) => (
              <div key={f.insurer} className="rounded-3xl bg-white p-7 shadow-card">
                <h4 className="mb-4 text-[18px] font-semibold text-navy">{f.insurer}</h4>
                <ul className="space-y-2.5">
                  {f.products.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                        <Icon name="Check" className="size-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
            <span className="size-1.5 rounded-full bg-current" />
            Health &amp; General Insurance
          </span>
          <h2 className="mb-10 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Health &amp; General Insurance Partners
          </h2>

          <PartnerGrid title="Health insurance partners" partners={HEALTH_PARTNERS} />
          <div className="mt-14">
            <PartnerGrid
              title="General and health insurance partners"
              partners={GENERAL_PARTNERS}
              extra="PSU insurers"
            />
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <h2 className="mb-3 text-[28px] font-semibold leading-[1.25] text-navy sm:text-[34px]">
            Health &amp; General Insurance Product Offering
          </h2>
          <p className="mb-10 max-w-2xl text-[16px] leading-relaxed text-body">
            A snapshot of the covers you can explore across personal, motor, property and business
            insurance.
          </p>

          <div className="overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="hidden grid-cols-3 border-b border-border bg-navy px-7 py-4 text-[13px] font-semibold uppercase tracking-wide text-white md:grid">
              <span>Product category</span>
              <span className="col-span-2">Sub product category</span>
            </div>
            {PRODUCT_OFFERING.map((c) => (
              <div
                key={c.category}
                className="grid grid-cols-1 gap-3 border-b border-border px-7 py-6 last:border-0 md:grid-cols-3 md:gap-6"
              >
                <h3 className="text-[17px] font-semibold text-navy">{c.category}</h3>
                <ul className="flex flex-wrap gap-2.5 md:col-span-2">
                  {c.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full bg-surface px-4 py-1.5 text-[14px] text-body"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[13px] italic leading-relaxed text-body">
            Product availability, features, premiums and eligibility are as per the respective
            insurer&rsquo;s policy documents. Please read the policy wording carefully before
            buying.
          </p>
        </Container>
      </section>
    </>
  );
}
