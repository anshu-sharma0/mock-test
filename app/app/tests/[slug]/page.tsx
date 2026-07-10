import { Card } from "@/app/_components/ui/GlassCard";
import { studentNav } from "@/app/_lib/navigation";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { tests } from "@/app/_lib/data";
import { Play } from "lucide-react";
import { ButtonLink } from "@/app/_components/ui/GradientButton";

export default function TestDetail({ params }: { params: { slug: string } }) {
  const test = tests.find((item) => item.slug === params.slug) ?? tests[0];
  return (
    <AppFrame title={test.title} subtitle="Instructions, syllabus, attempts, and access" nav={studentNav} active="/app/tests">
      <div className="workspace">
        <div className="grid two">
          <Card>
            <div className="stack">
              <span className={`status ${test.tone}`}>{test.status}</span>
              <h1 className="h1" style={{ fontSize: 44 }}>{test.title}</h1>
              <p className="lead">{test.meta}</p>
              <div className="grid two">
                {["90 questions", "180 minutes", "+4 / -1 scoring", "3 attempts left"].map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
              <div className="hero-actions">
                <ButtonLink href={`/app/tests/${test.slug}/start`}>
                  Start test <Play size={18} />
                </ButtonLink>
                <ButtonLink href="/app/planner" variant="secondary">
                  Schedule
                </ButtonLink>
              </div>
            </div>
          </Card>
          <Card>
            <div className="stack">
              <h2 className="h3">Readiness</h2>
              <div className="mini-stat">
                <strong>{test.score}</strong>
                <span>Predicted score based on last 8 attempts</span>
              </div>
              <p>AI recommends a quick formulas review before starting this full-length attempt.</p>
            </div>
          </Card>
        </div>
        <Card>
          <div className="grid three">
            {["Physics", "Chemistry", "Mathematics"].map((subject, index) => (
              <div className="stack" key={subject}>
                <h3 className="h3">{subject}</h3>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${[72, 64, 81][index]}%` }} />
                </div>
                <span className="muted">{[72, 64, 81][index]}% syllabus confidence</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}
