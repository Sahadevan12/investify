"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

export default function ContactPageForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-surface p-12 text-center">
        <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-green/15 text-green-dark">
          <Icon name="CheckCircle2" className="size-7" />
        </span>
        <h3 className="mb-2 text-[19px] font-semibold text-navy">Message sent</h3>
        <p className="text-[15px] text-body">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-5 rounded-3xl bg-surface p-7 sm:grid-cols-2 sm:p-9"
    >
      <div>
        <label className="mb-1.5 block text-[14px] font-medium text-navy">Full Name *</label>
        <input
          required
          type="text"
          placeholder="Your full name"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-green"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-[14px] font-medium text-navy">Email Address *</label>
        <input
          required
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-green"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-[14px] font-medium text-navy">Phone Number</label>
        <input
          type="tel"
          placeholder="With country code"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-green"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-[14px] font-medium text-navy">I&rsquo;m Interested In</label>
        <select className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-green">
          <option>Demat & Trading Account</option>
          <option>Equity & Derivatives</option>
          <option>Mutual Funds</option>
          <option>NPS</option>
          <option>Life & Health Insurance</option>
          <option>Taxation Planning</option>
          <option>Inheritance Planning</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-[14px] font-medium text-navy">Message *</label>
        <textarea
          required
          rows={4}
          placeholder="Tell us a little about what you're looking for"
          className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-[15px] outline-none focus:border-green"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" icon="Send">
          Send Message
        </Button>
      </div>
    </form>
  );
}
