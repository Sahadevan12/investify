import { Icon } from "@/components/ui/Icon";
import Container from "@/components/ui/Container";

export type Fact = { icon: string; value: string; label: string };

export default function FactStrip({
  intro,
  headline,
  facts,
}: {
  intro: string;
  headline: string;
  facts: Fact[];
}) {
  return (
    <section className="border-b border-border bg-white py-10 sm:py-12">
      <Container>
        <div className="text-center">
          <p className="mx-auto max-w-xl text-[16px] leading-relaxed text-body sm:text-[18px]">
            {intro}
          </p>
          <p className="mt-1 text-[20px] font-semibold tracking-wide text-navy sm:text-[22px]">
            {headline}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 border-t border-border pt-4 sm:mt-8 sm:pt-8 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col items-start gap-2.5 px-3 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6 ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              } ${i % 2 === 1 ? "border-l border-border lg:border-l" : ""}`}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-green/20 bg-green/10 text-green-dark sm:size-14">
                <Icon name={f.icon} className="size-5 sm:size-6" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[17px] font-bold leading-tight text-navy sm:text-[22px]">
                  {f.value}
                </p>
                <p className="mt-1 text-[12px] font-medium leading-snug text-body sm:mt-0.5 sm:text-[14px]">
                  {f.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
