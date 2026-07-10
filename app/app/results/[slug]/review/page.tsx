import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default function ReviewPage() {
  const reviewOptions = [
    ["Selected", "The potential is zero at the midpoint.", "wrong"],
    ["Correct", "The electric field is zero at the midpoint.", "correct"],
  ];

  return (
    <AppFrame title="Answer review" subtitle="Wrong, skipped, and marked questions" nav={studentNav} active="/app/analytics">
      <div className="workspace">
        <div className="row wrap">
          {["Wrong", "Skipped", "Marked", "Physics", "Slow"].map((item) => (
            <span className="chip" key={item}>{item}</span>
          ))}
        </div>
        <Card>
          <div className="stack">
            <span className="status error">Wrong - Electrostatics</span>
            <h2 className="h2">Why was this marked wrong?</h2>
            {reviewOptions.map(([label, text, state]) => (
              <div className={`option ${state}`} key={label}>
                <span className="option-key">{label[0]}</span>
                <span><strong>{label}:</strong> {text}</span>
              </div>
            ))}
            <div className="ai-panel">
              <strong className="strong">AI explanation</strong>
              <p style={{ marginBottom: 0 }}>
                Equal and opposite charges cancel potential as scalars differently from
                field as vectors. Revisit vector direction before retesting.
              </p>
            </div>
            <div className="row wrap">
              <ButtonLink href="/app/practice" variant="secondary">Add to practice</ButtonLink>
              <ButtonLink href="/app/planner" variant="secondary">Add to planner</ButtonLink>
              <ButtonLink href="/app/help" variant="ghost">Report issue</ButtonLink>
            </div>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}
