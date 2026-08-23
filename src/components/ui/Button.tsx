import Link from "next/link";
import { clsx } from "clsx";
import { Icon } from "./Icon";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  icon?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  icon = "ArrowRight",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap";
  const sizes = {
    md: "pl-6 pr-2 py-2 text-[16px]",
    lg: "pl-7 pr-2.5 py-2.5 text-base",
  };
  const variants = {
    primary:
      "bg-green text-white shadow-soft hover:bg-green-dark hover:shadow-hover",
    outline:
      "bg-transparent text-navy border border-navy/20 pl-6 pr-6 hover:border-navy hover:bg-navy hover:text-white",
    ghost: "bg-transparent text-navy pl-0 pr-0 gap-2 hover:text-green",
  };

  const iconWrap =
    variant === "ghost" ? null : (
      <span
        className={clsx(
          "flex items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5",
          size === "lg" ? "size-9" : "size-8",
          variant === "outline" && "bg-navy/10 group-hover:bg-white/20"
        )}
      >
        <Icon name={icon} className="size-4" strokeWidth={2} />
      </span>
    );

  const content = (
    <>
      <span>{children}</span>
      {iconWrap ?? <Icon name={icon} className="size-4" strokeWidth={2} />}
    </>
  );

  const cls = clsx(base, sizes[size], variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
