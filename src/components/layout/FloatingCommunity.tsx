"use client";

import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/site-data";

export default function FloatingCommunity() {
  return (
    <a
      href={SITE.communityUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group animate-cta-bounce fixed bottom-[88px] right-3 z-40 flex items-center gap-1.5 rounded-full bg-green py-1.5 pl-1.5 pr-3 text-white shadow-hover transition-all hover:bg-green-dark sm:bottom-28 sm:right-8 sm:gap-2 sm:py-3 sm:pl-4 sm:pr-5"
    >
      <span className="relative flex size-6 items-center justify-center rounded-full bg-navy sm:size-8">
        <span className="animate-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-navy" />
        <Icon name="Users" className="relative size-3 sm:size-4" />
      </span>
      <span className="text-[12px] font-semibold sm:text-[14px]">Join Our Community</span>
    </a>
  );
}
