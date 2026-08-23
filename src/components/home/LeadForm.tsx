"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";

const COUNTRY_CODES = [
  { code: "+91", label: "India" },
  { code: "+971", label: "UAE" },
  { code: "+1", label: "USA / Canada" },
  { code: "+44", label: "UK" },
  { code: "+65", label: "Singapore" },
  { code: "+61", label: "Australia" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+974", label: "Qatar" },
  { code: "+968", label: "Oman" },
  { code: "+973", label: "Bahrain" },
  { code: "+60", label: "Malaysia" },
  { code: "+49", label: "Germany" },
];

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
            Get Started
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.25] text-white sm:text-[34px] lg:text-[38px]">
            Ready to Grow Your Wealth?
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/75">
            Your investment journey deserves clarity, support and the right guidance. Whether you are starting fresh, already investing or simply looking to optimise your portfolio, we are here to make every step smooth and comfortable.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {[
              ["Phone", SITE.phone.join(" / ")],
              ["Mail", SITE.email],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 text-[14.5px] text-white/85">
                <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                  <Icon name={icon} className="size-4" />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-white p-6 text-navy shadow-2xl sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-green/15 text-green-dark">
                <Icon name="CheckCircle2" className="size-7" />
              </span>
              <h3 className="mb-2 text-[18px] font-semibold text-navy">Thank you!</h3>
              <p className="text-[14.5px] text-body">
                Our team will reach out to you within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[13.5px] font-medium text-navy">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-border px-4 py-3 text-[14.5px] outline-none focus:border-green"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[13.5px] font-medium text-navy">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-border px-4 py-3 text-[14.5px] outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13.5px] font-medium text-navy">
                  Mobile Number
                </label>
                <div className="flex overflow-hidden rounded-xl border border-border focus-within:border-green">
                  <select className="border-r border-border bg-surface px-2 text-[13.5px] outline-none">
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code + c.label} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-3 py-3 text-[14.5px] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[13.5px] font-medium text-navy">
                  Home City in India
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded-xl border border-border px-4 py-3 text-[14.5px] outline-none focus:border-green"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[13.5px] font-medium text-navy">
                  Country of Residence
                </label>
                <input
                  type="text"
                  placeholder="Country of Residence"
                  className="w-full rounded-xl border border-border px-4 py-3 text-[14.5px] outline-none focus:border-green"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-green-dark sm:col-span-2"
              >
                Submit Details
                <Icon name="ArrowRight" className="size-4" />
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
