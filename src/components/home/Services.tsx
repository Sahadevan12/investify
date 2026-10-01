import Link from "next/link";
import { WEALTH_LIFE_PLANNING } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Wealth & Life Planning"
          title="Protect Your Wealth. Plan Your Legacy."
          description="Building wealth is only one part of the journey. Protecting your assets, planning for future goals and creating a clear succession strategy can help you preserve wealth across generations. Investify Prism brings investment and financial planning conversations together around your long-term objectives."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WEALTH_LIFE_PLANNING.map((s) => (
            <Link
              key={s.title}
              href="/contact-us"
              className="group flex flex-col rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover"
            >
              <span className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-navy text-white">
                <Icon name={s.icon} className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="mb-3 text-[20px] font-semibold text-navy">{s.title}</h3>
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-body">{s.description}</p>
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-green-dark">
                Learn More
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
