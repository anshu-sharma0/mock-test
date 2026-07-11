import { Search, ChevronRight, SlidersHorizontal, BookOpen, Star, Building2, UserCircle } from "lucide-react";
import { PublicShell } from "../_components/layout/PublicShell";
import { GradientButton as ButtonLink } from "../_components/ui/GradientButton";
import { ListingCard } from "../_components/ui/ListingCard";
import { SectionHead } from "../_components/ui/SectionHead";
import { marketplaceListings } from "../_lib/data";

export default function MarketplacePage() {
  const categories = [
    { name: "Engineering (JEE)", count: 124 },
    { name: "Medical (NEET)", count: 89 },
    { name: "Civil Services", count: 45 },
    { name: "Banking & Finance", count: 210 },
    { name: "State Boards", count: 56 },
    { name: "Language Tests", count: 34 }
  ];

  return (
    <PublicShell>
      <main>
        {/* 1. Search-Centric Hero */}
        <section className="section hero" style={{ textAlign: "center" }}>
          <div className="container stack" style={{ alignItems: "center", gap: 32 }}>
            <h1 className="h1">Find the perfect mock test.</h1>

            <div style={{ width: "100%", maxWidth: "600px", position: "relative" }}>
              <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }}>
                <Search size={24} />
              </div>
              <input
                type="text"
                placeholder="Search by exam name, creator, or topic..."
                style={{
                  width: "100%",
                  padding: "20px 20px 20px 60px",
                  fontSize: "18px",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  color: "var(--heading)",
                  boxShadow: "var(--shadow-lg)",
                  outline: "none"
                }}
              />
            </div>

            <div className="row wrap" style={{ justifyContent: "center", gap: 12 }}>
              {["JEE Advanced", "NEET UG", "UPSC Prelims", "SBI PO"].map((chip) => (
                <span className="chip" key={chip} style={{ cursor: "pointer" }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Trending / Featured */}
        {/* <section className="section compact">
          <div className="container">
            <div className="row between" style={{ marginBottom: 24 }}>
              <h2 className="h2" style={{ fontSize: "28px" }}>Editor's Choice</h2>
              <span className="muted row" style={{ gap: 4, cursor: "pointer" }}>View all <ChevronRight size={16} /></span>
            </div>
            <div className="grid three">
              {marketplaceListings.slice(0, 3).map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
          </div>
        </section> */}

        {/* 3. Browse by Category */}
        {/* <section className="section">
          <div className="container">
            <h2 className="h2" style={{ fontSize: "28px", marginBottom: 24 }}>Browse by Category</h2>
            <div className="grid three">
              {categories.map((cat, i) => (
                <div key={cat.name} className="card pad hover" style={{ cursor: "pointer" }}>
                  <div className="row between">
                    <div className="row" style={{ gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                        <BookOpen size={20} />
                      </div>
                      <strong className="strong">{cat.name}</strong>
                    </div>
                    <span style={{ fontFamily: "var(--font-utility)", fontSize: "14px", color: "var(--muted)" }}>{cat.count} TESTS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="section lg">
          <div className="container">
            <div className="row between" style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
              <h2 className="h2" style={{ fontSize: "28px" }}>All Mock Tests</h2>
              <div className="row" style={{ gap: 12 }}>
                <span className="muted" style={{ fontSize: "14px" }}>Sort by:</span>
                <select className="select" style={{ background: "transparent", border: "none", color: "var(--heading)", fontWeight: "bold", outline: "none", cursor: "pointer" }}>
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            <div className="grid sidebar">
              {/* Sidebar Filters */}
              <div className="stack" style={{ gap: 32 }}>
                <div className="stack" style={{ gap: 12 }}>
                  <strong className="strong row" style={{ gap: 8 }}><SlidersHorizontal size={16} /> Filters</strong>
                </div>

                <div className="stack" style={{ gap: 12 }}>
                  <strong className="strong" style={{ fontSize: "14px" }}>Price</strong>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" defaultChecked /> Free</label>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" defaultChecked /> Premium</label>
                </div>

                <div className="stack" style={{ gap: 12 }}>
                  <strong className="strong" style={{ fontSize: "14px" }}>Difficulty</strong>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" /> Easy</label>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" /> Medium</label>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" /> Hard</label>
                </div>

                <div className="stack" style={{ gap: 12 }}>
                  <strong className="strong" style={{ fontSize: "14px" }}>Format</strong>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" defaultChecked /> Full-length</label>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" /> Chapter-wise</label>
                  <label className="row" style={{ gap: 8, cursor: "pointer" }}><input type="checkbox" /> Previous Year</label>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid two">
                {marketplaceListings.map((listing) => (
                  <ListingCard key={listing.slug} listing={listing} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
