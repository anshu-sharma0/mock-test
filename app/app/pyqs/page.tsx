import Link from "next/link";
import { Search, Filter, BookOpen, Clock, Download } from "lucide-react";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { GlassCard } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

// Mock Data for PYQs
const featuredPYQs = [
  { id: 1, title: "JEE Advanced 2023 - Paper 1", category: "Engineering", questions: 54, time: "180 Mins", difficulty: "Hard" },
  { id: 2, title: "NEET UG 2023 - Complete Paper", category: "Medical", questions: 200, time: "200 Mins", difficulty: "Medium" },
  { id: 3, title: "UPSC Prelims 2023 - GS Paper 1", category: "Civil Services", questions: 100, time: "120 Mins", difficulty: "Hard" },
  { id: 4, title: "GATE CS 2023", category: "Engineering", questions: 65, time: "180 Mins", difficulty: "Hard" },
  { id: 5, title: "CAT 2022 - Slot 1", category: "Management", questions: 66, time: "120 Mins", difficulty: "Medium" },
  { id: 6, title: "SSC CGL Tier 1 - 2023", category: "Govt Exams", questions: 100, time: "60 Mins", difficulty: "Easy" },
];

export const metadata = {
  title: "Previous Year Questions (PYQ) | MockTestZone",
  description: "Practice authentic Previous Year Question papers with detailed solutions and AI-powered performance analytics.",
};

export default function PYQPage() {
  return (
    <AppFrame title="Previous Year Papers" subtitle="Practice with authentic past papers and instantly analyze your performance." nav={studentNav} active="/app/pyqs">
      <div className="workspace">
        {/* SEARCH & FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[var(--surface)] p-4 rounded-2xl border border-[var(--border)] shadow-sm">
          <div className="relative w-full max-w-[400px]">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search exam name, year, subject..."
              className="w-full h-[44px] pl-[44px] pr-[16px] rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--heading)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] transition-all"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button className="flex shrink-0 items-center gap-2 h-[44px] px-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--secondary-soft)] font-bold text-sm hover:bg-[var(--surface-hover)] transition-colors">
              <Filter size={16} /> Filters
            </button>
            <div className="h-[24px] w-[1px] bg-[var(--border)] mx-1"></div>
            <button className="flex shrink-0 items-center h-[44px] px-5 rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)] font-bold text-sm transition-colors">
              All Exams
            </button>
            <button className="flex shrink-0 items-center h-[44px] px-5 rounded-xl border border-transparent text-[var(--secondary-soft)] font-bold text-sm hover:bg-[var(--surface-hover)] transition-colors">
              Engineering
            </button>
            <button className="flex shrink-0 items-center h-[44px] px-5 rounded-xl border border-transparent text-[var(--secondary-soft)] font-bold text-sm hover:bg-[var(--surface-hover)] transition-colors">
              Medical
            </button>
          </div>
        </div>

        {/* PYQ PAPERS GRID */}
        <div>
          <h2 className="h3 mb-4">Available Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {featuredPYQs.map((paper) => (
              <GlassCard key={paper.id} hoverable className="flex flex-col gap-5 bg-white dark:bg-[var(--surface)]">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-extrabold uppercase tracking-wide">
                      {paper.category}
                    </span>
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${paper.difficulty === 'Hard' ? 'bg-[#fee2e2] text-[#dc2626] dark:bg-red-500/10 dark:text-red-400' :
                      paper.difficulty === 'Medium' ? 'bg-[#fef3c7] text-[#d97706] dark:bg-amber-500/10 dark:text-amber-400' :
                        'bg-[#dcfce7] text-[#059669] dark:bg-emerald-500/10 dark:text-emerald-400'
                      }`}>
                      {paper.difficulty}
                    </span>
                  </div>
                  <h3 className="h3 text-[20px] mb-3 leading-tight">{paper.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-[var(--secondary-soft)] font-bold bg-[var(--surface-hover)] p-3 rounded-xl border border-[var(--border)]">
                    <span className="flex items-center gap-1.5"><BookOpen size={15} className="text-[var(--primary)]" /> {paper.questions} Qs</span>
                    <span className="flex items-center gap-1.5"><Clock size={15} className="text-[var(--primary)]" /> {paper.time}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between gap-3">
                  <ButtonLink href={`/tests/${paper.id}`} className="flex-1 text-center shadow-md">
                    Start Attempt
                  </ButtonLink>
                  <button className="h-[40px] w-[40px] shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--secondary-soft)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all shadow-sm">
                    <Download size={18} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/app/marketplace" className="btn secondary">
              View All Exams in Marketplace
            </Link>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
