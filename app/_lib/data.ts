import type { Metric, Tone } from "./types";

export const tests = [
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

export const marketplaceListings = [
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

export const dashboardMetrics: Metric[] = [
  { label: "Tests done", value: "38", trend: "+6 this week" },
  { label: "Avg score", value: "74%", trend: "+8% in 30 days" },
  { label: "Rank trend", value: "Top 9%", trend: "up 3 bands" },
  { label: "Weak subjects", value: "3", trend: "2 improving", tone: "warning" },
];

export const creatorMetrics: Metric[] = [
  { label: "Revenue", value: "$18.4k", trend: "+16% month over month" },
  { label: "Subscribers", value: "4,820", trend: "+312 this month" },
  { label: "Published tests", value: "64", trend: "8 updated" },
  { label: "Avg rating", value: "4.8", trend: "1,240 reviews", tone: "success" },
];

export const orgMetrics: Metric[] = [
  { label: "Active students", value: "18,420", trend: "94% active weekly" },
  { label: "Completion", value: "81%", trend: "+5% after reminders" },
  { label: "Live tests", value: "12", trend: "3 need monitoring", tone: "warning" },
  { label: "Avg score", value: "68%", trend: "+7% quarter", tone: "success" },
];

export const adminMetrics: Metric[] = [
  { label: "Attempts today", value: "212k", trend: "99.98% save success" },
  { label: "Payment success", value: "97.4%", trend: "+1.2%" },
  { label: "Moderation queue", value: "43", trend: "12 high priority", tone: "warning" },
  { label: "Open tickets", value: "128", trend: "24 urgent", tone: "error" },
];

export const activity = [
  "Completed JEE Main Rank Sprint with 78%",
  "AI planner added 4 Electrostatics review blocks",
  "Unlocked 7 day consistency achievement",
  "Moved Algebra speed from weak to improving",
];
