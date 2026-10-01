import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, OFFICES, SITE } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SocialIcon from "@/components/ui/SocialIcon";
import Container from "@/components/ui/Container";

const socials = [
  ["Facebook", SITE.social.facebook],
  ["Instagram", SITE.social.instagram],
  ["Linkedin", SITE.social.linkedin],
  ["Whatsapp", SITE.social.whatsapp],
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/70">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #fff 0, transparent 45%), radial-gradient(circle at 85% 80%, #fff 0, transparent 40%)",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-blue/20 blur-3xl" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="mb-4 inline-block rounded-xl bg-white p-2">
              <Image
                src="/brand/investify-prism-logo-v2.jpeg"
                alt={`${SITE.name} Logo`}
                width={305}
                height={100}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-[16px] font-medium leading-relaxed text-white">
              Building a clearer path towards long-term wealth creation.
            </p>
            <p className="mb-5 mt-2 max-w-xs text-[15px] leading-relaxed text-white/70">
              Investment solutions and relationship-led support for HNIs, affluent investors,
              business owners, NRIs and individuals seeking structured investment opportunities.
            </p>
            <ul className="flex items-center gap-2.5">
              {socials.map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${name === "Whatsapp" ? "WhatsApp" : name}`}
                    className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-green"
                  >
                    <SocialIcon name={name} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[19px] font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[16px] text-white/70 transition-colors hover:text-green"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[19px] font-semibold text-white">Policies &amp; Information</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.policies.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[16px] text-white/70 transition-colors hover:text-green"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[19px] font-semibold text-white">Contact</h3>
            <div className="mb-4">
              <p className="text-[16px] font-semibold text-white">Kishore Devaraj</p>
              <p className="text-[14px] text-white/60">
                Authorised Person (AP) &ndash; IIFL Capital Services Limited
              </p>
            </div>
            <ul className="space-y-4 text-[16px]">
              <li className="flex gap-3">
                <Icon name="Phone" className="mt-0.5 size-4 shrink-0 text-green" />
                <a href={`tel:${SITE.phoneHref}`} className="text-white/70 hover:text-green">
                  {SITE.phone.join(" / ")}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="Mail" className="mt-0.5 size-4 shrink-0 text-green" />
                <a href={`mailto:${SITE.email}`} className="text-white/70 hover:text-green">
                  {SITE.email}
                </a>
              </li>
              {OFFICES.filter((o) => o.city === "Bengaluru").map((o) => (
                <li key={o.city} className="flex gap-3">
                  <Icon name="MapPin" className="mt-0.5 size-4 shrink-0 text-green" />
                  <div>
                    <p className="font-semibold text-white">{o.city}</p>
                    <a
                      href={o.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-green"
                    >
                      {o.address}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="py-6 text-[13px] leading-relaxed text-white/50">
          <p className="mb-3 max-w-4xl">
            Investments are subject to market risks and applicable eligibility, regulatory
            requirements and terms. Please read all relevant documents and disclosures carefully
            before investing.
          </p>
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
