import type { LucideIcon } from "lucide-react";

export type Tone = "primary" | "success" | "warning" | "ai" | "error";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "ai";
export type ButtonSize = "default" | "compact";
export type CardPadding = "none" | "default" | "large";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Metric = {
  label: string;
  value: string;
  trend: string;
  tone?: Tone;
};
