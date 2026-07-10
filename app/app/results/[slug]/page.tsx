import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { AnalyticsCards } from "@/app/_components/sections/AnalyticsCards";
import { Chart } from "@/app/_components/sections/Chart";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default function ResultPage({ params }: { params: { slug: string } }) {
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
              <ButtonLink href={`/app/results/${params.slug}/review`} variant="secondary">
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
