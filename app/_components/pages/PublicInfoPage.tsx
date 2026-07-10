import { Building2, ChevronRight, FileText, HelpCircle, MessageSquare, Store } from "lucide-react";
import { PublicShell } from "../layout/PublicShell";
import { Card } from "../ui/GlassCard";
import { IconWrap } from "../ui/IconWrap";
import { GradientButton as ButtonLink } from "../ui/GradientButton";

export function PublicInfoPage({
  kind,
}: {
  kind: "creators" | "institutes" | "resources" | "help" | "contact";
}) {
  const config = {
    creators: {
      eyebrow: "Creators",
      title: "Turn test expertise into a premium creator business.",
      copy: "Create, publish, analyze, sell, and improve mock tests from one calm workspace.",
      icon: Store,
      cta: "Start as creator",
    },
    institutes: {
      eyebrow: "Institutes",
      title: "Run high-volume test programs across branches and batches.",
      copy: "Manage users, assignments, live monitoring, reports, billing, and audit logs.",
      icon: Building2,
      cta: "Plan institute rollout",
    },
    resources: {
      eyebrow: "Resources",
      title: "Exam strategy content connected to real test actions.",
      copy: "Guides, study methods, result interpretation, and preparation templates.",
      icon: FileText,
      cta: "Read guide",
    },
    help: {
      eyebrow: "Help Center",
      title: "Fast answers for tests, billing, marketplace, and accounts.",
      copy: "Search support topics, view popular articles, or create a ticket with context.",
      icon: HelpCircle,
      cta: "Contact support",
    },
    contact: {
      eyebrow: "Contact",
      title: "Reach sales, support, or partnerships without friction.",
      copy: "Route your request to the right team with a concise context-first form.",
      icon: MessageSquare,
      cta: "Send request",
    },
  }[kind];

  return (
    <PublicShell>
      <section className="container section">
        <div className="grid two">
          <div className="stack" style={{ gap: 22 }}>
            <span className="eyebrow">{config.eyebrow}</span>
            <h1 className="h1">{config.title}</h1>
            <p className="lead">{config.copy}</p>
            <ButtonLink href={kind === "contact" ? "/help" : "/auth/signup"}>
              {config.cta} <ChevronRight size={18} />
            </ButtonLink>
          </div>
          <Card>
            <div className="stack">
              <IconWrap icon={config.icon} tone={kind === "help" ? "ai" : "primary"} />
              <h2 className="h2">Blueprint-backed surface</h2>
              <p>
                This page is wired into the platform IA and will expand into its full
                content, forms, filters, and conversion paths as the backend services arrive.
              </p>
            </div>
          </Card>
        </div>
        <div className="grid three" style={{ marginTop: 32 }}>
          {["Discover", "Decide", "Continue"].map((title, index) => (
            <Card key={title} hover>
              <div className="stack">
                <span className="status primary">Step {index + 1}</span>
                <h3 className="h3">{title}</h3>
                <p>
                  {index === 0
                    ? "Clear search, categories, and trust proof."
                    : index === 1
                      ? "Outcome-focused information and one primary action."
                      : "Routes into signup, dashboard, support, or sales."}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
