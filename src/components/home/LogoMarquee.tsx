import Image from "next/image";
import Container from "@/components/ui/Container";

export type MarqueeLogo = { name: string; src: string; crop?: boolean; scale?: number };

export default function LogoMarquee({
  heading,
  logos,
  shape = "circle",
  duration = "80s",
}: {
  heading?: string;
  logos: MarqueeLogo[];
  shape?: "circle" | "card";
  duration?: string;
}) {
  const loop = [...logos, ...logos];
  const itemCls =
    shape === "circle"
      ? "size-16 overflow-hidden rounded-full sm:size-[72px]"
      : "flex h-16 w-32 items-center justify-center overflow-hidden rounded-2xl p-2.5 sm:h-[72px] sm:w-36";
  const imgCls = shape === "circle" ? "size-full object-cover" : "h-full w-full object-contain";

  return (
    <section className="bg-white py-12 sm:py-14">
      {heading && (
        <Container>
          <h2 className="mx-auto max-w-3xl text-center text-[22px] font-semibold leading-snug text-navy sm:text-[26px]">
            {heading}
          </h2>
        </Container>
      )}

      <div
        className={`${heading ? "mt-8 " : ""}overflow-hidden`}
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <ul
          className="flex w-max animate-marquee items-center gap-6 hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: duration }}
        >
          {loop.map((l, i) => (
            <li
              key={`${l.src}-${i}`}
              aria-hidden={i >= logos.length}
              className={`shrink-0 border border-border bg-white shadow-soft ${itemCls}`}
            >
              <Image
                src={l.src}
                alt={i < logos.length ? l.name : ""}
                width={240}
                height={120}
                loading="eager"
                className={imgCls}
                style={
                  l.crop || l.scale
                    ? {
                        clipPath: l.crop ? "inset(16% 0 0 0)" : undefined,
                        transform: l.scale ? `scale(${l.scale})` : undefined,
                      }
                    : undefined
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
