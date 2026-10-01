"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { NAV } from "@/lib/site-data";
import { SITE } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SocialIcon from "@/components/ui/SocialIcon";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Topbar */}
      <div className="hidden bg-surface lg:block">
        <Container className="flex h-[45px] items-center justify-between text-[14px] text-body">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE.phoneHref}`}
              className="flex items-center gap-2 hover:text-green"
            >
              <Icon name="Phone" className="size-3.5" />
              {SITE.phone.join(" / ")}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 hover:text-green"
            >
              <Icon name="Mail" className="size-3.5" />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {(
              [
                ["Facebook", SITE.social.facebook],
                ["Instagram", SITE.social.instagram],
                ["Linkedin", SITE.social.linkedin],
                ["Whatsapp", SITE.social.whatsapp],
              ] as const
            ).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name === "Whatsapp" ? "Chat with us on WhatsApp" : `Follow us on ${name}`}
                className="flex size-7 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-green hover:text-white"
              >
                <SocialIcon name={name} className="size-3.5" />
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Main header */}
      <div
        className={clsx(
          "bg-white/95 backdrop-blur transition-shadow duration-300",
          scrolled ? "shadow-[0_4px_20px_rgba(16,38,90,0.08)]" : ""
        )}
      >
        <Container className="flex h-[76px] items-center justify-between lg:h-[88px]">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/brand/investify-prism-logo-v2.jpeg"
              alt={`${SITE.name} Logo`}
              width={305}
              height={100}
              priority
              className="h-14 w-auto object-contain sm:h-[68px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => item.children && setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-[16px] font-medium text-navy transition-colors hover:text-green"
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="ChevronDown"
                      className={clsx(
                        "size-3.5 transition-transform duration-200",
                        openMenu === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-3"
                    >
                      <div className="w-64 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-hover">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] text-navy transition-colors hover:bg-surface hover:text-green"
                          >
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-surface text-green">
                              <Icon name={child.icon} className="size-4" />
                            </span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen(true)}
              className="flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
            >
              <Icon name="Menu" className="size-5" />
            </button>
          </div>
        </Container>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
