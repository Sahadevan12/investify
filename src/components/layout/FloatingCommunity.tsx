"use client";

import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/site-data";

export default function FloatingCommunity() {
  return (
    <a
      href={SITE.communityUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join Our Community"
      className="group animate-cta-bounce fixed bottom-[88px] right-3 z-40 flex items-center gap-2 rounded-full bg-green p-1.5 text-white shadow-hover transition-all hover:bg-green-dark sm:bottom-28 sm:right-8 sm:py-3 sm:pl-4 sm:pr-5"
    >
      <span className="relative flex size-9 items-center justify-center rounded-full bg-navy sm:size-8">
        <span className="animate-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-navy" />
        <Icon name="Users" className="relative size-[18px] sm:size-4" />
      </span>
      <span className="hidden text-[14px] font-semibold sm:inline">Join Our Community</span>
    </a>
  );
}
