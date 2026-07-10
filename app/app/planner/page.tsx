import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default function PlannerPage() {
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
