import Link from "next/link";
import { BOND_QUOTES, BOND_QUOTES_DATE } from "@/lib/bonds-data";
import { SITE } from "@/lib/site-data";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const HEAD = ["Security", "Rating", "Coupon", "Yield", "Maturity", "Payout", "Quantum"];

export default function BondQuotes() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <div className="rounded-3xl bg-white p-6 shadow-card sm:p-9">
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[22px] font-semibold text-navy">Bond Quotes</h2>
              <p className="mt-1 text-[14px] text-body">
                Indicative quotes as of {BOND_QUOTES_DATE}. Swipe sideways to see every column.
              </p>
            </div>
            <p className="text-[13px] font-medium text-body">{BOND_QUOTES.length} bonds</p>
          </div>

          <div className="overflow-x-auto pb-3">
            <table className="w-full min-w-[1020px] border-collapse text-left">
              <thead>
                <tr className="border-b border-dashed border-border">
                  {HEAD.map((h, i) => (
                    <th
                      key={h}
                      className={`px-3 pb-3 text-[13px] font-medium uppercase tracking-wide text-body/70 ${
                        i === 2 || i === 3 ? "text-right" : ""
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BOND_QUOTES.map((b) => (
                  <tr key={b.isin} className="border-b border-border align-top last:border-0">
                    <td className="max-w-[300px] px-3 py-4">
                      <p className="text-[15px] font-semibold leading-snug text-navy">
                        {b.security}
                      </p>
                      <p className="mt-1 text-[12px] text-body">
                        {b.isin}
                        <span className="mx-1.5 text-border">|</span>
                        <span className="font-medium text-navy/70">{b.nature}</span>
                      </p>
                    </td>
                    <td className="max-w-[190px] px-3 py-4 text-[14px] leading-snug text-body">
                      {b.rating}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-right text-[15px] text-body">
                      {b.coupon.toFixed(2)}%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-right text-[15px] font-semibold text-green-dark">
                      {b.yield.toFixed(2)}%
                    </td>
                    <td className="px-3 py-4 text-[14px] leading-snug text-body">
                      <span className="whitespace-nowrap">{b.maturity}</span>
                      {b.repayment && (
                        <span className="mt-1 block max-w-[220px] text-[12px] text-body/80">
                          {b.repayment}
                        </span>
                      )}
                    </td>
                    <td className="max-w-[170px] px-3 py-4 text-[14px] leading-snug text-body">
                      {b.frequency}
                    </td>
                    <td className="max-w-[160px] px-3 py-4 text-[14px] leading-snug text-body">
                      {b.quantum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[13px] italic leading-relaxed text-body">
            Quotes are indicative, subject to availability and may change without notice. Bonds
            and NCDs carry credit, interest-rate and liquidity risk. For the latest pricing and
            more details, please contact your relationship manager.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button href={SITE.bookingUrl} external>
              Talk to Our Team
            </Button>
            <Link
              href="/contact-us"
              className="text-[15px] font-semibold text-green-dark hover:underline"
            >
              Request latest quotes
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
