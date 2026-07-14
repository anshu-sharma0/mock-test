import type { CardPadding } from "../../_lib/types";

export function GlassCard({
  children,
  hoverable = false,
  padding = "default",
  className = "",
  style,
}: {
  children: React.ReactNode;
  hoverable?: boolean;
  padding?: CardPadding;
  className?: string;
  style?: React.CSSProperties;
}) {
  const padClass = padding === "none" ? "" : padding === "large" ? "p-8" : "p-6";
  const hoverClass = hoverable
    ? "hover:border-indigo-500/22 hover:shadow-lift hover:-translate-y-1"
    : "";

  return (
    <div
      className={`border border-border rounded-[20px] bg-surface backdrop-blur-md shadow-md transition-all duration-300 ${padClass} ${hoverClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}

/** Card — backward-compat alias for GlassCard */
export function Card({
  children,
  hover = false,
  className = "",
}: {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}) {
  return (
    <GlassCard hoverable={hover} className={className}>
      {children}
    </GlassCard>
  );
}
