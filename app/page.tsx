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
        <section className="section compact" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "rgba(255, 255, 255, 0.02)" }}>
          <div className="container">
            <div className="row wrap between" style={{ opacity: 0.8, gap: "24px", justifyContent: "center" }}>
              <span className="eyebrow" style={{ border: "none", boxShadow: "none", background: "transparent", fontSize: "16px", fontFamily: "var(--font-utility)" }}>
                TRUSTED BY
              </span>
              <div className="row wrap" style={{ gap: "32px", fontFamily: "var(--font-utility)", color: "var(--heading)", fontSize: "15px" }}>
                <span>1.2M+ ATTEMPTS MODELED</span>
                <span>•</span>
                <span>840+ COACHING TEAMS</span>
                <span>•</span>
                <span>3.6K+ CREATORS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Core Workflow (The Sequence) */}
        <section className="section lg">
          <div className="container">
            <SectionHead
              eyebrow="The Methodology"
              title="A chronological journey of improvement."
              copy="Stop guessing what to study. Our platform tightens the loop from attempt to mastery using a structured, AI-driven process."
            />
            <div className="grid three">
              <Card hover className="pad">
                <div className="stack" style={{ gap: 16 }}>
                  <span style={{ fontFamily: "var(--font-utility)", fontSize: "48px", color: "var(--primary)", fontWeight: 800, lineHeight: 1 }}>01</span>
                  <h3 className="h3">Attempt</h3>
                  <p style={{ margin: 0 }}>Take adaptive tests or timed practice drills that perfectly simulate real exam pressure and environment.</p>
                </div>
              </Card>
              <Card hover className="pad">
                <div className="stack" style={{ gap: 16 }}>
                  <span style={{ fontFamily: "var(--font-utility)", fontSize: "48px", color: "var(--ai)", fontWeight: 800, lineHeight: 1 }}>02</span>
                  <h3 className="h3">Review</h3>
                  <p style={{ margin: 0 }}>AI analyzes your speed, accuracy, and identifies weak chapters instantly, turning data into clear insights.</p>
                </div>
              </Card>
              <Card hover className="pad">
                <div className="stack" style={{ gap: 16 }}>
                  <span style={{ fontFamily: "var(--font-utility)", fontSize: "48px", color: "var(--success)", fontWeight: 800, lineHeight: 1 }}>03</span>
                  <h3 className="h3">Plan</h3>
                  <p style={{ margin: 0 }}>A daily study planner is automatically generated based on the specific gaps and mistakes in your results.</p>
                </div>
              </Card>
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
