import { Plus } from "lucide-react";
import type { NavItem, Metric } from "../../_lib/types";
import { AppFrame } from "../layout/AppFrame";
import { Card } from "../ui/GlassCard";
import { MetricCard } from "../ui/MetricWidget";
import { ButtonLink } from "../ui/GradientButton";
import { TestTable } from "./TestTable";

export function WorkspaceOverview({
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
