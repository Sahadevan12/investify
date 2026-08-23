import Link from "next/link";
import { SERVICES } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Beyond Investing"
          title="Additional Services Which We Offer"
          description="When it comes to family, health, and planning for the future, it is common to feel uncertain about what to do next. We are here to provide you with proper guidance that feels personal, practical, and from a good heart."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-[20px] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover"
            >
              <span className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-navy text-white">
                <Icon name={s.icon} className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="mb-3 text-[20px] font-semibold text-navy">{s.title}</h3>
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-body">{s.summary}</p>
              <span className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-green-dark">
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
