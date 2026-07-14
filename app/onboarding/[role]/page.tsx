import { ChevronRight } from "lucide-react";
import { PublicShell } from "@/app/_components/layout/PublicShell";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default async function OnboardingPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const cards = [
    ["Exam goal", "JEE Main 2026"],
    ["Target date", "12 weeks"],
    ["Daily study time", "2.5 hours"],
    ["Reminder style", "Planner and email"],
  ];

  return (
    <PublicShell>
      <section className="container section">
        <div className="grid two">
          <div className="stack">
            <span className="eyebrow ai">Onboarding</span>
            <h1 className="h1">Personalize the {role} journey before the first dashboard.</h1>
            <p className="lead">
              The onboarding flow captures enough context to make the first recommendation
              useful without turning signup into a long form.
            </p>
            <div className="hero-actions">
              <ButtonLink href={role === "student" ? "/app" : "/creator"}>
                Enter workspace <ChevronRight size={18} />
              </ButtonLink>
              <ButtonLink href="/onboarding/student" variant="secondary">
                Change role
              </ButtonLink>
            </div>
          </div>
          <Card>
            <div className="grid two">
              {cards.map(([label, value]) => (
                <div className="mini-stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </PublicShell>
  );
}
