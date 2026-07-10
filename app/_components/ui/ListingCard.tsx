import { Star } from "lucide-react";
import { Card } from "./GlassCard";
import { GradientButton as ButtonLink } from "./GradientButton";
import type { marketplaceListings } from "@/app/_lib/data";

export function ListingCard({ listing }: { listing: (typeof marketplaceListings)[number] }) {
  return (
    <Card hover>
      <div className="stack">
        <div className="row between">
          <span className="status primary">{listing.category}</span>
          <span className="row">
            <Star size={16} fill="var(--warning)" color="var(--warning)" />
            <strong className="strong">{listing.rating}</strong>
          </span>
        </div>
        <h3 className="h3">{listing.title}</h3>
        <p>{listing.outcome}</p>
        <div className="row between">
          <span className="muted">{listing.creator}</span>
          <strong className="strong">{listing.price}</strong>
        </div>
        <div className="row between">
          <span className="chip">{listing.tests}</span>
          <ButtonLink href={`/marketplace/${listing.slug}`} variant="secondary">
            Preview
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
