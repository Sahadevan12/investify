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
  {
    icon: "Wallet",
    label: "HNI Wealth Solutions",
    description:
      "Personalised investment solutions for substantial portfolios and long-term wealth objectives.",
  },
  {
    icon: "PieChart",
    label: "Diversified Investments",
    description:
      "Access a broad range of equity, mutual fund, PMS, AIF and fixed-income opportunities.",
  },
  {
    icon: "BarChart3",
    label: "Research-Led Approach",
    description:
      "Make informed investment decisions with market insights, portfolio analysis and structured planning.",
  },
  {
    icon: "HeartHandshake",
    label: "Dedicated Relationship Support",
    description:
      "A relationship-led approach to help you review, manage and evolve your investment strategy.",
  },
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
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-navy-dark text-white sm:min-h-[560px] lg:min-h-[620px]">
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

      <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="max-w-[640px]">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur">
            <span className="size-1.5 rounded-full bg-green" />
            Wealth &bull; Investments &bull; Portfolio Solutions
          </span>
          <h1 className="text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px] lg:text-[48px] lg:leading-[1.1]">
            Build Wealth With Clarity.
            <br />
            Invest With Purpose.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-white/80 sm:text-[19px]">
            Personalised investment and wealth solutions for HNI, NRI, business owners and growth-focused investors.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon name={f.icon} className="size-4 text-green" />
                </span>
                <div>
                  <div className="text-[14px] font-semibold text-white sm:text-[15px]">
                    {f.label}
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={SITE.loginUrl} external size="lg">
              Explore Wealth Solutions
            </Button>
            <Button href={SITE.bookingUrl} external variant="outlineLight" size="lg">
              Talk to Our Team
            </Button>
          </div>

          <p className="mt-5 max-w-[480px] text-[12px] leading-relaxed text-white/50 sm:text-[13px]">
            Investify Prism is led by Kishore Devaraj, Authorised Person associated with IIFL Capital Services Limited.
          </p>
        </div>
      </Container>

      <div className="absolute bottom-6 right-6 z-10 flex items-center sm:bottom-8 sm:right-8">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="flex size-11 items-center justify-center"
          >
            <span
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-green" : "w-2.5 bg-white/50"
              }`}
            />
          </button>
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
