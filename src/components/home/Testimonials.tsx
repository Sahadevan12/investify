"use client";

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const AVATAR_COLORS = [
  "bg-green/15 text-green-dark",
  "bg-blue/15 text-blue",
  "bg-teal/15 text-teal",
  "bg-gold/15 text-gold",
  "bg-navy/10 text-navy",
  "bg-cyan/15 text-cyan",
];

const CARDS = [...TESTIMONIALS, ...TESTIMONIALS];
const STEP_PX = 1.2; // pixels per tick
const TICK_MS = 20; // ms per tick (~60px/sec)

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
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
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="section-pad bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Client Experiences"
          title="Hear From Investors Who Chose Clarity"
          description="Every investor has a different journey. Our approach is built around understanding individual goals, providing clear information and supporting clients throughout their investment journey."
        />

        <div className="relative mt-14">
          <div
            ref={scrollerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CARDS.map((t, i) => (
              <div
                key={t.name + i}
                className="flex w-[300px] shrink-0 flex-col rounded-3xl bg-white p-7 shadow-card sm:w-[340px]"
              >
                <Icon name="Quote" className="mb-4 size-7 text-green/40" />
                <div className="mb-5 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="Star" className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-[16px] leading-relaxed text-body">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-navy">{t.name}</p>
                    <p className="text-[14px] text-body">
                      {t.role} &middot; {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 hidden size-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-hover transition-colors hover:bg-surface sm:flex"
          >
            <Icon name="ChevronRight" className="size-4 rotate-180" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 hidden size-12 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-border bg-white shadow-hover transition-colors hover:bg-surface sm:flex"
          >
            <Icon name="ChevronRight" className="size-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
