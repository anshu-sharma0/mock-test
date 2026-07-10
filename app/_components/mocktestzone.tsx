"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Brain,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  CreditCard,
  DollarSign,
  Eye,
  EyeOff,
  FileText,
  Filter,
  Flame,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  LineChart,
  ListChecks,
  Lock,
  MessageSquare,
  Play,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  Trophy,
  UserCog,
  UserRound,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tone = "primary" | "success" | "warning" | "ai" | "error";
type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "ai";
type ButtonSize = "default" | "compact";
type CardPadding = "none" | "default" | "large";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type Metric = {
  label: string;
  value: string;
  trend: string;
  tone?: Tone;
};

const publicNav = [
  { label: "Product", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Pricing", href: "/pricing" },
  { label: "Creators", href: "/creators" },
  { label: "Institutes", href: "/institutes" },
  { label: "Resources", href: "/resources" },
];

const studentNav: NavItem[] = [
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

const creatorNav: NavItem[] = [
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

const orgNav: NavItem[] = [
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

const adminNav: NavItem[] = [
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

const tests = [
  {
    slug: "jee-main-rank-sprint",
    title: "JEE Main Rank Sprint 2026",
    meta: "Full length - 90 questions - 180 minutes",
    score: "87%",
    status: "Recommended",
    tone: "primary" as Tone,
    creator: "Apex Prep Lab",
    price: "Pro",
  },
  {
    slug: "neet-biology-weakness-map",
    title: "NEET Biology Weakness Map",
    meta: "Chapter diagnostic - 45 questions - 50 minutes",
    score: "Adaptive",
    status: "AI picked",
    tone: "ai" as Tone,
    creator: "BioMentor Studio",
    price: "Free",
  },
  {
    slug: "cat-quant-speed-builder",
    title: "CAT Quant Speed Builder",
    meta: "Timed practice - 30 questions - 40 minutes",
    score: "72%",
    status: "Trending",
    tone: "success" as Tone,
    creator: "Percentile Works",
    price: "$9",
  },
];

const marketplaceListings = [
  {
    slug: "rank-sprint-bundle",
    title: "Rank Sprint Bundle",
    creator: "Apex Prep Lab",
    category: "JEE Main",
    rating: "4.9",
    price: "$19",
    tests: "12 tests",
    outcome: "Raise speed and accuracy before final mocks",
  },
  {
    slug: "neet-bio-masterclass-tests",
    title: "NEET Bio Masterclass Tests",
    creator: "BioMentor Studio",
    category: "NEET",
    rating: "4.8",
    price: "$15",
    tests: "9 tests",
    outcome: "Convert weak chapters into daily drills",
  },
  {
    slug: "cat-varc-precision-pack",
    title: "CAT VARC Precision Pack",
    creator: "Percentile Works",
    category: "CAT",
    rating: "4.7",
    price: "$11",
    tests: "7 tests",
    outcome: "Improve passage selection and review discipline",
  },
];

const dashboardMetrics: Metric[] = [
  { label: "Tests done", value: "38", trend: "+6 this week" },
  { label: "Avg score", value: "74%", trend: "+8% in 30 days" },
  { label: "Rank trend", value: "Top 9%", trend: "up 3 bands" },
  { label: "Weak subjects", value: "3", trend: "2 improving", tone: "warning" },
];

const creatorMetrics: Metric[] = [
  { label: "Revenue", value: "$18.4k", trend: "+16% month over month" },
  { label: "Subscribers", value: "4,820", trend: "+312 this month" },
  { label: "Published tests", value: "64", trend: "8 updated" },
  { label: "Avg rating", value: "4.8", trend: "1,240 reviews", tone: "success" },
];

const orgMetrics: Metric[] = [
  { label: "Active students", value: "18,420", trend: "94% active weekly" },
  { label: "Completion", value: "81%", trend: "+5% after reminders" },
  { label: "Live tests", value: "12", trend: "3 need monitoring", tone: "warning" },
  { label: "Avg score", value: "68%", trend: "+7% quarter", tone: "success" },
];

const adminMetrics: Metric[] = [
  { label: "Attempts today", value: "212k", trend: "99.98% save success" },
  { label: "Payment success", value: "97.4%", trend: "+1.2%" },
  { label: "Moderation queue", value: "43", trend: "12 high priority", tone: "warning" },
  { label: "Open tickets", value: "128", trend: "24 urgent", tone: "error" },
];

const activity = [
  "Completed JEE Main Rank Sprint with 78%",
  "AI planner added 4 Electrostatics review blocks",
  "Unlocked 7 day consistency achievement",
  "Moved Algebra speed from weak to improving",
];

/** Enhanced IconWrap with gradient-tinted backgrounds */
function IconWrap({
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

/** GradientBadge — pill tag with gradient tint and solid gradient text */
function GradientBadge({
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

/** GlassCard — glassmorphism surface with optional hover physics */
function GlassCard({
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

/** MetricWidget — metric card with gradient text value */
function MetricWidget({ metric }: { metric: Metric }) {
  const tone = metric.tone ?? "primary";
  return (
    <GlassCard className="metric">
      <div className="stack">
        <GradientBadge label={metric.trend} tone={tone} />
        <span className={`metric-value ${tone}`}>{metric.value}</span>
        <span className="metric-label">{metric.label}</span>
      </div>
    </GlassCard>
  );
}

function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link className="logo" href={href}>
      <span className="logo-mark">
        <Sparkles size={18} />
      </span>
      <span>MockTestZone</span>
    </Link>
  );
}

/** GradientButton — premium button with variant support */
function GradientButton({
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
function ButtonLink({
  href,
  children,
  variant = "primary",
  compact = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  compact?: boolean;
}) {
  return (
    <Link className={`btn ${variant} ${compact ? "compact" : ""}`} href={href}>
      {children}
    </Link>
  );
}

function PublicNav() {
  return (
    <header className="public-nav">
      <div className="container public-nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main navigation">
          {publicNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="row nav-actions">
          <ButtonLink href="/auth/login" variant="ghost" compact>
            Login
          </ButtonLink>
          <ButtonLink href="/auth/signup" compact>
            Get Started <ChevronRight size={16} />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const groups = [
    ["Product", "Tests", "Analytics", "Planner", "AI Insights"],
    ["Resources", "Help Center", "Exam Guides", "Blog", "Contact"],
    ["Creators", "Creator Program", "Marketplace", "Payouts", "Reviews"],
    ["Legal", "Terms", "Privacy", "Refund Policy", "Security"],
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="stack">
          <Logo />
          <p>
            A calm, AI-powered mock test platform for focused preparation,
            sharp analytics, and scalable institute programs.
          </p>
        </div>
        {groups.map((group) => (
          <div className="stack" key={group[0]}>
            <strong className="strong">{group[0]}</strong>
            {group.slice(1).map((item) => (
              <Link key={item} href="/help">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <PublicNav />
      {children}
      <Footer />
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  copy,
  action,
  ai = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  action?: React.ReactNode;
  ai?: boolean;
}) {
  return (
    <div className="section-head">
      <div>
        {eyebrow ? <span className={`eyebrow ${ai ? "ai" : ""}`}>{eyebrow}</span> : null}
        <h2 className="h2" style={{ marginTop: eyebrow ? 16 : 0 }}>
          {title}
        </h2>
        {copy ? <p className="lead">{copy}</p> : null}
      </div>
      {action}
    </div>
  );
}

/** Card — backward-compat alias for GlassCard */
function Card({
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

/** MetricCard — backward-compat alias for MetricWidget */
function MetricCard({ metric }: { metric: Metric }) {
  return <MetricWidget metric={metric} />;
}

function HeroPreview() {
  return (
    <div className="hero-preview" aria-label="MockTestZone dashboard preview">
      <div className="hero-preview-inner">
        <div className="preview-top">
          <div className="mini-stat">
            <strong>74%</strong>
            <span>Avg score</span>
          </div>
          <div className="mini-stat">
            <strong>Top 9%</strong>
            <span>Rank trend</span>
          </div>
          <div className="mini-stat">
            <strong>12d</strong>
            <span>Streak</span>
          </div>
        </div>
        <div className="mock-chart">
          {[42, 58, 52, 76, 68, 86, 74].map((height, index) => (
            <span
              className={`bar ${index === 4 ? "green" : index === 5 ? "purple" : ""}`}
              key={height + index}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="ai-panel stack">
          <div className="row">
            <Sparkles size={18} color="var(--ai)" />
            <strong className="strong">AI insight</strong>
          </div>
          <p style={{ margin: 0 }}>
            Physics accuracy rose, but time per electrostatics question is still 34 seconds
            above your target. Review 18 saved mistakes before the next full mock.
          </p>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const features: { title: string; copy: string; icon: LucideIcon; tone: Tone }[] = [
    { title: "Adaptive tests", copy: "Recommendations adjust after every attempt.", icon: Target, tone: "primary" },
    { title: "AI analysis", copy: "Readable insights without noisy dashboards.", icon: Brain, tone: "ai" },
    { title: "Performance tracking", copy: "Score, speed, accuracy, and weak chapters.", icon: LineChart, tone: "success" },
    { title: "Timed practice", copy: "Focused drills that build exam-day speed.", icon: Clock, tone: "primary" },
    { title: "Rank prediction", copy: "Readiness signals with confidence context.", icon: Trophy, tone: "warning" },
    { title: "Study planner", copy: "Daily tasks tied to real result gaps.", icon: CalendarDays, tone: "ai" },
  ];

  return (
    <PublicShell>
      <main>
        <section className="container hero">
          <div className="stack" style={{ gap: 22 }}>
            <span className="eyebrow ai">
              <Sparkles size={16} /> AI-powered mock test platform
            </span>
            <h1 className="h1">Prepare with the calm precision of a premium SaaS tool.</h1>
            <p className="lead">
              MockTestZone helps students attempt better tests, understand results faster,
              and turn every weak chapter into a clear next action.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/auth/signup">
                Start free <ChevronRight size={18} />
              </ButtonLink>
              <ButtonLink href="/marketplace" variant="secondary">
                Browse marketplace
              </ButtonLink>
            </div>
            <div className="trust-row">
              <span className="trust-pill">1.2M+ attempts modeled</span>
              <span className="trust-pill">For students, creators, institutes</span>
              <span className="trust-pill">AA accessible flows</span>
            </div>
          </div>
          <HeroPreview />
        </section>

        <section className="section compact">
          <div className="container grid four">
            {["Universities", "Coaching teams", "Creators", "Students"].map((item, index) => (
              <Card key={item}>
                <span className="metric-value">{["120+", "840+", "3.6k+", "1M+"][index]}</span>
                <span className="metric-label">{item}</span>
              </Card>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              eyebrow="Core product"
              title="Everything points back to better attempts and clearer improvement."
              copy="The platform keeps the learning loop tight: discover, attempt, review, plan, and improve."
            />
            <div className="grid three">
              {features.map((feature) => (
                <Card hover key={feature.title}>
                  <div className="stack">
                    <IconWrap icon={feature.icon} tone={feature.tone} />
                    <h3 className="h3">{feature.title}</h3>
                    <p>{feature.copy}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card pad" style={{ background: "var(--ai-light)" }}>
              <div className="grid two">
                <div className="stack">
                  <span className="eyebrow ai">Signature AI layer</span>
                  <h2 className="h2">Insights that explain what to do next.</h2>
                  <p className="lead">
                    AI stays in service of the student journey: it summarizes mistakes,
                    predicts readiness, and creates a study plan without taking over the page.
                  </p>
                  <ButtonLink href="/app/analytics" variant="secondary">
                    View analytics flow
                  </ButtonLink>
                </div>
                <div className="grid">
                  <Card>
                    <strong className="strong">Before</strong>
                    <p>Score dropped from 76% to 69%. Student sees a chart but no priority.</p>
                  </Card>
                  <Card>
                    <strong className="strong">After</strong>
                    <p>
                      AI finds slow algebra questions, adds two drills, and recommends a
                      shorter retest.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarketplacePreview />
        <PricingPreview />
      </main>
    </PublicShell>
  );
}

function MarketplacePreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Marketplace"
          title="Premium creator tests with trust signals built in."
          copy="Students can browse by exam, difficulty, rating, creator, and outcome."
          action={
            <ButtonLink href="/marketplace" variant="secondary">
              Explore all
            </ButtonLink>
          }
        />
        <div className="grid three">
          {marketplaceListings.map((listing) => (
            <ListingCard listing={listing} key={listing.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Pricing"
          title="Plans for students, creators, and institutions."
          copy="Start with the student loop, then scale into creator monetization and institute management."
        />
        <div className="grid four">
          {[
            ["Free", "$0", "Basic tests and starter analytics"],
            ["Pro", "$12", "AI planner, full analytics, premium attempts"],
            ["Creator", "$29", "Publish paid tests and manage payouts"],
            ["Enterprise", "Custom", "Seats, reports, roles, and support"],
          ].map(([name, price, copy]) => (
            <Card key={name} className={name === "Pro" ? "recommended" : ""}>
              <div className="stack">
                <span className={name === "Pro" ? "status primary" : "status success"}>
                  {name === "Pro" ? "Recommended" : name}
                </span>
                <span className="price">{price}</span>
                <p>{copy}</p>
                <ButtonLink href="/auth/signup" variant={name === "Pro" ? "primary" : "secondary"}>
                  Choose {name}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListingCard({ listing }: { listing: (typeof marketplaceListings)[number] }) {
  return (
    <Card hover>
      <div className="stack">
        <div className="row between">
          <span className="status primary">{listing.category}</span>
          <span className="row">
            <Star size={16} fill="var(--warning)" color="var(--warning)" />
            <strong className="strong">{listing.rating}</strong>
          </span>
        </div>
        <h3 className="h3">{listing.title}</h3>
        <p>{listing.outcome}</p>
        <div className="row between">
          <span className="muted">{listing.creator}</span>
          <strong className="strong">{listing.price}</strong>
        </div>
        <div className="row between">
          <span className="chip">{listing.tests}</span>
          <ButtonLink href={`/marketplace/${listing.slug}`} variant="secondary" compact>
            Preview
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}

export function PricingPage() {
  return (
    <PublicShell>
      <PricingPreview />
    </PublicShell>
  );
}

export function MarketplacePage({ inApp = false }: { inApp?: boolean }) {
  const content = (
    <div className="workspace">
      <SectionHead
        eyebrow="Marketplace"
        title="Find creator tests by exam, outcome, and trust."
        copy="Trending bundles, verified creators, category chips, ratings, previews, and purchase states are visible from the first screen."
        action={
          <ButtonLink href={inApp ? "/app/subscription" : "/auth/signup"} variant="secondary">
            {inApp ? "Manage plan" : "Get started"}
          </ButtonLink>
        }
      />
      <div className="row wrap">
        {["JEE Main", "NEET", "CAT", "Banking", "UPSC", "Free", "Trending"].map((chip) => (
          <span className="chip" key={chip}>
            {chip}
          </span>
        ))}
      </div>
      <div className="grid three">
        {marketplaceListings.map((listing) => (
          <ListingCard key={listing.slug} listing={listing} />
        ))}
      </div>
    </div>
  );

  if (inApp) {
    return (
      <AppFrame title="Marketplace" subtitle="Creator tests and premium bundles" nav={studentNav} active="/app/marketplace">
        {content}
      </AppFrame>
    );
  }

  return <PublicShell><section className="container section">{content}</section></PublicShell>;
}

export function ListingPage({ slug, inApp = false }: { slug?: string; inApp?: boolean }) {
  const listing = marketplaceListings.find((item) => item.slug === slug) ?? marketplaceListings[0];
  const body = (
    <div className="workspace">
      <div className="grid two">
        <Card>
          <div className="stack">
            <span className="status primary">{listing.category}</span>
            <h1 className="h1" style={{ fontSize: 44 }}>{listing.title}</h1>
            <p className="lead">{listing.outcome}</p>
            <div className="row wrap">
              <span className="chip"><Star size={16} /> {listing.rating} rating</span>
              <span className="chip">{listing.tests}</span>
              <span className="chip">{listing.creator}</span>
            </div>
            <div className="hero-actions">
              <ButtonLink href="/app/tests/jee-main-rank-sprint/start">
                Buy and start <ChevronRight size={18} />
              </ButtonLink>
              <ButtonLink href="/auth/signup" variant="secondary">
                Save preview
              </ButtonLink>
            </div>
          </div>
        </Card>
        <Card>
          <div className="stack">
            <span className="eyebrow ai">Sample insight</span>
            <h3 className="h3">What students unlock</h3>
            <ul>
              <li>12 full and sectional tests.</li>
              <li>Question-level explanations and time analysis.</li>
              <li>AI weak chapter plan after every attempt.</li>
              <li>Creator updates and review support.</li>
            </ul>
          </div>
        </Card>
      </div>
      <Card>
        <div className="grid three">
          {["Syllabus coverage", "Sample questions", "Reviews"].map((title, index) => (
            <div className="stack" key={title}>
              <IconWrap icon={[BookOpen, Eye, MessageSquare][index]} tone={index === 1 ? "ai" : "primary"} />
              <h3 className="h3">{title}</h3>
              <p>
                {index === 0
                  ? "Physics, Chemistry, Mathematics, chapter-weighted by recent exam patterns."
                  : index === 1
                    ? "Preview enough to judge quality before purchase."
                    : "Students cite cleaner explanations and realistic timing pressure."}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  if (inApp) {
    return (
      <AppFrame title={listing.title} subtitle="Marketplace listing" nav={studentNav} active="/app/marketplace">
        {body}
      </AppFrame>
    );
  }

  return <PublicShell><section className="container section">{body}</section></PublicShell>;
}

function PublicInfoPage({
  kind,
}: {
  kind: "creators" | "institutes" | "resources" | "help" | "contact";
}) {
  const config = {
    creators: {
      eyebrow: "Creators",
      title: "Turn test expertise into a premium creator business.",
      copy: "Create, publish, analyze, sell, and improve mock tests from one calm workspace.",
      icon: Store,
      cta: "Start as creator",
    },
    institutes: {
      eyebrow: "Institutes",
      title: "Run high-volume test programs across branches and batches.",
      copy: "Manage users, assignments, live monitoring, reports, billing, and audit logs.",
      icon: Building2,
      cta: "Plan institute rollout",
    },
    resources: {
      eyebrow: "Resources",
      title: "Exam strategy content connected to real test actions.",
      copy: "Guides, study methods, result interpretation, and preparation templates.",
      icon: FileText,
      cta: "Read guide",
    },
    help: {
      eyebrow: "Help Center",
      title: "Fast answers for tests, billing, marketplace, and accounts.",
      copy: "Search support topics, view popular articles, or create a ticket with context.",
      icon: HelpCircle,
      cta: "Contact support",
    },
    contact: {
      eyebrow: "Contact",
      title: "Reach sales, support, or partnerships without friction.",
      copy: "Route your request to the right team with a concise context-first form.",
      icon: MessageSquare,
      cta: "Send request",
    },
  }[kind];

  return (
    <PublicShell>
      <section className="container section">
        <div className="grid two">
          <div className="stack" style={{ gap: 22 }}>
            <span className="eyebrow">{config.eyebrow}</span>
            <h1 className="h1">{config.title}</h1>
            <p className="lead">{config.copy}</p>
            <ButtonLink href={kind === "contact" ? "/help" : "/auth/signup"}>
              {config.cta} <ChevronRight size={18} />
            </ButtonLink>
          </div>
          <Card>
            <div className="stack">
              <IconWrap icon={config.icon} tone={kind === "help" ? "ai" : "primary"} />
              <h2 className="h2">Blueprint-backed surface</h2>
              <p>
                This page is wired into the platform IA and will expand into its full
                content, forms, filters, and conversion paths as the backend services arrive.
              </p>
            </div>
          </Card>
        </div>
        <div className="grid three" style={{ marginTop: 32 }}>
          {["Discover", "Decide", "Continue"].map((title, index) => (
            <Card key={title} hover>
              <div className="stack">
                <span className="status primary">Step {index + 1}</span>
                <h3 className="h3">{title}</h3>
                <p>
                  {index === 0
                    ? "Clear search, categories, and trust proof."
                    : index === 1
                      ? "Outcome-focused information and one primary action."
                      : "Routes into signup, dashboard, support, or sales."}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}

function AuthPage({ mode }: { mode: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("Student");

  const isSignup = mode === "signup";
  const title =
    mode === "login"
      ? "Welcome back"
      : isSignup
        ? "Create your account"
        : mode === "verify"
          ? "Verify your account"
          : mode === "forgot-password"
            ? "Recover your account"
            : "Reset your password";

  return (
    <div
      className="page"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      <GlassCard
        hoverable
        padding="large"
        className="auth-card"
        style={{ width: "100%", maxWidth: 440 }}
      >
        <div className="stack" style={{ gap: 24, textAlign: "center", alignItems: "center" }}>
          <Logo />
          <div>
            <h1 className="h2" style={{ fontSize: 28 }}>
              {title}
            </h1>
            <p className="muted" style={{ marginTop: 8, fontSize: 15 }}>
              {isSignup
                ? "Join MockTestZone to start your journey."
                : "Enter your credentials to access your workspace."}
            </p>
          </div>
        </div>

        <form className="form-grid" style={{ marginTop: 32 }}>
          {isSignup && (
            <div className="stack" style={{ gap: 16 }}>
              <div
                className="row wrap"
                style={{
                  background: "var(--surface-hover)",
                  padding: 6,
                  borderRadius: 16,
                  border: "1px solid var(--border)",
                }}
              >
                {["Student", "Creator", "Institute"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      border: "none",
                      background: role === r ? "#fff" : "transparent",
                      borderRadius: 10,
                      fontWeight: role === r ? 800 : 600,
                      color: role === r ? "var(--primary)" : "var(--muted)",
                      boxShadow: role === r ? "var(--shadow-sm)" : "none",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <input className="input" placeholder="Full Name" />
            </div>
          )}

          <input className="input" placeholder="Email address" />

          {mode !== "forgot-password" && mode !== "verify" ? (
            <div style={{ position: "relative" }}>
              <input
                className="input"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                style={{ paddingRight: 48 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--muted)",
                  padding: 4,
                  display: "flex",
                }}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          ) : null}

          {isSignup && (
            <div style={{ position: "relative" }}>
              <input
                className="input"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                style={{ paddingRight: 48 }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--muted)",
                  padding: 4,
                  display: "flex",
                }}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}

          {mode === "verify" ? (
            <input className="input" placeholder="6 digit verification code" />
          ) : null}

          <div style={{ marginTop: 12, display: "flex", flexDirection: "column" }}>
            <GradientButton href="/onboarding/student" variant="primary">
              {isSignup ? "Create account" : "Sign in to workspace"} <ChevronRight size={18} style={{ marginLeft: 6 }} />
            </GradientButton>
          </div>

          <div
            className="row wrap"
            style={{ justifyContent: "center", marginTop: 20, fontSize: 14 }}
          >
            <span className="muted">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
            </span>
            <Link
              href={isSignup ? "/auth/login" : "/auth/signup"}
              style={{ color: "var(--primary)", fontWeight: 800 }}
            >
              {isSignup ? "Log in instead" : "Create one now"}
            </Link>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}

function OnboardingPage({ role = "student" }: { role?: string }) {
  const cards = [
    ["Exam goal", "JEE Main 2026"],
    ["Target date", "12 weeks"],
    ["Daily study time", "2.5 hours"],
    ["Reminder style", "Planner and email"],
  ];

  return (
    <PublicShell>
      <section className="container section">
        <div className="grid two">
          <div className="stack">
            <span className="eyebrow ai">Onboarding</span>
            <h1 className="h1">Personalize the {role} journey before the first dashboard.</h1>
            <p className="lead">
              The onboarding flow captures enough context to make the first recommendation
              useful without turning signup into a long form.
            </p>
            <div className="hero-actions">
              <ButtonLink href={role === "student" ? "/app" : role === "institute" ? "/org" : "/creator"}>
                Enter workspace <ChevronRight size={18} />
              </ButtonLink>
              <ButtonLink href="/onboarding" variant="secondary">
                Change role
              </ButtonLink>
            </div>
          </div>
          <Card>
            <div className="grid two">
              {cards.map(([label, value]) => (
                <div className="mini-stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </PublicShell>
  );
}

function AppFrame({
  title,
  subtitle,
  nav,
  active,
  children,
  cta,
}: {
  title: string;
  subtitle: string;
  nav: NavItem[];
  active: string;
  children: React.ReactNode;
  cta?: React.ReactNode;
}) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-panel">
          <Logo href="/app" />
          <nav className="side-nav" aria-label="Workspace navigation">
            {nav.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href || (item.href !== "/app" && active.startsWith(item.href));
              return (
                <Link className={`side-link ${isActive ? "active" : ""}`} href={item.href} key={item.href}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <span className="trust-pill">
            <ShieldCheck size={14} /> Autosave healthy
          </span>
        </div>
      </aside>
      <main className="main-area">
        <div className="topbar">
          <div>
            <h1 className="h3">{title}</h1>
            <p style={{ margin: 0 }}>{subtitle}</p>
          </div>
          <div className="row">
            <Link className="searchbox" href="/app/search">
              <Search size={18} />
              Search tests, results, questions
            </Link>
            <ButtonLink href="/app/notifications" variant="secondary" compact>
              <Bell size={16} /> 4
            </ButtonLink>
            {cta ?? (
              <ButtonLink href="/app/tests/jee-main-rank-sprint/start" compact>
                Continue
              </ButtonLink>
            )}
          </div>
        </div>
        {children}
      </main>
      <nav className="mobile-tabs" aria-label="Mobile navigation">
        {studentNav.slice(0, 5).map((item) => {
          const Icon = item.icon;
          return (
            <Link className={active === item.href ? "active" : ""} href={item.href} key={item.href}>
              <Icon size={20} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function StudentDashboard() {
  return (
    <AppFrame title="Today" subtitle="Your next best action is ready" nav={studentNav} active="/app">
      <div className="workspace">
        {/* Full-bleed gradient continue-test banner */}
        <div className="gradient-banner span-two">
          <div className="row between wrap">
            <div className="stack">
              <span className="eyebrow ai"><Flame size={16} /> 12 day streak</span>
              <h2 className="h2">Continue Rank Sprint before your evening review block.</h2>
              <p className="lead">
                You have 38 minutes left in the current attempt. Autosave is healthy.
              </p>
            </div>
            <ButtonLink href="/app/attempts/live-jee-main" variant="secondary">
              Resume test <Play size={18} />
            </ButtonLink>
          </div>
        </div>
        <div className="grid four">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        <div className="grid three">
          <Card className="span-two">
            <div className="stack">
              <div className="row between">
                <h2 className="h3">Recommended tests</h2>
                <ButtonLink href="/app/tests" variant="secondary" compact>
                  View all
                </ButtonLink>
              </div>
              <TestTable />
            </div>
          </Card>
          <Card>
            <div className="stack">
              <span className="eyebrow ai">AI suggestions</span>
              <h3 className="h3">What to do next</h3>
              <p>
                Spend 25 minutes on Electrostatics mistakes, then attempt a 15-question
                speed drill.
              </p>
              <ButtonLink href="/app/planner" variant="secondary">
                Add to planner
              </ButtonLink>
            </div>
          </Card>
        </div>
        <div className="grid two">
          <ActivityTimeline />
          <LeaderboardSnippet />
        </div>
      </div>
    </AppFrame>
  );
}

function TestTable() {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Signal</th>
            <th>Access</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={test.slug}>
              <td>
                <strong className="strong">{test.title}</strong>
                <br />
                <span className="muted">{test.meta}</span>
              </td>
              <td>
                <GradientBadge label={test.status} tone={test.tone} />
              </td>
              <td><span className="muted">{test.price}</span></td>
              <td>
                <ButtonLink href={`/app/tests/${test.slug}`} variant="secondary" compact>
                  Open
                </ButtonLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ActivityTimeline() {
  return (
    <Card>
      <div className="stack">
        <h3 className="h3">Recent activity</h3>
        {activity.map((item, index) => (
          <div className="row" key={item}>
            <span className={`status ${index === 1 ? "ai" : "success"}`}>{index + 1}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function LeaderboardSnippet() {
  return (
    <GlassCard hoverable>
      <div className="stack">
        <div className="row between">
          <h3 className="h3">Leaderboard</h3>
          <GradientBadge label="Top 9%" tone="success" icon={Trophy} />
        </div>
        {["Aarav", "You", "Mira", "Kabir"].map((name, index) => (
          <div className="row between" key={name} style={name === "You" ? { fontWeight: 800, color: "var(--heading)" } : {}}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {name === "You" ? <Star size={14} fill="var(--warning)" color="var(--warning)" /> : null}
              {index + 4}. {name}
            </span>
            <strong className="strong" style={name === "You" ? { background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : {}}>
              {[812, 804, 798, 792][index]}
            </strong>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function TestsPage() {
  return (
    <AppFrame title="Tests" subtitle="Discover, filter, and start the next attempt" nav={studentNav} active="/app/tests">
      <div className="workspace">
        <div className="row wrap">
          {["All", "Recommended", "Free", "Pro", "JEE", "NEET", "Timed", "Adaptive"].map((item) => (
            <span className="chip" key={item}><Filter size={14} /> {item}</span>
          ))}
        </div>
        <div className="grid three">
          {tests.map((test) => (
            <Card hover key={test.slug}>
              <div className="stack">
                <span className={`status ${test.tone}`}>{test.status}</span>
                <h3 className="h3">{test.title}</h3>
                <p>{test.meta}</p>
                <div className="row between">
                  <span className="chip">{test.creator}</span>
                  <strong className="strong">{test.price}</strong>
                </div>
                <ButtonLink href={`/app/tests/${test.slug}`}>View details</ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

function TestDetail({ slug }: { slug?: string }) {
  const test = tests.find((item) => item.slug === slug) ?? tests[0];
  return (
    <AppFrame title={test.title} subtitle="Instructions, syllabus, attempts, and access" nav={studentNav} active="/app/tests">
      <div className="workspace">
        <div className="grid two">
          <Card>
            <div className="stack">
              <span className={`status ${test.tone}`}>{test.status}</span>
              <h1 className="h1" style={{ fontSize: 44 }}>{test.title}</h1>
              <p className="lead">{test.meta}</p>
              <div className="grid two">
                {["90 questions", "180 minutes", "+4 / -1 scoring", "3 attempts left"].map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
              <div className="hero-actions">
                <ButtonLink href={`/app/tests/${test.slug}/start`}>
                  Start test <Play size={18} />
                </ButtonLink>
                <ButtonLink href="/app/planner" variant="secondary">
                  Schedule
                </ButtonLink>
              </div>
            </div>
          </Card>
          <Card>
            <div className="stack">
              <h2 className="h3">Readiness</h2>
              <div className="mini-stat">
                <strong>{test.score}</strong>
                <span>Predicted score based on last 8 attempts</span>
              </div>
              <p>AI recommends a quick formulas review before starting this full-length attempt.</p>
            </div>
          </Card>
        </div>
        <Card>
          <div className="grid three">
            {["Physics", "Chemistry", "Mathematics"].map((subject, index) => (
              <div className="stack" key={subject}>
                <h3 className="h3">{subject}</h3>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${[72, 64, 81][index]}%` }} />
                </div>
                <span className="muted">{[72, 64, 81][index]}% syllabus confidence</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}

function StartTestPage({ slug }: { slug?: string }) {
  const test = tests.find((item) => item.slug === slug) ?? tests[0];
  return (
    <AppFrame title="Start test" subtitle={test.title} nav={studentNav} active="/app/tests">
      <div className="workspace">
        <Card>
          <div className="grid two">
            <div className="stack">
              <span className="eyebrow">Final checkpoint</span>
              <h1 className="h1" style={{ fontSize: 44 }}>Begin when you can finish without interruption.</h1>
              <p className="lead">
                Timer, section rules, negative marking, autosave, and submit confirmation are enabled.
              </p>
              <ButtonLink href="/app/attempts/live-jee-main">
                Start now <Play size={18} />
              </ButtonLink>
            </div>
            <div className="grid">
              {["Device ready", "Network stable", "Autosave enabled", "90 questions loaded"].map((item) => (
                <div className="row" key={item}>
                  <CheckCircle2 color="var(--success)" />
                  <strong className="strong">{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}

function AttemptPage() {
  const options = [
    "The electric field is zero at the midpoint.",
    "The potential is zero at the midpoint.",
    "Both field and potential are zero at the midpoint.",
    "Neither field nor potential is zero at the midpoint.",
  ];

  return (
    <div className="test-shell">
      <header className="test-topbar">
        <div className="container test-topbar-inner">
          <Logo href="/app" />
          <div className="row wrap">
            <span className="chip"><Clock size={16} /> 01:22:18</span>
            <span className="chip">Question 18 of 90</span>
            <GradientBadge label="Autosaved" tone="success" icon={CheckCircle2} />
          </div>
        </div>
      </header>
      <main className="container test-layout">
        <section className="question-card" style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(16px)", border: "1px solid rgba(226,232,240,0.8)" }}>
          <div className="row between wrap">
            <GradientBadge label="Physics - Electrostatics" tone="primary" />
            <span className="muted">Single correct answer</span>
          </div>
          <div style={{ margin: "18px 0" }}>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: "42%", background: "var(--gradient-primary)" }} />
            </div>
          </div>
          <h1 className="h2">
            Two equal and opposite charges are placed at equal distance from a point.
            Which statement is correct for that point?
          </h1>
          <div className="option-list">
            {options.map((option, index) => (
              <div className={`option ${index === 1 ? "selected" : ""}`} key={option}>
                <span className="option-key">{index + 1}</span>
                <span>{option}</span>
              </div>
            ))}
          </div>
          <div className="row between wrap">
            <ButtonLink href="/app/attempts/live-jee-main" variant="secondary">
              Previous
            </ButtonLink>
            <div className="row wrap">
              <ButtonLink href="/app/attempts/live-jee-main" variant="secondary">
                Mark for review
              </ButtonLink>
              <ButtonLink href="/app/attempts/live-jee-main/submit">
                Next <ChevronRight size={18} />
              </ButtonLink>
            </div>
          </div>
        </section>
        <aside className="navigator">
          <div className="stack">
            <h2 className="h4">Question navigator</h2>
            <div className="nav-grid">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  className={`nav-tile ${index < 12 ? "answered" : index === 17 ? "review" : index > 20 ? "skipped" : ""}`}
                  key={index}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <div className="grid two">
              <span className="chip">Answered 12</span>
              <span className="chip">Review 1</span>
              <span className="chip">Skipped 4</span>
              <span className="chip">Left 73</span>
            </div>
            <ButtonLink href="/app/attempts/live-jee-main/submit" variant="danger">
              Submit test
            </ButtonLink>
          </div>
        </aside>
      </main>
    </div>
  );
}

function SubmitPage() {
  return (
    <div className="test-shell">
      <section className="container section">
        <Card>
          <div className="stack">
            <span className="eyebrow">Submit confirmation</span>
            <h1 className="h1" style={{ fontSize: 44 }}>You still have 7 unanswered questions.</h1>
            <p className="lead">
              Marked for review: 3. Skipped: 4. Time left: 01:18:42.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/app/results/live-jee-main">
                Submit and view result
              </ButtonLink>
              <ButtonLink href="/app/attempts/live-jee-main" variant="secondary">
                Return to test
              </ButtonLink>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

function AnalyticsCards() {
  return (
    <div className="grid five">
      {[
        ["Accuracy", "78%", "success"],
        ["Avg time", "1m 32s", "primary"],
        ["Correct", "64", "success"],
        ["Wrong", "19", "error"],
        ["Skipped", "7", "warning"],
      ].map(([label, value, tone]) => (
        <MetricCard key={label} metric={{ label, value, trend: label, tone: tone as Tone }} />
      ))}
    </div>
  );
}

function ResultPage() {
  return (
    <AppFrame title="Result summary" subtitle="JEE Main Rank Sprint 2026" nav={studentNav} active="/app/analytics">
      <div className="workspace">
        <AnalyticsCards />
        <div className="grid two">
          <Card>
            <div className="stack">
              <span className="eyebrow ai">AI prediction</span>
              <h2 className="h2">Rank band improved to top 8-10%.</h2>
              <p>
                Your score improved because Chemistry accuracy rose. Physics timing remains
                the largest blocker.
              </p>
              <ButtonLink href="/app/results/live-jee-main/review" variant="secondary">
                Review answers
              </ButtonLink>
            </div>
          </Card>
          <Card>
            <Chart />
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function ReviewPage() {
  const reviewOptions = [
    ["Selected", "The potential is zero at the midpoint.", "wrong"],
    ["Correct", "The electric field is zero at the midpoint.", "correct"],
  ];

  return (
    <AppFrame title="Answer review" subtitle="Wrong, skipped, and marked questions" nav={studentNav} active="/app/analytics">
      <div className="workspace">
        <div className="row wrap">
          {["Wrong", "Skipped", "Marked", "Physics", "Slow"].map((item) => (
            <span className="chip" key={item}>{item}</span>
          ))}
        </div>
        <Card>
          <div className="stack">
            <span className="status error">Wrong - Electrostatics</span>
            <h2 className="h2">Why was this marked wrong?</h2>
            {reviewOptions.map(([label, text, state]) => (
              <div className={`option ${state}`} key={label}>
                <span className="option-key">{label[0]}</span>
                <span><strong>{label}:</strong> {text}</span>
              </div>
            ))}
            <div className="ai-panel">
              <strong className="strong">AI explanation</strong>
              <p style={{ marginBottom: 0 }}>
                Equal and opposite charges cancel potential as scalars differently from
                field as vectors. Revisit vector direction before retesting.
              </p>
            </div>
            <div className="row wrap">
              <ButtonLink href="/app/practice" variant="secondary">Add to practice</ButtonLink>
              <ButtonLink href="/app/planner" variant="secondary">Add to planner</ButtonLink>
              <ButtonLink href="/app/help" variant="ghost">Report issue</ButtonLink>
            </div>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}

function Chart() {
  return (
    <div className="stack">
      <h3 className="h3">Score trend</h3>
      <div className="chart-line">
        <svg viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points="0,170 100,140 200,155 300,112 400,88 500,96 600,62"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,190 100,160 200,148 300,130 400,118 500,90 600,74"
            fill="none"
            stroke="var(--success)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}

function AnalyticsPage() {
  return (
    <AppFrame title="Analytics" subtitle="Performance, speed, accuracy, and weak chapters" nav={studentNav} active="/app/analytics">
      <div className="workspace">
        <AnalyticsCards />
        <div className="grid two">
          <Card><Chart /></Card>
          <Card>
            <div className="stack">
              <h3 className="h3">Weak chapter heatmap</h3>
              <div className="heatmap">
                {Array.from({ length: 28 }).map((_, index) => (
                  <span className={`heat-cell ${index % 5 === 0 ? "high" : index % 3 === 0 ? "mid" : "low"}`} key={index} />
                ))}
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <div className="grid three">
            {["Electrostatics", "Organic mechanisms", "Quadratic equations"].map((chapter, index) => (
              <div className="stack" key={chapter}>
                <span className={`status ${index === 0 ? "warning" : "primary"}`}>{index === 0 ? "Weak" : "Improving"}</span>
                <h3 className="h3">{chapter}</h3>
                <p>Recommended drill: {index + 2} sets this week.</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}

function PlannerPage() {
  const tasks = ["Review electrostatics mistakes", "Attempt 15-question algebra sprint", "Read organic mechanisms notes", "Full mock on Sunday"];
  return (
    <AppFrame title="Study planner" subtitle="Daily tasks tied to result gaps" nav={studentNav} active="/app/planner">
      <div className="workspace">
        <Card>
          <div className="row between wrap">
            <div>
              <span className="eyebrow ai">AI plan</span>
              <h2 className="h2">7 day recovery plan generated from your last result.</h2>
            </div>
            <ButtonLink href="/app/tests" variant="secondary">Find next test</ButtonLink>
          </div>
        </Card>
        <div className="grid four">
          {tasks.map((task, index) => (
            <Card hover key={task}>
              <div className="stack">
                <span className="status primary">Day {index + 1}</span>
                <h3 className="h3">{task}</h3>
                <p>{[25, 35, 30, 180][index]} minutes scheduled</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

function PracticePage() {
  return (
    <AppFrame title="Practice" subtitle="Targeted drills from mistakes and weak chapters" nav={studentNav} active="/app/practice">
      <GenericWorkspace
        icon={BookOpen}
        title="Build a focused practice set"
        copy="Choose subject, chapter, difficulty, question type, and timing mode. Saved mistakes are ready for spaced repetition."
        actions={[["Start drill", "/app/attempts/live-jee-main"], ["Review mistakes", "/app/results/live-jee-main/review"]]}
      />
    </AppFrame>
  );
}

function GenericWorkspace({
  icon,
  title,
  copy,
  actions,
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
  actions: [string, string][];
}) {
  return (
    <div className="workspace">
      <Card>
        <div className="grid two">
          <div className="stack">
            <IconWrap icon={icon} tone="ai" />
            <h2 className="h2">{title}</h2>
            <p className="lead">{copy}</p>
            <div className="hero-actions">
              {actions.map(([label, href], index) => (
                <ButtonLink key={label} href={href} variant={index === 0 ? "primary" : "secondary"}>
                  {label}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="grid">
            {["Empty state", "Loading skeleton", "Success state", "Error recovery"].map((state, index) => (
              <div className="row" key={state}>
                <span className={`status ${["primary", "ai", "success", "warning"][index] as Tone}`}>{index + 1}</span>
                <strong className="strong">{state}</strong>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function StudentSimplePage({ kind }: { kind: string }) {
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
  const page = map[kind] ?? map.search;
  return (
    <AppFrame title={page.title} subtitle={page.subtitle} nav={studentNav} active={`/app/${kind}`}>
      <GenericWorkspace
        icon={page.icon}
        title={page.title}
        copy={page.copy}
        actions={[["Primary action", "/app"], ["Open help", "/app/help"]]}
      />
    </AppFrame>
  );
}

function WorkspaceOverview({
  type,
  nav,
  active,
  metrics,
}: {
  type: "creator" | "org" | "admin";
  nav: NavItem[];
  active: string;
  metrics: Metric[];
}) {
  const labels = {
    creator: ["Creator dashboard", "Revenue, tests, students, reviews, and publishing workflow"],
    org: ["Organization dashboard", "Branches, batches, assignments, live monitoring, and reports"],
    admin: ["Platform admin", "Queues, moderation, payments, support, and system health"],
  }[type];

  return (
    <AppFrame
      title={labels[0]}
      subtitle={labels[1]}
      nav={nav}
      active={active}
      cta={<ButtonLink href={type === "creator" ? "/creator/tests/new" : type === "org" ? "/org/assignments" : "/admin/support"} compact><Plus size={16} /> New action</ButtonLink>}
    >
      <div className="workspace">
        <div className="grid four">
          {metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
        </div>
        <div className="grid two">
          <Card>
            <div className="stack">
              <h2 className="h3">Priority queue</h2>
              <TestTable />
            </div>
          </Card>
          <Card>
            <div className="stack">
              <span className="eyebrow ai">AI summary</span>
              <h2 className="h3">Key action for this workspace</h2>
              <p>
                {type === "creator"
                  ? "Update three high-traffic tests and reply to recent reviews to improve conversion."
                  : type === "org"
                    ? "Batch 12 needs reminders before the Sunday full mock."
                    : "Moderation and payment queues are within SLA, but two webhook retries need review."}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </AppFrame>
  );
}

function WorkspaceSectionPage({
  root,
  section,
}: {
  root: "creator" | "org" | "admin";
  section: string;
}) {
  const nav = root === "creator" ? creatorNav : root === "org" ? orgNav : adminNav;
  const active = `/${root}/${section}`;
  const item = nav.find((entry) => entry.href === active) ?? nav[0];
  const copy = {
    creator: "Creator workflows include test management, question bank, publishing, reviews, revenue, and payout operations.",
    org: "Institute workflows include users, roles, batches, assignments, live tests, reports, billing, integrations, and audit logs.",
    admin: "Platform workflows include support, moderation, payments, content governance, feature rollout, and operational health.",
  }[root];

  return (
    <AppFrame title={item.label} subtitle={`${root} workspace`} nav={nav} active={active}>
      <GenericWorkspace
        icon={item.icon}
        title={item.label}
        copy={copy}
        actions={[
          [root === "creator" ? "Create test" : root === "org" ? "Create assignment" : "Open queue", `/${root}`],
          ["View analytics", `/${root}/analytics`],
        ]}
      />
    </AppFrame>
  );
}

function CreatorNewTestPage() {
  return (
    <AppFrame title="New test" subtitle="Setup wizard, sections, scoring, and publishing" nav={creatorNav} active="/creator/tests">
      <div className="workspace">
        <Card>
          <div className="grid two">
            <form className="form-grid">
              <span className="eyebrow">Test setup</span>
              <h2 className="h2">Create the draft structure first.</h2>
              <input className="input" placeholder="Test title" defaultValue="JEE Main Rank Sprint 2026" />
              <select className="select" defaultValue="jee">
                <option value="jee">JEE Main</option>
                <option value="neet">NEET</option>
                <option value="cat">CAT</option>
              </select>
              <input className="input" placeholder="Duration" defaultValue="180 minutes" />
              <ButtonLink href="/creator/tests/jee-main-rank-sprint/edit">Continue builder</ButtonLink>
            </form>
            <div className="stack">
              <span className="eyebrow ai">AI outline</span>
              <h3 className="h3">Suggested blueprint</h3>
              {["Physics 30 questions", "Chemistry 30 questions", "Mathematics 30 questions", "Negative marking enabled"].map((item) => (
                <div className="row" key={item}><CheckCircle2 color="var(--success)" /> {item}</div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}

function LegalPage({ page }: { page?: string }) {
  return (
    <PublicShell>
      <section className="container section">
        <Card>
          <div className="stack">
            <span className="eyebrow">Legal</span>
            <h1 className="h1" style={{ fontSize: 44 }}>
              {page === "privacy" ? "Privacy Policy" : page === "refund-policy" ? "Refund Policy" : "Terms of Service"}
            </h1>
            <p className="lead">
              Placeholder policy page for the product blueprint. Production legal copy should
              be versioned, accepted, and linked to billing, marketplace, and institute flows.
            </p>
          </div>
        </Card>
      </section>
    </PublicShell>
  );
}

export function RouteRenderer({ segments }: { segments: string[] }) {
  const [root, second, third, fourth] = segments;

  if (root === "pricing") return <PricingPage />;
  if (root === "marketplace" && second) return <ListingPage slug={second} />;
  if (root === "marketplace") return <MarketplacePage />;
  if (root === "creators" || root === "institutes" || root === "resources" || root === "help" || root === "contact") {
    if ((root === "resources" || root === "help") && second) {
      return <PublicInfoPage kind={root} />;
    }
    return <PublicInfoPage kind={root} />;
  }
  if (root === "legal") return <LegalPage page={second} />;
  if (root === "auth") return <AuthPage mode={second ?? "login"} />;
  if (root === "onboarding") return <OnboardingPage role={second ?? "student"} />;

  if (root === "app") {
    if (!second) return <StudentDashboard />;
    if (second === "tests" && third && fourth === "start") return <StartTestPage slug={third} />;
    if (second === "tests" && third) return <TestDetail slug={third} />;
    if (second === "tests") return <TestsPage />;
    if (second === "attempts" && fourth === "submit") return <SubmitPage />;
    if (second === "attempts") return <AttemptPage />;
    if (second === "results" && fourth === "review") return <ReviewPage />;
    if (second === "results") return <ResultPage />;
    if (second === "analytics") return <AnalyticsPage />;
    if (second === "planner") return <PlannerPage />;
    if (second === "practice") return <PracticePage />;
    if (second === "marketplace" && third) return <ListingPage slug={third} inApp />;
    if (second === "marketplace") return <MarketplacePage inApp />;
    return <StudentSimplePage kind={second} />;
  }

  if (root === "creator") {
    if (!second) return <WorkspaceOverview type="creator" nav={creatorNav} active="/creator" metrics={creatorMetrics} />;
    if (second === "tests" && third === "new") return <CreatorNewTestPage />;
    return <WorkspaceSectionPage root="creator" section={second} />;
  }

  if (root === "org") {
    if (!second) return <WorkspaceOverview type="org" nav={orgNav} active="/org" metrics={orgMetrics} />;
    return <WorkspaceSectionPage root="org" section={second} />;
  }

  if (root === "admin") {
    if (!second) return <WorkspaceOverview type="admin" nav={adminNav} active="/admin" metrics={adminMetrics} />;
    return <WorkspaceSectionPage root="admin" section={second} />;
  }

  return <LandingPage />;
}

export const staticRoutes = [
  "pricing",
  "marketplace",
  "marketplace/rank-sprint-bundle",
  "creators",
  "institutes",
  "resources",
  "resources/exam-planning",
  "help",
  "help/getting-started",
  "contact",
  "legal/terms",
  "legal/privacy",
  "legal/refund-policy",
  "auth/login",
  "auth/signup",
  "auth/verify",
  "auth/forgot-password",
  "auth/reset-password",
  "onboarding",
  "onboarding/student",
  "onboarding/teacher",
  "onboarding/creator",
  "onboarding/institute",
  "app",
  "app/search",
  "app/notifications",
  "app/tests",
  "app/tests/jee-main-rank-sprint",
  "app/tests/jee-main-rank-sprint/start",
  "app/attempts/live-jee-main",
  "app/attempts/live-jee-main/submit",
  "app/results/live-jee-main",
  "app/results/live-jee-main/review",
  "app/analytics",
  "app/planner",
  "app/practice",
  "app/leaderboard",
  "app/achievements",
  "app/marketplace",
  "app/marketplace/rank-sprint-bundle",
  "app/subscription",
  "app/billing",
  "app/profile",
  "app/settings",
  "app/help",
  "creator",
  "creator/tests",
  "creator/tests/new",
  "creator/questions",
  "creator/questions/import",
  "creator/assignments",
  "creator/students",
  "creator/analytics",
  "creator/marketplace",
  "creator/revenue",
  "creator/payouts",
  "creator/reviews",
  "creator/settings",
  "org",
  "org/branches",
  "org/users",
  "org/roles",
  "org/batches",
  "org/tests",
  "org/assignments",
  "org/live",
  "org/reports",
  "org/billing",
  "org/integrations",
  "org/audit-logs",
  "org/settings",
  "admin",
  "admin/users",
  "admin/organizations",
  "admin/content",
  "admin/marketplace",
  "admin/payments",
  "admin/support",
  "admin/feature-flags",
  "admin/system-health",
  "admin/audit-logs",
];
