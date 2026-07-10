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
  const padClass = padding === "none" ? "" : padding === "large" ? "" : "pad";
  const padStyle = padding === "large" ? { padding: 32 } : undefined;
  return (
    <div
      className={`card ${padClass} ${hoverable ? "hover" : ""} ${className}`}
      style={{ ...padStyle, ...style }}
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
