import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ButtonVariant, ButtonSize } from "../../_lib/types";

const baseClasses =
  "inline-flex items-center justify-center gap-2 border border-transparent rounded-[14px] text-sm font-extrabold leading-none transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary-light focus-visible:outline-offset-2 focus-visible:border-primary";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[image:var(--gradient-primary)] text-white shadow-[0_4px_14px_-2px_rgba(59,130,246,0.35)] hover:brightness-110 hover:shadow-[0_8px_24px_-4px_rgba(59,130,246,0.45)] border-none",
  ai: "bg-[image:var(--gradient-ai)] text-white shadow-[0_4px_14px_-2px_rgba(139,92,246,0.35)] hover:brightness-110 hover:shadow-[0_8px_24px_-4px_rgba(139,92,246,0.45)] hover:scale-[1.02] hover:-translate-y-[1px] border-none",
  secondary:
    "border-border bg-surface text-primary backdrop-blur-sm hover:border-primary hover:bg-[var(--surface-hover)] hover:text-primary-hover hover:shadow-md",
  ghost: "bg-transparent text-heading hover:bg-surface-hover",
  danger: "border-red-600/26 bg-white text-error",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "min-h-12 px-[18px]",
  compact: "min-h-10 px-3.5",
};

export function GradientButton({
  href,
  children,
  variant = "primary",
  size = "default",
  icon: Icon,
  className = "",
  onClick,
}: {
  href?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}) {
  const cls = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.default} ${className}`.trim();
  const inner = (
    <>
      {Icon ? <Icon size={16} strokeWidth={2.2} /> : null}
      {children}
    </>
  );
  if (href) return <Link className={cls} href={href}>{inner}</Link>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

/** Legacy ButtonLink alias — keeps all existing call sites working */
export function ButtonLink({
  href,
  children,
  onClick,
  variant = "primary",
  compact = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  compact?: boolean;
  className?: string;
}) {
  const size = compact ? "compact" : "default";
  const cls = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size]} ${className}`.trim();
  return (
    <Link className={cls} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
