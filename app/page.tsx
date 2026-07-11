import type { LucideIcon } from "lucide-react";
import { Brain, CalendarDays, ChevronRight, Clock, LineChart, Sparkles, Star, Target, Trophy, ArrowRight } from "lucide-react";
import type { Tone } from "./_lib/types";
import { marketplaceListings } from "./_lib/data";
import { PublicShell } from "./_components/layout/PublicShell";
import { GlassCard, Card } from "./_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "./_components/ui/GradientButton";
import { IconWrap } from "./_components/ui/IconWrap";
import { SectionHead } from "./_components/ui/SectionHead";
import { MarketplacePreview } from "./_components/sections/MarketplacePreview";
import { PricingPreview } from "./_components/sections/PricingPreview";

function HeroPreview() {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-8 lg:mt-0">
      {/* Background Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none" />

      <GlassCard className="relative z-10 border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-2xl shadow-2xl p-6 lg:p-8 overflow-hidden rounded-[32px]">
        {/* Subtle top highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] shadow-sm">
            <div className="text-3xl lg:text-4xl font-black bg-gradient-to-br from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-1">74%</div>
            <div className="text-[11px] font-bold text-[var(--secondary-soft)] uppercase tracking-widest">Avg Score</div>
          </div>
          <div className="p-5 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] shadow-sm">
            <div className="text-3xl lg:text-4xl font-black bg-gradient-to-br from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-1">Top</div>
            <div className="text-[11px] font-bold text-[var(--secondary-soft)] uppercase tracking-widest">Rank Trend</div>
          </div>
          <div className="p-5 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] shadow-sm">
            <div className="text-3xl lg:text-4xl font-black bg-gradient-to-br from-orange-400 to-rose-500 bg-clip-text text-transparent mb-1">12<span className="text-xl">D</span></div>
            <div className="text-[11px] font-bold text-[var(--secondary-soft)] uppercase tracking-widest">Streak</div>
          </div>
        </div>

        <div className="flex items-end gap-3 h-[160px] mb-8 p-5 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] shadow-inner">
          {[42, 58, 52, 76, 68, 86, 74].map((height, index) => (
            <div key={index} className="flex-1 bg-[var(--surface)] rounded-t-lg relative overflow-hidden group">
              <div
                className={`absolute bottom-0 left-0 right-0 rounded-t-lg transition-all duration-1000 ${index === 4 ? 'bg-gradient-to-t from-emerald-500/40 to-emerald-400' :
                  index === 5 ? 'bg-gradient-to-t from-violet-500/40 to-violet-400' :
                    'bg-gradient-to-t from-blue-500/40 to-blue-400'
                  }`}
                style={{ height: `${height}%` }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl border border-violet-500/30 bg-violet-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 blur-[50px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-8 h-8 rounded-xl bg-violet-500/20 text-violet-500 flex items-center justify-center shadow-inner">
              <Sparkles size={16} />
            </div>
            <strong className="text-violet-500 dark:text-violet-400 font-bold tracking-widest uppercase text-xs">AI Insight</strong>
          </div>
          <p className="text-[15px] text-[var(--body)] leading-relaxed relative z-10">
            Physics accuracy rose, but time per electrostatics question is still <span className="text-[var(--heading)] font-bold">34 seconds above your target</span>. Review 18 saved mistakes before the next full mock.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}

export default function LandingPage() {
  return (
    <PublicShell>
      <main>
        {/* 1. The Hero Section */}
        <section className="container hero section hero">
          <div className="stack" style={{ gap: 24 }}>
            <span className="eyebrow ai">
              <Sparkles size={16} /> Precision Mock Tests
            </span>
            <h1 className="h1">Master your exams with AI precision.</h1>
            <p className="lead">
              Go beyond simple scores. MockTestZone uses AI to analyze your weak chapters, speed, and accuracy to tell you exactly what to study next.
            </p>
            <div className="hero-actions" style={{ marginTop: 12 }}>
              <ButtonLink href="/auth/signup">
                Start Free Practice <ChevronRight size={18} />
              </ButtonLink>
              <ButtonLink href="/marketplace" variant="secondary">
                Explore Marketplace
              </ButtonLink>
            </div>
          </div>
          <HeroPreview />
        </section>

        {/* 2. Social Proof */}
        <section className="py-12 border-y border-[var(--border)] relative overflow-hidden bg-gradient-to-r from-transparent via-[var(--surface-hover)] to-transparent">
          <div className="absolute inset-0 bg-[var(--primary)]/5 blur-3xl pointer-events-none" />
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 opacity-80">
              <span className="text-sm font-bold text-[var(--secondary-soft)] uppercase tracking-widest font-utility">Trusted By</span>
              <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 font-utility text-[var(--heading)] font-bold text-sm lg:text-base">
                <span>1.2M+ ATTEMPTS</span>
                <span className="text-[var(--border)] hidden md:block">|</span>
                <span>840+ COACHING TEAMS</span>
                <span className="text-[var(--border)] hidden md:block">|</span>
                <span>3.6K+ CREATORS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Core Workflow (The Sequence) */}
        <section className="section lg relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="container relative z-10">
            <SectionHead
              eyebrow="The Methodology"
              title="A chronological journey of improvement."
              copy="Stop guessing what to study. Our platform tightens the loop from attempt to mastery using a structured, AI-driven process."
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
              <GlassCard hoverable padding="large" className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors pointer-events-none" />
                <div className="stack gap-4 relative z-10">
                  <span className="font-utility text-5xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors">01</span>
                  <h3 className="text-2xl font-bold text-[var(--heading)] m-0">Attempt</h3>
                  <p className="text-[var(--body)] leading-relaxed m-0">Take adaptive tests or timed practice drills that perfectly simulate real exam pressure and environment.</p>
                </div>
              </GlassCard>

              <GlassCard hoverable padding="large" className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-[40px] group-hover:bg-violet-500/20 transition-colors pointer-events-none" />
                <div className="stack gap-4 relative z-10">
                  <span className="font-utility text-5xl font-black text-violet-500/20 group-hover:text-violet-500 transition-colors">02</span>
                  <h3 className="text-2xl font-bold text-[var(--heading)] m-0">Review</h3>
                  <p className="text-[var(--body)] leading-relaxed m-0">AI analyzes your speed, accuracy, and identifies weak chapters instantly, turning data into clear insights.</p>
                </div>
              </GlassCard>

              <GlassCard hoverable padding="large" className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] group-hover:bg-emerald-500/20 transition-colors pointer-events-none" />
                <div className="stack gap-4 relative z-10">
                  <span className="font-utility text-5xl font-black text-emerald-500/20 group-hover:text-emerald-500 transition-colors">03</span>
                  <h3 className="text-2xl font-bold text-[var(--heading)] m-0">Plan</h3>
                  <p className="text-[var(--body)] leading-relaxed m-0">A daily study planner is automatically generated based on the specific gaps and mistakes in your results.</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* 4. The Signature AI Layer */}
        <section className="section">
          <div className="container">
            <div className="card pad" style={{ background: "var(--surface)", borderColor: "var(--ai)", borderWidth: "1px", borderStyle: "solid" }}>
              <div className="grid two" style={{ alignItems: "center" }}>
                <div className="stack" style={{ gap: 16 }}>
                  <span className="eyebrow ai">Signature AI Layer</span>
                  <h2 className="h2">Insights that actually explain what to do next.</h2>
                  <p className="lead">
                    Charts are nice, but action is better. Our AI summarizes your mistakes, predicts your readiness, and gives you a concrete study plan without overwhelming you with noise.
                  </p>
                  <div style={{ marginTop: 8 }}>
                    <ButtonLink href="/app/analytics" variant="secondary">
                      View analytics flow <ArrowRight size={16} />
                    </ButtonLink>
                  </div>
                </div>
                <div className="grid" style={{ gap: 16 }}>
                  <div className="mini-stat" style={{ opacity: 0.7 }}>
                    <span className="eyebrow" style={{ marginBottom: 8 }}>Before</span>
                    <strong className="strong" style={{ fontSize: "16px", fontFamily: "var(--font-body)" }}>Just a score and a confusing chart.</strong>
                    <p style={{ margin: "4px 0 0", fontSize: "14px" }}>Score dropped from 76% to 69%. Student sees a chart but has no idea what to prioritize.</p>
                  </div>
                  <div className="ai-panel stack" style={{ margin: 0 }}>
                    <span className="eyebrow ai" style={{ marginBottom: 8, width: "fit-content" }}>After</span>
                    <strong className="strong" style={{ fontSize: "16px" }}>Clear AI direction.</strong>
                    <p style={{ margin: "4px 0 0", fontSize: "14px" }}>
                      "Your physics accuracy rose, but you spend 34s too long on electrostatics. Review these 18 mistakes before your next mock."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Dual Audiences */}
        <section className="section lg">
          <div className="container grid two">
            <Card hover className="pad">
              <div className="stack" style={{ gap: 16 }}>
                <span className="eyebrow" style={{ width: "fit-content" }}>For Students</span>
                <h2 className="h2">Take control of your preparation.</h2>
                <p className="lead">Prepare smarter, not harder. Find the perfect premium mock tests for your exam and track your true readiness.</p>
                <div style={{ marginTop: 12 }}>
                  <ButtonLink href="/marketplace">Browse Tests <ChevronRight size={16} /></ButtonLink>
                </div>
              </div>
            </Card>
            <Card hover className="pad">
              <div className="stack" style={{ gap: 16 }}>
                <span className="eyebrow ai" style={{ width: "fit-content" }}>For Institutes & Creators</span>
                <h2 className="h2">Monetize your expertise.</h2>
                <p className="lead">Scale your coaching. Host adaptive tests, deeply analyze student data, and build a scalable revenue stream.</p>
                <div style={{ marginTop: 12 }}>
                  <ButtonLink href="/creator" variant="secondary">Become a Creator <ChevronRight size={16} /></ButtonLink>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 6. Marketplace Teaser */}
        <MarketplacePreview />

        {/* 7. The Final Anchor */}
        <section className="section lg" style={{ textAlign: "center" }}>
          <div className="container stack" style={{ alignItems: "center", gap: 32 }}>
            <h2 className="h1" style={{ maxWidth: 800 }}>Ready to stop guessing and start improving?</h2>
            <ButtonLink href="/auth/signup">
              Create Free Account <ChevronRight size={18} />
            </ButtonLink>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
