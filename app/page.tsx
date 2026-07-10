import type { LucideIcon } from "lucide-react";
import { Brain, CalendarDays, ChevronRight, Clock, LineChart, Sparkles, Star, Target, Trophy } from "lucide-react";
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
