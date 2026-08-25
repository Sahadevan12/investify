import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SocialIcon from "@/components/ui/SocialIcon";
import Container from "@/components/ui/Container";

const socials = [
  ["Facebook", SITE.social.facebook],
  ["Twitter", SITE.social.twitter],
  ["Instagram", SITE.social.instagram],
  ["Linkedin", SITE.social.linkedin],
  ["Youtube", SITE.social.youtube],
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
            <p className="mb-5 max-w-xs text-[16px] leading-relaxed text-white/70">
              Bringing India&rsquo;s investment opportunities closer to NRIs, wherever life has taken you.
            </p>
            <ul className="flex items-center gap-2.5">
              {socials.map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${name}`}
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
            <h3 className="mb-5 text-[19px] font-semibold text-white">Policies</h3>
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
              <li className="flex gap-3">
                <Icon name="MapPin" className="mt-0.5 size-4 shrink-0 text-green" />
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-green"
                >
                  {SITE.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-center text-[14px] text-white/50 sm:flex-row sm:text-left">
          <p>
            Copyright &copy; {new Date().getFullYear()} {SITE.legalName}, All rights reserved.
          </p>
          <p>Reproduction of any material is prohibited without prior written consent.</p>
        </Container>
      </div>
    </footer>
  );
}
