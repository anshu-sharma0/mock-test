import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default function SubmitPage({ params }: { params: { slug: string } }) {
  return (
    <div className="test-shell">
      <section className="container section">
        <Card>
          <div className="stack">
            <span className="eyebrow">Submit confirmation</span>
            <h1 className="h1" style={{ fontSize: 44 }}>You still have 7 unanswered questions.</h1>
            <p className="lead">
              Marked for review: 3. Skipped: 4. Time left: 01:18:42.
            </p>
            <div className="hero-actions">
              <ButtonLink href={`/app/results/${params.slug}`}>
                Submit and view result
              </ButtonLink>
              <ButtonLink href={`/app/attempts/${params.slug}`} variant="secondary">
                Return to test
              </ButtonLink>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
