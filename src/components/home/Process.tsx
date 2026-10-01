import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const STEP_IMAGES = [
  "/images/step1.png",
  "/images/step2.png",
  "/images/step3.png",
  "/images/step4.png",
];

export default function Process() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Our Wealth Approach"
          title="A Structured Approach to Building Wealth"
          description="Every investor has different goals, responsibilities, risk preferences and time horizons. Our approach begins with understanding your financial objectives and then exploring investment solutions that align with your overall wealth strategy."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.step} className="flex flex-col">
              <div className="relative mb-7 overflow-hidden rounded-3xl">
                <Image
                  src={STEP_IMAGES[i]}
                  alt={s.title}
                  width={640}
                  height={480}
                  className="h-44 w-full object-cover sm:h-48"
                />
                <span className="absolute -bottom-5 left-5 flex size-14 items-center justify-center rounded-2xl bg-navy text-[19px] font-bold text-white shadow-hover">
                  {s.step}
                </span>
              </div>
              <h3 className="text-[19px] font-semibold leading-snug text-navy">
                {s.title}
              </h3>
              <p className="mb-2.5 mt-1 text-[15px] font-medium text-green-dark">
                {s.subtitle}
              </p>
              <p className="text-[15px] leading-relaxed text-body">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
