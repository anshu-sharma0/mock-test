import type { LucideIcon } from "lucide-react";
import type { Tone } from "../../_lib/types";
import { Card } from "../ui/GlassCard";
import { IconWrap } from "../ui/IconWrap";
import { ButtonLink } from "../ui/GradientButton";

export function GenericWorkspace({
  icon,
  title,
  copy,
  actions,
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
  actions: [string, string][];
}) {
  return (
    <div className="workspace">
      <Card>
        <div className="grid two">
          <div className="stack">
            <IconWrap icon={icon} tone="ai" />
            <h2 className="h2">{title}</h2>
            <p className="lead">{copy}</p>
            <div className="hero-actions">
              {actions.map(([label, href], index) => (
                <ButtonLink key={label} href={href} variant={index === 0 ? "primary" : "secondary"}>
                  {label}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="grid">
            {["Empty state", "Loading skeleton", "Success state", "Error recovery"].map((state, index) => (
              <div className="row" key={state}>
                <span className={`status ${["primary", "ai", "success", "warning"][index] as Tone}`}>{index + 1}</span>
                <strong className="strong">{state}</strong>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
