import { Filter } from "lucide-react";
import { tests } from "@/app/_lib/data";
import { studentNav } from "@/app/_lib/navigation";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default function TestsPage() {
  return (
    <AppFrame title="Tests" subtitle="Discover, filter, and start the next attempt" nav={studentNav} active="/app/tests">
      <div className="workspace">
        <div className="row wrap">
          {["All", "Recommended", "Free", "Pro", "JEE", "NEET", "Timed", "Adaptive"].map((item) => (
            <span className="chip" key={item}><Filter size={14} /> {item}</span>
          ))}
        </div>
        <div className="grid three">
          {tests.map((test) => (
            <Card hover key={test.slug}>
              <div className="stack">
                <span className={`status ${test.tone}`}>{test.status}</span>
                <h3 className="h3">{test.title}</h3>
                <p>{test.meta}</p>
                <div className="row between">
                  <span className="chip">{test.creator}</span>
                  <strong className="strong">{test.price}</strong>
                </div>
                <ButtonLink href={`/app/tests/${test.slug}`}>View details</ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}
