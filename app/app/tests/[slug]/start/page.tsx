import { Play, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { tests } from "@/app/_lib/data";
import { studentNav } from "@/app/_lib/navigation";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default function StartTestPage({ params }: { params: { slug: string } }) {
  const test = tests.find((item) => item.slug === params.slug);
  if (!test) {
    return notFound();
  }

  return (
    <AppFrame title="Start test" subtitle={test.title} nav={studentNav} active="/app/tests">
      <div className="workspace">
        <Card>
          <div className="grid two">
            <div className="stack">
              <span className="eyebrow">Final checkpoint</span>
              <h1 className="h1" style={{ fontSize: 44 }}>Begin when you can finish without interruption.</h1>
              <p className="lead">
                Timer, section rules, negative marking, autosave, and submit confirmation are enabled.
              </p>
              <ButtonLink href={`/app/attempts/${test.slug}`}>
                Start now <Play size={18} />
              </ButtonLink>
            </div>
            <div className="grid">
              {["Device ready", "Network stable", "Autosave enabled", "90 questions loaded"].map((item) => (
                <div className="row" key={item}>
                  <CheckCircle2 color="var(--success)" />
                  <strong className="strong">{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}
