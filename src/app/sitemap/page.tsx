import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { PRODUCTS, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = { title: "Sitemap" };

const GROUPS = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Products",
    links: PRODUCTS.map((p) => ({ label: p.shortTitle, href: `/products/${p.slug}` })),
  },
  {
    title: "Services",
    links: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: "Knowledge Center",
    links: [
      { label: "Calculators", href: "/knowledge-center/calculators" },
      { label: "Blog", href: "/knowledge-center/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "KYC", href: "/kyc" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Regulators", href: "/regulators" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        title="Sitemap"
        description="Every page on the Investify Prism website, in one place."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
      />
      <section className="section-pad bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h2 className="mb-4 text-[19px] font-semibold text-navy">{g.title}</h2>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[15px] text-body transition-colors hover:text-green-dark"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
