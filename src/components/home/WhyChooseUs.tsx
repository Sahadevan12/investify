"use client";

import { useEffect, useRef, useState } from "react";
import { DIFFERENTIATORS } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const CARDS = [...DIFFERENTIATORS, ...DIFFERENTIATORS];
const STEP_PX = 1.2; // pixels per tick
const TICK_MS = 20; // ms per tick (~60px/sec)

export default function WhyChooseUs() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      const half = el.scrollWidth / 2;
      let next = el.scrollLeft + STEP_PX;
      if (next >= half) next -= half;
      el.scrollLeft = next;
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="section-pad relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -left-32 top-0 size-96 rounded-full bg-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-green/15 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          align="left"
          light
          eyebrow="Why Choose Us"
          title="What Makes Us Different from Others"
          description="A NRI wealth management experience built around trust, clarity, and real support."
          className="mx-0"
        />

        <div
          ref={scrollerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="mt-12 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((d, i) => (
            <div
              key={d.title + i}
              className="w-[280px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:w-[320px]"
            >
              <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-white/10 text-green">
                <Icon name={d.icon} className="size-5" strokeWidth={1.6} />
              </span>
              <h3 className="mb-2.5 text-[19px] font-semibold text-white">{d.title}</h3>
              <p className="text-[15px] leading-relaxed text-white/70">{d.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
          >
            <Icon name="ChevronRight" className="size-4 rotate-180" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
          >
            <Icon name="ChevronRight" className="size-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
