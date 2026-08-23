import { TESTIMONIALS } from "@/lib/site-data";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const AVATAR_COLORS = [
  "bg-green/15 text-green-dark",
  "bg-blue/15 text-blue",
  "bg-teal/15 text-teal",
  "bg-gold/15 text-gold",
  "bg-navy/10 text-navy",
  "bg-cyan/15 text-cyan",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Client Testimonial"
          title="Hear From Clients Who Found Clarity"
          description="Guided with care, expertise, and a deep understanding of NRI needs — in their own words."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col rounded-[20px] bg-white p-7 shadow-card"
            >
              <Icon name="Quote" className="mb-4 size-7 text-green/40" />
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="Star" className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-[16px] leading-relaxed text-body">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-[15.5px] font-semibold text-navy">{t.name}</p>
                  <p className="text-[14px] text-body">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
