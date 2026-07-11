import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ButtonVariant, ButtonSize } from "../../_lib/types";

export function GradientButton({
  href,
  children,
  variant = "primary",
  size = "default",
  icon: Icon,
  onClick,
}: {
  href?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  onClick?: () => void;
}) {
  const cls = `btn ${variant} ${size === "compact" ? "compact" : ""}`;
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
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  compact?: boolean;
}) {
  return (
    <Link className={`btn ${variant} ${compact ? "compact" : ""}`} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
