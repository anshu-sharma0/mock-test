import { notFound } from "next/navigation";
import { marketplaceListings } from "@/app/_lib/data";
import { PublicShell } from "@/app/_components/layout/PublicShell";
import { SectionHead } from "@/app/_components/ui/SectionHead";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";
import { CheckCircle2, ChevronRight } from "lucide-react";

// In Next.js App Router, page props receive `params` as a Promise in Next 15+ or object in older.
// Using standard object here based on current common Next.js versions.
export default function ListingPage({ params }: { params: { slug: string } }) {
  const listing = marketplaceListings.find((item) => item.slug === params.slug);

  if (!listing) {
    return notFound();
  }

  return (
    <PublicShell>
      <section className="container section">
        <div className="grid two">
          <div className="stack">
            <SectionHead
              eyebrow={listing.category}
              title={listing.title}
              copy={listing.outcome}
            />
            <div className="card pad">
              <div className="stack">
                <div className="row between">
                  <span className="eyebrow ai">Purchase bundle</span>
                  <strong className="h3">{listing.price}</strong>
                </div>
                <p style={{ margin: 0 }}>
                  Includes 12 tests, AI review insights, and one-on-one strategy email.
                </p>
                <ButtonLink href="/auth/signup">
                  Unlock bundle <ChevronRight size={18} />
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="stack">
            <h3 className="h3">What's included</h3>
            {[
              "3 full length mock tests (180 mins each)",
              "9 chapter specific speed drills",
              "Video solutions for physics and math",
              "AI percentile prediction",
            ].map((item) => (
              <div className="row" key={item}>
                <CheckCircle2 color="var(--success)" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
