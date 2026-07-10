import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { AnalyticsCards } from "@/app/_components/sections/AnalyticsCards";
import { Chart } from "@/app/_components/sections/Chart";
import { Card } from "@/app/_components/ui/GlassCard";

export default function AnalyticsPage() {
  return (
    <AppFrame title="Analytics" subtitle="Performance, speed, accuracy, and weak chapters" nav={studentNav} active="/app/analytics">
      <div className="workspace">
        <AnalyticsCards />
        <div className="grid two">
          <Card><Chart /></Card>
          <Card>
            <div className="stack">
              <h3 className="h3">Weak chapter heatmap</h3>
              <div className="heatmap">
                {Array.from({ length: 28 }).map((_, index) => (
                  <span className={`heat-cell ${index % 5 === 0 ? "high" : index % 3 === 0 ? "mid" : "low"}`} key={index} />
                ))}
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <div className="grid three">
            {["Electrostatics", "Organic mechanisms", "Quadratic equations"].map((chapter, index) => (
              <div className="stack" key={chapter}>
                <span className={`status ${index === 0 ? "warning" : "primary"}`}>{index === 0 ? "Weak" : "Improving"}</span>
                <h3 className="h3">{chapter}</h3>
                <p>Recommended drill: {index + 2} sets this week.</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}
