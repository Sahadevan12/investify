export default function PhoneMockup() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-green/15 via-blue/10 to-transparent blur-2xl" />
      <div className="animate-float relative w-[260px] rounded-[2.5rem] border-[10px] border-navy-dark bg-navy-dark shadow-2xl sm:w-[300px]">
        <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-navy-dark" />
        <div className="overflow-hidden rounded-3xl bg-surface">
          {/* status/header */}
          <div className="bg-navy px-5 pb-8 pt-8 text-white">
            <p className="text-[12px] text-white/70">Good morning</p>
            <p className="text-[16px] font-semibold">Arvind Menon</p>
            <p className="mt-4 text-[12px] text-white/70">Total Portfolio Value</p>
            <p className="text-[28px] font-bold">₹84,52,910</p>
            <p className="mt-1 flex items-center gap-1 text-[12px] font-medium text-green">
              ▲ 12.4% this year
            </p>
          </div>

          {/* chart card */}
          <div className="-mt-5 mx-4 rounded-2xl bg-white p-4 shadow-card">
            <div className="flex items-end gap-1.5">
              {[40, 55, 35, 65, 50, 72, 60, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-green/30 to-green"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* holdings list */}
          <div className="space-y-3 px-4 py-5">
            {[
              { name: "Equity Portfolio", value: "₹32,10,400", color: "bg-blue" },
              { name: "Mutual Funds", value: "₹28,44,120", color: "bg-teal" },
              { name: "NPS", value: "₹14,98,390", color: "bg-gold" },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between rounded-xl bg-white px-3.5 py-3 shadow-soft"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`size-2.5 rounded-full ${row.color}`} />
                  <span className="text-[12px] font-medium text-navy">{row.name}</span>
                </div>
                <span className="text-[12px] font-semibold text-navy">{row.value}</span>
              </div>
            ))}
          </div>

          {/* bottom nav */}
          <div className="flex items-center justify-around border-t border-border bg-white py-3">
            {["Home", "Invest", "Reports", "Profile"].map((t, i) => (
              <span
                key={t}
                className={`text-[12px] font-medium ${i === 0 ? "text-green-dark" : "text-body/50"}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
