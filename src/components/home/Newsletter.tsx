"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const BENEFITS = [
  {
    title: "Market & Investment Insights",
    description:
      "Understand important market developments, investment themes and financial-market trends.",
  },
  {
    title: "Wealth & Portfolio Perspectives",
    description:
      "Explore ideas around diversification, portfolio construction, long-term wealth creation and investment planning.",
  },
  {
    title: "Mutual Fund & Equity Education",
    description:
      "Learn how different investment products work, including equities, mutual funds, SIPs and other market-linked solutions.",
  },
  {
    title: "HNI & NRI Wealth Insights",
    description:
      "Explore topics relevant to affluent investors, business owners, HNIs and NRIs building and managing long-term wealth.",
  },
];

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Investment Insights"
          title="Stay Informed. Invest With Greater Clarity."
          description="Explore market insights, investment education and wealth-planning perspectives designed to help investors understand opportunities, risks and important developments across financial markets."
        />

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="rounded-3xl bg-surface p-7 sm:p-9 lg:col-span-2">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-green/15 text-green-dark">
                  <Icon name="CheckCircle2" className="size-7" />
                </span>
                <h3 className="mb-2 text-[19px] font-semibold text-navy">You&rsquo;re subscribed!</h3>
                <p className="text-[15px] text-body">
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
                <h3 className="text-[19px] font-semibold text-navy">
                  Get Investify Prism Insights
                </h3>
                <p className="-mt-2 text-[14px] leading-relaxed text-body">
                  Stay connected with useful investment insights, market updates and wealth-planning perspectives delivered to your inbox.
                </p>
                <div>
                  <label className="mb-1.5 block text-[14px] font-medium text-navy">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-green"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[14px] font-medium text-navy">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-green"
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
                <Button type="submit" icon="Send" className="mt-1">
                  Subscribe to Investment Insights
                </Button>
              </form>
            )}
          </div>

          <div className="rounded-3xl border border-border p-7 sm:p-9 lg:col-span-3">
            <h3 className="mb-5 text-[19px] font-semibold text-navy">What You&rsquo;ll Receive</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex gap-3 rounded-2xl border border-border p-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-dark">
                    <Icon name="CheckCircle2" className="size-4" />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-navy">{b.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-body">
                      {b.description}
                    </p>
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
