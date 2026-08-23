import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/site-data";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import LeadForm from "@/components/home/LeadForm";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.title },
        ]}
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-14">
            <div className="lg:col-span-2">
              <p className="text-[16px] leading-relaxed text-body">{service.description}</p>

              <h2 className="mb-5 mt-10 text-[22px] font-semibold text-navy">
                What&rsquo;s Included
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 rounded-2xl bg-surface p-4">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-dark">
                      <Icon name="Check" className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-body">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-[24px] border border-border bg-surface p-7">
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon name={service.icon} className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[18px] font-semibold text-navy">Talk it through</h3>
                <p className="mb-6 text-[14px] leading-relaxed text-body">
                  This is often a sensitive topic. Book a private, no-pressure conversation with
                  our team.
                </p>
                <Button href="/contact-us" className="w-full justify-center">
                  Talk to an Advisor
                </Button>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-body">
                    Other Services
                  </p>
                  <ul className="space-y-2">
                    {others.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[14px] text-navy transition-colors hover:bg-white hover:text-green-dark"
                        >
                          <Icon name={s.icon} className="size-4" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <LeadForm />
    </>
  );
}
