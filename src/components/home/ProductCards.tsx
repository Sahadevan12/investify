import Link from "next/link";
import { PRODUCTS } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
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
          eyebrow="Products"
          title="All Your Wealth Solutions in One Place"
          description="A single place to manage and grow your investments with professional support every step of the way. We offer some of the most reliable NRI investment options in India so you can build long-term wealth without complication."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group relative flex flex-col rounded-[20px] border border-black/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover"
            >
              <span
                className={`mb-6 flex size-14 items-center justify-center rounded-2xl ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
              >
                <Icon name={p.icon} className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="mb-3 text-[20px] font-semibold text-navy">
                {p.shortTitle}
              </h3>
              <p className="mb-6 flex-1 text-[16px] leading-relaxed text-body">
                {p.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-[15.5px] font-semibold text-green-dark">
                Read More
                <Icon
                  name="ArrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
