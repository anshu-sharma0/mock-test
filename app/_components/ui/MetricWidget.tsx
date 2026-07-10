import type { Metric } from "../../_lib/types";
import { GlassCard } from "./GlassCard";
import { GradientBadge } from "./GradientBadge";

export function MetricWidget({ metric }: { metric: Metric }) {
  const tone = metric.tone ?? "primary";
  return (
    <GlassCard className="metric">
      <div className="stack">
        <GradientBadge label={metric.trend} tone={tone} />
        <span className={`metric-value ${tone}`}>{metric.value}</span>
        <span className="metric-label">{metric.label}</span>
      </div>
    </GlassCard>
  );
}

/** MetricCard — backward-compat alias for MetricWidget */
export function MetricCard({ metric }: { metric: Metric }) {
  return <MetricWidget metric={metric} />;
}
