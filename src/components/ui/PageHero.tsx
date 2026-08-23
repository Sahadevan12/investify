import Link from "next/link";
import { Icon } from "./Icon";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-green/15 blur-3xl" />
      <Container className="relative">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-[13.5px] text-white/60">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <Icon name="ChevronRight" className="size-3.5" />}
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
            <span className="size-1.5 rounded-full bg-green" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-2xl text-[30px] font-bold leading-[1.2] text-white sm:text-[38px] lg:text-[44px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/75">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
