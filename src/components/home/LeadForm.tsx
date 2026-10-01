"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";

const INVESTOR_PROFILES = [
  "HNI / Affluent Investor",
  "Business Owner / Entrepreneur",
  "NRI Investor",
  "Salaried Professional",
  "Retail Investor",
  "First-Time Investor",
  "Other",
];

const INVESTMENT_INTERESTS = [
  "Wealth Management",
  "Equity & Stock Market",
  "Mutual Funds & SIP",
  "PMS",
  "AIF",
  "Bonds / NCD / Fixed Income",
  "IPO",
  "NRI Investment Solutions",
  "Portfolio Review",
  "Other",
];

const INVESTMENT_RANGES = [
  "₹5 Lakh – ₹10 Lakh",
  "₹10 Lakh – ₹25 Lakh",
  "₹25 Lakh – ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "₹1 Crore+",
  "Prefer to discuss",
];

const SELECT_CLS =
  "h-[50px] w-full rounded-xl border border-border bg-white px-4 text-[15px] text-navy outline-none focus:border-green";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-pad relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-green/20 blur-3xl" />

      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
            <span className="size-1.5 rounded-full bg-green" />
            Start Your Wealth Journey
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.25] text-white sm:text-[34px] lg:text-[38px]">
            Let&rsquo;s Talk About Your Wealth Goals
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/70">
            Whether you are building your first investment portfolio, managing substantial wealth or looking to diversify an existing portfolio, Investify Prism can help you explore investment solutions aligned with your financial objectives, investment horizon and risk preferences.
          </p>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/70">
            Speak with Kishore Devaraj to discuss your goals and explore the available investment options.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {[
              ["Phone", SITE.phone.join(" / ")],
              ["Mail", SITE.email],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 text-[15px] text-white/70">
                <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                  <Icon name={icon} className="size-4" />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 text-navy shadow-2xl sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-green/15 text-green-dark">
                <Icon name="CheckCircle2" className="size-7" />
              </span>
              <h3 className="mb-2 text-[19px] font-semibold text-navy">Thank you!</h3>
              <p className="text-[15px] text-body">
                Our team will reach out to you within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
            >
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[14px] font-medium text-navy">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  className="h-[50px] w-full rounded-xl border border-border px-4 text-[15px] outline-none focus:border-green"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[14px] font-medium text-navy">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  className="h-[50px] w-full rounded-xl border border-border px-4 text-[15px] outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[14px] font-medium text-navy">
                  Mobile Number *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="h-[50px] w-full rounded-xl border border-border px-4 text-[15px] outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[14px] font-medium text-navy">
                  City *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your city"
                  className="h-[50px] w-full rounded-xl border border-border px-4 text-[15px] outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[14px] font-medium text-navy">
                  Investor Profile *
                </label>
                <select required defaultValue="" className={SELECT_CLS}>
                  <option value="" disabled>
                    Select your profile
                  </option>
                  {INVESTOR_PROFILES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[14px] font-medium text-navy">
                  Investment Interest *
                </label>
                <select required defaultValue="" className={SELECT_CLS}>
                  <option value="" disabled>
                    Select your interest
                  </option>
                  {INVESTMENT_INTERESTS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[14px] font-medium text-navy">
                  Approximate Investment Requirement
                </label>
                <select defaultValue="" className={SELECT_CLS}>
                  <option value="" disabled>
                    Select a range
                  </option>
                  {INVESTMENT_RANGES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-1 sm:col-span-2">
                <Button type="submit">Discuss Your Investment Goals</Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
