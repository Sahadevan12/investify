"use client";

import { useMemo, useState } from "react";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(25000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12);

  const { invested, corpus, gains } = useMemo(() => {
    const n = years * 12;
    const i = rate / 100 / 12;
    const futureValue = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const investedAmount = monthly * n;
    return {
      invested: investedAmount,
      corpus: futureValue,
      gains: futureValue - investedAmount,
    };
  }, [monthly, years, rate]);

  const gainPct = Math.min(100, Math.round((gains / corpus) * 10000) / 100);

  return (
    <div className="grid grid-cols-1 gap-10 rounded-[24px] border border-border bg-white p-7 sm:p-9 lg:grid-cols-5 lg:gap-14">
      <div className="lg:col-span-3">
        <div className="mb-7">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[15px] font-medium text-navy">Monthly Investment</label>
            <span className="text-[16px] font-semibold text-green-dark">
              {formatINR(monthly)}
            </span>
          </div>
          <input
            type="range"
            min={1000}
            max={200000}
            step={500}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="w-full accent-green"
          />
        </div>

        <div className="mb-7">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[15px] font-medium text-navy">Investment Period</label>
            <span className="text-[16px] font-semibold text-green-dark">{years} years</span>
          </div>
          <input
            type="range"
            min={1}
            max={35}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-green"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[15px] font-medium text-navy">Expected Annual Return</label>
            <span className="text-[16px] font-semibold text-green-dark">{rate}%</span>
          </div>
          <input
            type="range"
            min={4}
            max={20}
            step={0.5}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-green"
          />
        </div>
      </div>

      <div className="rounded-[20px] bg-surface p-7 lg:col-span-2">
        <p className="mb-1 text-[14px] font-medium uppercase tracking-wide text-body">
          Estimated Future Value
        </p>
        <p className="mb-6 text-[30px] font-bold text-navy">{formatINR(corpus)}</p>

        <div className="mb-4 h-2.5 w-full overflow-hidden rounded-full bg-border">
          <div className="h-full bg-green" style={{ width: `${gainPct}%` }} />
        </div>

        <div className="space-y-3 text-[15.5px]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-body">
              <span className="size-2.5 rounded-full bg-navy/20" /> Invested Amount
            </span>
            <span className="font-semibold text-navy">{formatINR(invested)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-body">
              <span className="size-2.5 rounded-full bg-green" /> Est. Returns
            </span>
            <span className="font-semibold text-navy">{formatINR(gains)}</span>
          </div>
        </div>

        <p className="mt-6 text-[12px] leading-relaxed text-body">
          This calculator is for illustration only and does not guarantee returns. Mutual fund
          investments are subject to market risk.
        </p>
      </div>
    </div>
  );
}
