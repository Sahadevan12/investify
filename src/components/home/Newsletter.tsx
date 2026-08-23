"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const BENEFITS = [
  {
    title: "Exclusive Market Insights",
    description: "Stay ahead with expert stock picks and trends.",
  },
  {
    title: "Taxation & Mutual Funds",
    description: "In-depth strategies for NRI wealth management.",
  },
];

const ISSUES = [
  { tag: "Latest", title: "2nd Issue", date: "August 16-31, 2026" },
  { title: "1st Issue", date: "August 1-15, 2026" },
];

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Investment Update"
          title="Subscribe Our E-Magazine"
          description="Stay updated on exclusive investment opportunities and market insights delivered to your inbox."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="rounded-[24px] bg-surface p-7 sm:p-9 lg:col-span-2">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-green/15 text-green-dark">
                  <Icon name="CheckCircle2" className="size-7" />
                </span>
                <h3 className="mb-2 text-[19px] font-semibold text-navy">You&rsquo;re subscribed!</h3>
                <p className="text-[15.5px] text-body">
                  Watch your inbox for the next issue of our e-magazine.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className="mb-1.5 block text-[14.5px] font-medium text-navy">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15.5px] outline-none transition-colors focus:border-green"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[14.5px] font-medium text-navy">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15.5px] outline-none transition-colors focus:border-green"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-[14px] text-body">
                  <input required type="checkbox" className="mt-0.5 accent-green" />
                  I agree to the{" "}
                  <a href="/privacy-policy" className="text-green-dark underline">
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a href="/disclaimer" className="text-green-dark underline">
                    terms
                  </a>
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-green-dark"
                >
                  Subscribe Now
                  <Icon name="Send" className="size-4" />
                </button>
                <div className="mt-2 flex items-center gap-3 text-[14px] text-body">
                  Follow us:
                  <a
                    href="#"
                    className="flex size-8 items-center justify-center rounded-full bg-white text-green-dark shadow-soft"
                    aria-label="Follow us on WhatsApp"
                  >
                    <Icon name="MessageCircle" className="size-4" />
                  </a>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-[19px] font-semibold text-navy">Subscriber Benefits</h3>
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex gap-3 rounded-2xl border border-border p-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-dark">
                    <Icon name="CheckCircle2" className="size-4" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-body">
                    <span className="font-semibold text-navy">{b.title}:</span> {b.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-[19px] font-semibold text-navy">Recent Issues</h3>
              <a href="#" className="text-[15px] font-semibold text-green-dark hover:underline">
                View All
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ISSUES.map((issue) => (
                <div
                  key={issue.title}
                  className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5"
                >
                  {issue.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-green px-2.5 py-1 text-[10px] font-semibold text-white">
                      {issue.tag}
                    </span>
                  )}
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy/10 text-navy">
                    <Icon name="Newspaper" className="size-5" />
                  </span>
                  <p className="mt-4 text-[16.5px] font-semibold text-navy">{issue.title}</p>
                  <p className="mb-4 text-[14px] text-body">{issue.date}</p>
                  <div className="flex gap-4 text-[14px] font-semibold text-green-dark">
                    <a href="#" className="hover:underline">
                      View
                    </a>
                    <a href="#" className="hover:underline">
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
