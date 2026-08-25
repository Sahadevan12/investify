"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { NAV, SITE } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-navy-dark/50 lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Image
                src="/brand/investify-prism-logo-v2.jpeg"
                alt={`${SITE.name} Logo`}
                width={305}
                height={100}
                className="h-12 w-auto object-contain"
              />
              <button
                aria-label="Close Menu"
                onClick={onClose}
                className="flex size-10 items-center justify-center rounded-full border border-navy/15 text-navy"
              >
                <Icon name="X" className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-border/70 last:border-0">
                  <button
                    onClick={() =>
                      item.children
                        ? setExpanded(expanded === item.label ? null : item.label)
                        : onClose()
                    }
                    className="flex w-full items-center justify-between px-2 py-3.5 text-left"
                  >
                    {item.children ? (
                      <span className="text-[17px] font-medium text-navy">{item.label}</span>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-[17px] font-medium text-navy"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && (
                      <Icon
                        name="ChevronDown"
                        className={clsx(
                          "size-4 text-navy/60 transition-transform",
                          expanded === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.children && expanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-2"
                      >
                        <div className="flex flex-col gap-1 pb-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] text-body hover:bg-surface hover:text-green"
                            >
                              <span className="flex size-7 items-center justify-center rounded-xl bg-surface text-green">
                                <Icon name={child.icon} className="size-3.5" />
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
            </div>

            <div className="border-t border-border p-5">
              <a
                href={`tel:${SITE.phoneHref}`}
                className="flex items-center justify-center gap-3 text-sm text-body"
              >
                <Icon name="Phone" className="size-4" />
                {SITE.phone[0]}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
