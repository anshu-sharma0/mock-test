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
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  ListChecks,
  MessageSquare,
  Settings,
  ShieldCheck,
  Store,
  Trophy,
  UserCog,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import type { NavItem } from "./types";

export const publicNav = [
  { label: "Product", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Pricing", href: "/pricing" },
  { label: "Creators", href: "/creators" },
  { label: "Institutes", href: "/institutes" },
  { label: "Resources", href: "/resources" },
];

export const studentNav: NavItem[] = [
  { label: "Dashboard", href: "/app", icon: LayoutDashboard },
  { label: "Tests", href: "/app/tests", icon: ClipboardCheck },
  { label: "Practice", href: "/app/practice", icon: BookOpen },
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

export const orgNav: NavItem[] = [
  { label: "Overview", href: "/org", icon: LayoutDashboard },
  { label: "Branches", href: "/org/branches", icon: Building2 },
  { label: "Users", href: "/org/users", icon: Users },
  { label: "Roles", href: "/org/roles", icon: UserCog },
  { label: "Batches", href: "/org/batches", icon: GraduationCap },
  { label: "Tests", href: "/org/tests", icon: ClipboardCheck },
  { label: "Assignments", href: "/org/assignments", icon: ListChecks },
  { label: "Live", href: "/org/live", icon: Activity },
  { label: "Reports", href: "/org/reports", icon: FileText },
  { label: "Billing", href: "/org/billing", icon: CreditCard },
  { label: "Settings", href: "/org/settings", icon: Settings },
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
