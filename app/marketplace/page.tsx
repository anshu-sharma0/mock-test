import { PublicShell } from "../_components/layout/PublicShell";
import { ButtonLink } from "../_components/ui/GradientButton";
import { ListingCard } from "../_components/ui/ListingCard";
import { SectionHead } from "../_components/ui/SectionHead";
import { marketplaceListings } from "../_lib/data";

export default function MarketplacePage() {
  return (
    <PublicShell>
      <section className="container section">
        <div className="workspace">
          <SectionHead
            eyebrow="Marketplace"
            title="Find creator tests by exam, outcome, and trust."
            copy="Trending bundles, verified creators, category chips, ratings, previews, and purchase states are visible from the first screen."
            action={
              <ButtonLink href="/auth/signup" variant="secondary">
                Get started
              </ButtonLink>
            }
          />
          <div className="row wrap">
            {["JEE Main", "NEET", "CAT", "Banking", "UPSC", "Free", "Trending"].map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className="grid three">
            {marketplaceListings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
