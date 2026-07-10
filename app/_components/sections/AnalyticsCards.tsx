import { MetricCard } from "../ui/MetricWidget";
import type { Tone } from "../../_lib/types";

export function AnalyticsCards() {
  return (
    <div className="grid five">
      {[
        ["Accuracy", "78%", "success"],
        ["Avg time", "1m 32s", "primary"],
        ["Correct", "64", "success"],
        ["Wrong", "19", "error"],
        ["Skipped", "7", "warning"],
      ].map(([label, value, tone]) => (
        <MetricCard key={label} metric={{ label, value, trend: label, tone: tone as Tone }} />
      ))}
    </div>
  );
}
