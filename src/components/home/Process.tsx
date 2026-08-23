import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/site-data";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { clsx } from "clsx";

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
          eyebrow="Our Process"
          title="How We Help You Grow"
          description="Our approach focuses on building wealth that supports your present and protects your future, while ensuring every decision is part of the best investment plan for your needs."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PROCESS_STEPS.map((s, i) => {
            const imageFirst = i % 2 === 1;
            const badge = (
              <span
                className={clsx(
                  "inline-flex items-center rounded-xl bg-navy px-5 py-2.5 text-[14px] font-bold tracking-wide text-white",
                  imageFirst ? "-mt-6" : ""
                )}
              >
                STEP {s.step}
              </span>
            );
            const text = (
              <div>
                <h3 className="mb-2.5 mt-4 text-[19px] font-semibold leading-snug text-navy">
                  {s.title}
                </h3>
                <p className="text-[15.5px] leading-relaxed text-body">{s.description}</p>
              </div>
            );
            const image = (
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={STEP_IMAGES[i]}
                  alt={s.title}
                  width={640}
                  height={480}
                  className="h-44 w-full object-cover sm:h-48"
                />
              </div>
            );

            return (
              <div key={s.step} className="flex flex-col items-center text-center">
                {imageFirst ? (
                  <>
                    {image}
                    {badge}
                    {text}
                  </>
                ) : (
                  <>
                    {badge}
                    {text}
                    <div className="mt-5 w-full">{image}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
