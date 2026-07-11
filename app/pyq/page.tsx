import Link from "next/link";
import { ChevronRight, Search, Filter, BookOpen, Clock, BarChart, Download, CheckCircle, Sparkles, Star } from "lucide-react";
import { ButtonLink } from "../_components/ui/GradientButton";
import { SectionHead } from "../_components/ui/SectionHead";
import { PublicShell } from "../_components/layout/PublicShell";

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
    <PublicShell>
      <main>
        {/* HERO SECTION */}
        <section className="section">
          <div className="container">
            <div className="flex justify-center items-center">
              <div className="stack">
                <span className="eyebrow ai">
                  <Sparkles size={16} /> Authentic Papers
                </span>
                <h1 className="h1">
                  Master Your Exams with <span className="text-[var(--primary)]">Previous Year Papers</span>
                </h1>
                <p className="lead">
                  Get the exact feel of the real exam. Practice with officially conducted question papers, instantly analyze your weak areas, and check detailed step-by-step solutions.
                </p>
                <div className="hero-actions mt-4">
                  <ButtonLink href="#explore" variant="primary">
                    Explore PYQs <ChevronRight size={18} />
                  </ButtonLink>
                  <ButtonLink href="/auth/signup" variant="secondary">
                    Create Free Account
                  </ButtonLink>
                </div>
                <div className="trust-row mt-6">
                  <span className="trust-pill"><CheckCircle size={14} className="text-[var(--success)]" /> 10+ Years History</span>
                  <span className="trust-pill"><CheckCircle size={14} className="text-[var(--success)]" /> Detailed Solutions</span>
                  <span className="trust-pill"><CheckCircle size={14} className="text-[var(--success)]" /> AI Analytics</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SEARCH & FILTERS */}
        <section id="explore" className="section compact bg-[var(--surface-hover)] border-y border-[var(--border)]">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
              <div className="relative w-full max-w-[400px]">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                <input
                  type="text"
                  placeholder="Search exam name, year, subject..."
                  className="w-full h-[52px] pl-[44px] pr-[16px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--heading)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] transition-all shadow-sm"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <button className="flex shrink-0 items-center gap-2 h-[44px] px-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--secondary-soft)] font-bold text-sm hover:bg-[var(--surface-hover)] transition-colors">
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
          </div>
        </section>

        {/* PYQ PAPERS GRID */}
        <section className="section bg-[var(--bg)]">
          <div className="container">
            <SectionHead
              title="Trending Previous Papers"
              description="Start practicing the most frequently attempted papers by other aspirants."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {featuredPYQs.map((paper) => (
                <div key={paper.id} className="card pad hover flex flex-col gap-5 bg-white dark:bg-[var(--surface)]">
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
                    <Link href={`/tests/${paper.id}`} className="btn compact primary flex-1 text-center shadow-md">
                      Start Attempt
                    </Link>
                    <button className="h-[40px] w-[40px] shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--secondary-soft)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all shadow-sm">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/marketplace" className="btn secondary">
                View All Question Papers
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="section">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-[32px]">
              <div className="card pad stack items-start">
                <div className="feature-icon success">
                  <CheckCircle size={24} />
                </div>
                <h3 className="h3">Exact Exam Interface</h3>
                <p className="muted">Practice on a UI that simulates the real exam environment. Eliminate exam anxiety and improve time management.</p>
              </div>
              <div className="card pad stack items-start">
                <div className="feature-icon ai">
                  <Sparkles size={24} />
                </div>
                <h3 className="h3">AI Performance Analysis</h3>
                <p className="muted">Get a detailed breakdown of your weak areas, time spent per question, and topic-wise accuracy instantly.</p>
              </div>
              <div className="card pad stack items-start">
                <div className="feature-icon">
                  <Star size={24} />
                </div>
                <h3 className="h3">Expert Solutions</h3>
                <p className="muted">Don&apos;t just know the right answer. Understand the concepts behind it with step-by-step detailed explanations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="section compact mb-12">
          <div className="container">
            <div className="gradient-banner text-center stack items-center py-12">
              <h2 className="h2 text-white max-w-[600px] mx-auto">Ready to benchmark your preparation?</h2>
              <p className="text-white/80 max-w-[500px] mx-auto text-lg">
                Join thousands of students who have boosted their scores by practicing previous year papers.
              </p>
              <div className="mt-6 flex justify-center">
                <Link href="/auth/signup" className="btn bg-white text-[var(--primary)] hover:bg-gray-50 border-none shadow-xl">
                  Get Started for Free
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
