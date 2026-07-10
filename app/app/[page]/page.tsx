import { Search, Bell, Trophy, Award, CreditCard, Wallet, UserRound, Settings, HelpCircle, type LucideIcon } from "lucide-react";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { GenericWorkspace } from "@/app/_components/sections/GenericWorkspace";

export default function StudentSimplePage({ params }: { params: { page: string } }) {
  const map: Record<string, { title: string; subtitle: string; icon: LucideIcon; copy: string }> = {
    search: { title: "Search", subtitle: "Permission-aware global search", icon: Search, copy: "Grouped results for tests, questions, creators, results, chapters, and help articles." },
    notifications: { title: "Notifications", subtitle: "Updates, reminders, and billing alerts", icon: Bell, copy: "In-app notification center with read state, grouping, dismissal, and preference routing." },
    leaderboard: { title: "Leaderboard", subtitle: "Healthy comparison by exam and cohort", icon: Trophy, copy: "Global, batch, friends, weekly, monthly, and test-specific leaderboards with privacy controls." },
    achievements: { title: "Achievements", subtitle: "Reward improvement and consistency", icon: Award, copy: "Badges for streaks, score jumps, mastery, endurance, and recovery." },
    subscription: { title: "Subscription", subtitle: "Plans, entitlements, and upgrade paths", icon: CreditCard, copy: "Manage Free, Pro, Creator, and Enterprise access with immediate entitlement updates." },
    billing: { title: "Billing", subtitle: "Invoices, payment methods, and receipts", icon: Wallet, copy: "Payment history, failed payment recovery, invoice download, and refund visibility." },
    profile: { title: "Profile", subtitle: "Identity, goals, and progress", icon: UserRound, copy: "Avatar, exam goal, public visibility, stats, achievements, and sharing controls." },
    settings: { title: "Settings", subtitle: "Preferences, privacy, and accessibility", icon: Settings, copy: "Account, notifications, language, appearance, test preferences, and connected accounts." },
    help: { title: "Help", subtitle: "Contextual support inside the app", icon: HelpCircle, copy: "Suggested help articles, support ticket creation, and product-specific troubleshooting." },
  };
  const page = map[params.page] ?? map.search;

  return (
    <AppFrame title={page.title} subtitle={page.subtitle} nav={studentNav} active={`/app/${params.page}`}>
      <GenericWorkspace
        icon={page.icon}
        title={page.title}
        copy={page.copy}
        actions={[["Primary action", "/app"], ["Open help", "/app/help"]]}
      />
    </AppFrame>
  );
}
