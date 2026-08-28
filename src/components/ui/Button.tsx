import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "outline" | "ghost";

const base =
  "tap inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[1.0625rem] font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]";

const variants: Record<Variant, string> = {
  // Navy fill — the primary action, used once per screen.
  primary:
    "bg-navy-700 text-paper hover:bg-navy-900 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_-12px_rgba(15,36,64,0.55)]",
  // Gold hairline — secondary. Gold as a line, never as a fill.
  outline:
    "border-[1.5px] border-gold-500 text-[color:var(--tone-display)] hover:bg-gold-500/10",
  ghost:
    "text-[color:var(--tone-display)] underline decoration-gold-500 decoration-2 underline-offset-[6px] hover:decoration-[3px]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "children">) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
