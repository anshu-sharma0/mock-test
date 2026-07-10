import { Card } from "../ui/GlassCard";
import { activity } from "../../_lib/data";

export function ActivityTimeline() {
  return (
    <Card>
      <div className="stack">
        <h3 className="h3">Recent activity</h3>
        {activity.map((item, index) => (
          <div className="row" key={item}>
            <span className={`status ${index === 1 ? "ai" : "success"}`}>{index + 1}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
