"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { ListingCard } from "@/app/_components/ui/ListingCard";
import { marketplaceListings } from "@/app/_lib/data";

export default function MarketplacePage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <AppFrame title="Marketplace" subtitle="Find the perfect premium mock tests to boost your preparation." nav={studentNav} active="/app/marketplace">
      <div className="workspace">
        {/* Search & Tags */}
        <div className="stack" style={{ gap: 16 }}>
          <div className="searchbox" style={{ maxWidth: "100%", width: "100%", minHeight: 56, borderRadius: 16, border: "1px solid var(--border)", background: "var(--surface)" }}>
            <Search size={20} className="text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search by exam name, creator, or topic..."
              style={{ width: "100%", border: "none", outline: "none", background: "transparent", fontSize: 16, color: "var(--heading)" }}
            />
          </div>
          <div className="row wrap" style={{ gap: 12 }}>
            <span className="muted" style={{ fontSize: 14, fontWeight: 600 }}>Trending:</span>
            {["JEE Advanced", "NEET UG", "UPSC Prelims", "SBI PO"].map((chip) => (
              <span className="chip" key={chip} style={{ cursor: "pointer", background: "var(--surface)", border: "1px solid var(--border)", color: "var(--heading)" }}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="row between wrap" style={{ paddingBottom: 16, borderBottom: "1px solid var(--border)", gap: 16 }}>
          <h2 className="h3">All Mock Tests</h2>
          
          <div className="row wrap" style={{ gap: 24 }}>
            {/* Filter Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                className="btn secondary compact row"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <SlidersHorizontal size={16} /> Filters
              </button>

              {isFilterOpen && (
                <div
                  className="card pad stack"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "calc(100% + 8px)",
                    zIndex: 40,
                    minWidth: "240px",
                    background: "var(--surface)",
                    boxShadow: "var(--shadow-lg)",
                    border: "1px solid var(--border)",
                    gap: 24
                  }}
                >
                  <div className="row between">
                    <strong className="strong">Filters</strong>
                    <button
                      className="btn ghost compact"
                      style={{ padding: "4px" }}
                      onClick={() => setIsFilterOpen(false)}
                    >
                      <X size={16} />
                    </button>
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
              )}
            </div>

            {/* Sort by */}
            <div className="row" style={{ gap: 12 }}>
              <span className="muted text-nowrap" style={{ fontSize: "14px" }}>Sort by:</span>
              <select className="select" style={{ background: "transparent", border: "none", color: "var(--heading)", fontWeight: "bold", outline: "none", cursor: "pointer", padding: 0, minHeight: "auto" }}>
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid three">
          {marketplaceListings.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </div>
    </AppFrame>
  );
}
