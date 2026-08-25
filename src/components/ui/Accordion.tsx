"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[16px] font-semibold text-navy">{f.q}</span>
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-navy transition-transform duration-300 ${isOpen ? "rotate-45 bg-green text-white" : ""}`}
              >
                <Icon name="Plus" className="size-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-body">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
