import { Card } from "../ui/GlassCard";
import { ButtonLink } from "../ui/GradientButton";
import { SectionHead } from "../ui/SectionHead";

export function PricingPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Pricing"
          title="Plans for students, creators, and institutions."
          copy="Start with the student loop, then scale into creator monetization and institute management."
        />
        <div className="grid four">
          {[
            ["Free", "$0", "Basic tests and starter analytics"],
            ["Pro", "$12", "AI planner, full analytics, premium attempts"],
            ["Creator", "$29", "Publish paid tests and manage payouts"],
            ["Enterprise", "Custom", "Seats, reports, roles, and support"],
          ].map(([name, price, copy]) => (
            <Card key={name} className={name === "Pro" ? "recommended" : ""}>
              <div className="stack">
                <span className={name === "Pro" ? "status primary" : "status success"}>
                  {name === "Pro" ? "Recommended" : name}
                </span>
                <span className="price">{price}</span>
                <p>{copy}</p>
                <ButtonLink href="/auth/signup" variant={name === "Pro" ? "primary" : "secondary"}>
                  Choose {name}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
