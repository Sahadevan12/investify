"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function FloatingAsk() {
  return (
    <Link
      href="/contact-us"
      className="group fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full bg-navy py-3 pl-4 pr-5 text-white shadow-hover transition-all hover:bg-navy-light sm:bottom-8 sm:right-8"
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-green">
        <Icon name="MessageCircle" className="size-4" />
      </span>
      <span className="text-[14px] font-semibold">Ask Prism</span>
    </Link>
  );
}
