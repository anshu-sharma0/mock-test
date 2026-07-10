import { Trophy, Star } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { GradientBadge } from "../ui/GradientBadge";

export function LeaderboardSnippet() {
  return (
    <GlassCard hoverable>
      <div className="stack">
        <div className="row between">
          <h3 className="h3">Leaderboard</h3>
          <GradientBadge label="Top 9%" tone="success" icon={Trophy} />
        </div>
        {["Aarav", "You", "Mira", "Kabir"].map((name, index) => (
          <div className="row between" key={name} style={name === "You" ? { fontWeight: 800, color: "var(--heading)" } : {}}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {name === "You" ? <Star size={14} fill="var(--warning)" color="var(--warning)" /> : null}
              {index + 4}. {name}
            </span>
            <strong className="strong" style={name === "You" ? { background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : {}}>
              {[812, 804, 798, 792][index]}
            </strong>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
