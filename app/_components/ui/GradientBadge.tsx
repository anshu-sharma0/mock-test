import type { LucideIcon } from "lucide-react";
import type { Tone } from "../../_lib/types";

export function GradientBadge({
  label,
  tone = "primary",
  icon: Icon,
}: {
  label: string;
  tone?: Tone;
  icon?: LucideIcon;
}) {
  return (
    <span className={`status ${tone}`}>
      {Icon ? <Icon size={11} strokeWidth={2.5} /> : null}
      {label}
    </span>
  );
}
