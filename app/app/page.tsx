import { Flame, Play } from "lucide-react";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { MetricCard } from "@/app/_components/ui/MetricWidget";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";
import { TestTable } from "@/app/_components/sections/TestTable";
import { ActivityTimeline } from "@/app/_components/sections/ActivityTimeline";
import { LeaderboardSnippet } from "@/app/_components/sections/LeaderboardSnippet";
import { dashboardMetrics } from "@/app/_lib/data";
import { studentNav } from "@/app/_lib/navigation";

export default function StudentDashboard() {
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
                <ButtonLink href="/app/tests" variant="secondary">
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
