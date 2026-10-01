"use client";

import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/site-data";

export default function FloatingCommunity() {
  return (
    <a
      href={SITE.communityUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group animate-cta-bounce fixed bottom-24 right-5 z-40 flex items-center gap-2 rounded-full bg-green py-3 pl-4 pr-5 text-white shadow-hover transition-all hover:bg-green-dark sm:bottom-28 sm:right-8"
    >
      <span className="relative flex size-8 items-center justify-center rounded-full bg-navy">
        <span className="animate-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-navy" />
        <Icon name="Users" className="relative size-4" />
      </span>
      <span className="text-[14px] font-semibold">Join Our Community</span>
    </a>
  );
}
