import { marketplaceListings } from "../../_lib/data";
import { GradientButton as ButtonLink } from "../ui/GradientButton";
import { ListingCard } from "../ui/ListingCard";
import { SectionHead } from "../ui/SectionHead";

export function MarketplacePreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Marketplace"
          title="Premium creator tests with trust signals built in."
          copy="Students can browse by exam, difficulty, rating, creator, and outcome."
          action={
            <ButtonLink href="/app/marketplace" variant="secondary">
              Explore all
            </ButtonLink>
          }
        />
        <div className="grid three">
          {marketplaceListings.map((listing) => (
            <ListingCard listing={listing} key={listing.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
