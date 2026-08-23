import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import ContactPageForm from "@/components/contact/ContactPageForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Investify Prism for NRI investment, insurance, taxation and inheritance planning guidance.",
};

const CARDS = [
  {
    icon: "Phone",
    title: "Call Us",
    lines: SITE.phone,
    href: `tel:${SITE.phoneHref}`,
  },
  {
    icon: "Mail",
    title: "Email Us",
    lines: [SITE.email],
    href: `mailto:${SITE.email}`,
  },
  {
    icon: "MapPin",
    title: "Visit Us",
    lines: [SITE.address],
    href: SITE.mapsUrl,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Investment Goals"
        description="Whether you're just starting out or optimising an existing portfolio, our NRI desk is ready to help — wherever you are."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CARDS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.title === "Visit Us" ? "_blank" : undefined}
                rel={c.title === "Visit Us" ? "noopener noreferrer" : undefined}
                className="group rounded-[20px] border border-border p-7 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-green/10 text-green-dark">
                  <Icon name={c.icon} className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mb-2 text-[18px] font-semibold text-navy">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-[15.5px] leading-relaxed text-body">
                    {l}
                  </p>
                ))}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-3">
              <h2 className="mb-6 text-[22px] font-semibold text-navy">Send Us a Message</h2>
              <ContactPageForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-[22px] font-semibold text-navy">Find Us</h2>
              <div className="overflow-hidden rounded-[20px] border border-border">
                <iframe
                  title="Investify Prism office location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                  width="100%"
                  height="320"
                  loading="lazy"
                  className="border-0"
                />
              </div>
              <div className="mt-6 rounded-[20px] bg-surface p-6">
                <h3 className="mb-3 text-[16.5px] font-semibold text-navy">Support Hours</h3>
                <ul className="space-y-2 text-[15px] text-body">
                  <li className="flex justify-between">
                    <span>Monday &ndash; Friday</span>
                    <span>7:00 AM &ndash; 11:00 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM &ndash; 6:00 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Email support only</span>
                  </li>
                </ul>
                <p className="mt-4 text-[14px] text-body">
                  Extended hours are structured to overlap with major NRI time zones across the
                  Gulf, Europe, North America and APAC.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
