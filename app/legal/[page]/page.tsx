import { PublicShell } from "@/app/_components/layout/PublicShell";
import { Card } from "@/app/_components/ui/GlassCard";

export default function LegalPage({ params }: { params: { page: string } }) {
  return (
    <PublicShell>
      <section className="container section">
        <Card>
          <div className="stack">
            <span className="eyebrow">Legal</span>
            <h1 className="h1" style={{ fontSize: 44 }}>
              {params.page === "privacy" ? "Privacy Policy" : params.page === "refund-policy" ? "Refund Policy" : "Terms of Service"}
            </h1>
            <p className="lead">
              Placeholder policy page for the product blueprint. Production legal copy should
              be versioned, accepted, and linked to billing, marketplace, and institute flows.
            </p>
          </div>
        </Card>
      </section>
    </PublicShell>
  );
}
