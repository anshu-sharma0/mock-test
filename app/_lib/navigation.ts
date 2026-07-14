import {
  Activity,
  Award,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  DollarSign,
  FileText,
  HelpCircle,
  LayoutDashboard,
  ListChecks,
  MessageSquare,
  Settings,
  ShieldCheck,
  Store,
  Trophy,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import type { NavItem } from "./types";

export const publicNav = [
  { label: "PYQs", href: "/pyq" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Contact", href: "/contact" },
  // { label: "Creators", href: "/creators" },
  // { label: "Institutes", href: "/institutes" },
  // { label: "Resources", href: "/resources" },
  // { label: "Pricing", href: "/pricing" },
];

export const studentNav: NavItem[] = [
  { label: "Dashboard", href: "/app", icon: LayoutDashboard },
  { label: "Tests", href: "/app/tests", icon: ClipboardCheck },
  { label: "Practice", href: "/app/practice", icon: BookOpen },
  { label: "PYQs", href: "/pyq", icon: FileText },
  { label: "Analytics", href: "/app/analytics", icon: BarChart3 },
  { label: "Planner", href: "/app/planner", icon: CalendarDays },
  { label: "Marketplace", href: "/app/marketplace", icon: Store },
  { label: "Leaderboard", href: "/app/leaderboard", icon: Trophy },
  { label: "Achievements", href: "/app/achievements", icon: Award },
  { label: "Help", href: "/app/help", icon: HelpCircle },
];

export const creatorNav: NavItem[] = [
  { label: "Overview", href: "/creator", icon: LayoutDashboard },
  { label: "Tests", href: "/creator/tests", icon: ClipboardCheck },
  { label: "Question Bank", href: "/creator/questions", icon: BookOpen },
  { label: "Assignments", href: "/creator/assignments", icon: ListChecks },
  { label: "Students", href: "/creator/students", icon: Users },
  { label: "Analytics", href: "/creator/analytics", icon: BarChart3 },
  { label: "Marketplace", href: "/creator/marketplace", icon: Store },
  { label: "Revenue", href: "/creator/revenue", icon: DollarSign },
  { label: "Payouts", href: "/creator/payouts", icon: Wallet },
  { label: "Reviews", href: "/creator/reviews", icon: MessageSquare },
  { label: "Settings", href: "/creator/settings", icon: Settings },
];

export const adminNav: NavItem[] = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Organizations", href: "/admin/organizations", icon: Building2 },
  { label: "Content", href: "/admin/content", icon: BookOpen },
  { label: "Marketplace", href: "/admin/marketplace", icon: Store },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Support", href: "/admin/support", icon: HelpCircle },
  { label: "Feature Flags", href: "/admin/feature-flags", icon: Zap },
  { label: "System Health", href: "/admin/system-health", icon: Activity },
  { label: "Audit Logs", href: "/admin/audit-logs", icon: ShieldCheck },
];
