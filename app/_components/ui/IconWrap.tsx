import type { LucideIcon } from "lucide-react";
import type { Tone } from "../../_lib/types";

export function IconWrap({
  icon: Icon,
  tone = "primary",
  size: iconSize = "default",
}: {
  icon: LucideIcon;
  tone?: Tone;
  size?: "small" | "default" | "large";
}) {
  const dim = iconSize === "small" ? 36 : iconSize === "large" ? 56 : 44;
  const px = iconSize === "small" ? 18 : iconSize === "large" ? 26 : 20;
  return (
    <span className={`feature-icon ${tone}`} style={{ width: dim, height: dim }}>
      <Icon size={px} strokeWidth={2.2} />
    </span>
  );
}
