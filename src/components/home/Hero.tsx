"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";

const SLIDES = [
  {
    src: "/images/hero/hero-businessman-cityscape.jpg",
    alt: "Confident NRI professional in a global financial hub",
  },
  {
    src: "/images/hero/hero-nri-traveler-airport.jpg",
    alt: "NRI traveller holding passport and boarding pass at the airport",
  },
  {
    src: "/images/hero/hero-confident-professional-laptop.jpg",
    alt: "NRI professional managing investments on the go",
  },
];

const FEATURES = [
  { icon: "Wallet", label: "Account Opening" },
  { icon: "Clock", label: "Real Support in Your Time Zone" },
  { icon: "ShieldCheck", label: "Secure & Transparent" },
  { icon: "BarChart3", label: "Expert Wealth Management" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-navy-dark text-white sm:min-h-[620px] lg:min-h-[700px]">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[index].src}
              alt={SLIDES[index].alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 py-20 sm:py-24">
        <div className="max-w-[600px]">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur">
            <span className="size-1.5 rounded-full bg-green" />
            Built for NRIs
          </span>
          <h1 className="text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px] lg:text-[52px] lg:leading-[1.1]">
            The Trusted NRI Partner, Always There for You
          </h1>
          <p className="mt-5 max-w-[480px] text-[17px] leading-relaxed text-white/70 sm:text-[19px]">
            From demat accounts to inheritance planning, Investify Prism brings every NRI wealth solution together in one place, wherever you call home.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-8">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon name={f.icon} className="size-4 text-green" />
                </span>
                <span className="text-[14px] font-medium text-white sm:text-[15px]">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <Button href={SITE.loginUrl} external size="lg">
              Open Your Investment Account
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 sm:bottom-8 sm:right-8">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-green" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
        <button
          aria-label={paused ? "Resume animation" : "Pause animation"}
          onClick={() => setPaused((p) => !p)}
          className="ml-2 flex size-7 items-center justify-center rounded-full border border-white/20 text-white"
        >
          <Icon name={paused ? "Play" : "Pause"} className="size-3.5" />
        </button>
      </div>
    </section>
  );
}
