import { clsx } from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
            light
              ? "bg-white/10 text-white"
              : "bg-green/10 text-green-dark"
          )}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-[28px] leading-[1.25] font-semibold sm:text-[34px] sm:leading-[1.2] lg:text-[38px]",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-[16px] leading-[1.7] sm:text-[17px]",
            light ? "text-white/75" : "text-body"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
