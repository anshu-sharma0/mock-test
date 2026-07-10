import { GradientBadge } from "@/app/_components/ui/GradientBadge";
import { ButtonLink } from "@/app/_components/ui/GradientButton";
import { Logo } from "@/app/_components/ui/Logo";
import { Clock, CheckCircle2, ChevronRight } from "lucide-react";

export default function AttemptPage({ params }: { params: { slug: string } }) {
  const options = [
    "The electric field is zero at the midpoint.",
    "The potential is zero at the midpoint.",
    "Both field and potential are zero at the midpoint.",
    "Neither field nor potential is zero at the midpoint.",
  ];

  return (
    <div className="test-shell">
      <header className="test-topbar">
        <div className="container test-topbar-inner">
          <Logo href="/app" />
          <div className="row wrap">
            <span className="chip"><Clock size={16} /> 01:22:18</span>
            <span className="chip">Question 18 of 90</span>
            <GradientBadge label="Autosaved" tone="success" icon={CheckCircle2} />
          </div>
        </div>
      </header>
      <main className="container test-layout">
        <section className="question-card" style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(16px)", border: "1px solid rgba(226,232,240,0.8)" }}>
          <div className="row between wrap">
            <GradientBadge label="Physics - Electrostatics" tone="primary" />
            <span className="muted">Single correct answer</span>
          </div>
          <div style={{ margin: "18px 0" }}>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: "42%", background: "var(--gradient-primary)" }} />
            </div>
          </div>
          <h1 className="h2">
            Two equal and opposite charges are placed at equal distance from a point.
            Which statement is correct for that point?
          </h1>
          <div className="option-list">
            {options.map((option, index) => (
              <div className={`option ${index === 1 ? "selected" : ""}`} key={option}>
                <span className="option-key">{index + 1}</span>
                <span>{option}</span>
              </div>
            ))}
          </div>
          <div className="row between wrap">
            <ButtonLink href={`/app/attempts/${params.slug}`} variant="secondary">
              Previous
            </ButtonLink>
            <div className="row wrap">
              <ButtonLink href={`/app/attempts/${params.slug}`} variant="secondary">
                Mark for review
              </ButtonLink>
              <ButtonLink href={`/app/attempts/${params.slug}/submit`}>
                Next <ChevronRight size={18} />
              </ButtonLink>
            </div>
          </div>
        </section>
        <aside className="navigator">
          <div className="stack">
            <h2 className="h4">Question navigator</h2>
            <div className="nav-grid">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  className={`nav-tile ${index < 12 ? "answered" : index === 17 ? "review" : index > 20 ? "skipped" : ""}`}
                  key={index}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <div className="grid two">
              <span className="chip">Answered 12</span>
              <span className="chip">Review 1</span>
              <span className="chip">Skipped 4</span>
              <span className="chip">Left 73</span>
            </div>
            <ButtonLink href={`/app/attempts/${params.slug}/submit`} variant="danger">
              Submit test
            </ButtonLink>
          </div>
        </aside>
      </main>
    </div>
  );
}
