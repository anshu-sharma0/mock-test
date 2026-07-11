import { Star, CheckCircle } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GradientButton as ButtonLink } from "./GradientButton";
import type { marketplaceListings } from "@/app/_lib/data";

// Generate a deterministic gradient string based on the title length so it looks varied
const getGradient = (seed: number) => {
  const hues = [250, 320, 190, 45, 120];
  const hue1 = hues[seed % hues.length];
  const hue2 = hues[(seed + 1) % hues.length];
  return `linear-gradient(135deg, hsla(${hue1}, 80%, 65%, 0.15) 0%, hsla(${hue2}, 80%, 65%, 0.1) 100%)`;
};

export function ListingCard({ listing }: { listing: (typeof marketplaceListings)[number] }) {
  const gradient = getGradient(listing.title.length);
  
  return (
    <GlassCard hoverable padding="none" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header Mesh / Image area */}
      <div style={{ height: "140px", background: gradient, position: "relative", borderBottom: "1px solid var(--border)" }}>
        <span className="chip" style={{ position: "absolute", top: 12, left: 12, fontFamily: "var(--font-utility)", fontSize: "12px", background: "var(--surface)", backdropFilter: "blur(8px)" }}>
          {listing.category}
        </span>
        <span className="chip" style={{ position: "absolute", top: 12, right: 12, fontFamily: "var(--font-utility)", fontSize: "12px", background: "var(--surface)", backdropFilter: "blur(8px)" }}>
          {listing.tests} TESTS
        </span>
      </div>
      
      {/* Body Area */}
      <div className="stack" style={{ padding: "20px", flex: 1, gap: 12 }}>
        <div className="stack" style={{ gap: 4 }}>
          <h3 className="h3" style={{ fontSize: "20px", lineHeight: 1.2 }}>{listing.title}</h3>
          <div className="row" style={{ gap: 6, opacity: 0.8 }}>
            <span style={{ fontSize: "14px" }}>{listing.creator}</span>
            <CheckCircle size={14} color="var(--primary)" />
          </div>
        </div>
        
        <p style={{ margin: 0, fontSize: "14px", opacity: 0.8, flex: 1, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {listing.outcome}
        </p>
        
        <div className="row between" style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
          <div className="stack" style={{ gap: 2 }}>
            <strong className="strong" style={{ fontSize: "18px" }}>{listing.price}</strong>
            <span className="row" style={{ gap: 4, fontFamily: "var(--font-utility)", fontSize: "12px", opacity: 0.7 }}>
              <Star size={12} fill="var(--warning)" color="var(--warning)" />
              {listing.rating} (1.2k enrolled)
            </span>
          </div>
          <ButtonLink href={`/marketplace/${listing.slug}`} variant="secondary" size="compact">
            View Details
          </ButtonLink>
        </div>
      </div>
    </GlassCard>
  );
}
