import { CheckCircle2 } from "lucide-react";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { creatorNav } from "@/app/_lib/navigation";
import { Card } from "@/app/_components/ui/GlassCard";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";

export default function CreatorNewTestPage() {
  return (
    <AppFrame title="New test" subtitle="Setup wizard, sections, scoring, and publishing" nav={creatorNav} active="/creator/tests">
      <div className="workspace">
        <Card>
          <div className="grid two">
            <form className="form-grid">
              <span className="eyebrow">Test setup</span>
              <h2 className="h2">Create the draft structure first.</h2>
              <input className="input" placeholder="Test title" defaultValue="JEE Main Rank Sprint 2026" />
              <select className="select" defaultValue="jee">
                <option value="jee">JEE Main</option>
                <option value="neet">NEET</option>
                <option value="cat">CAT</option>
              </select>
              <input className="input" placeholder="Duration" defaultValue="180 minutes" />
              <ButtonLink href="/creator/tests/jee-main-rank-sprint/edit">Continue builder</ButtonLink>
            </form>
            <div className="stack">
              <span className="eyebrow ai">AI outline</span>
              <h3 className="h3">Suggested blueprint</h3>
              {["Physics 30 questions", "Chemistry 30 questions", "Mathematics 30 questions", "Negative marking enabled"].map((item) => (
                <div className="row" key={item}><CheckCircle2 color="var(--success)" /> {item}</div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AppFrame>
  );
}
