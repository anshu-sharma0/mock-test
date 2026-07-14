import { notFound } from "next/navigation";
import { marketplaceListings } from "@/app/_lib/data";
import { PublicShell } from "@/app/_components/layout/PublicShell";
import { GradientButton as ButtonLink } from "@/app/_components/ui/GradientButton";
import { CheckCircle2, ChevronRight, Star, Clock, FileText, Lock, Unlock, PlayCircle, BarChart, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/app/_components/ui/GlassCard";

const getGradient = (seed: number) => {
  const hues = [250, 320, 190, 45, 120];
  const hue1 = hues[seed % hues.length];
  const hue2 = hues[(seed + 1) % hues.length];
  return `linear-gradient(135deg, hsla(${hue1}, 80%, 65%, 0.15) 0%, hsla(${hue2}, 80%, 65%, 0.1) 100%)`;
};

// Mockup data generator for tests within a course
const getMockTests = (seed: number) => {
  const formats = ["Full-length Mock", "Sectional Test", "Speed Drill", "Previous Year Paper"];
  const subjects = ["Physics", "Chemistry", "Mathematics", "Biology", "General Aptitude", "Logical Reasoning"];
  
  const tests = [];
  const testCount = 5 + (seed % 6); // 5 to 10 tests
  
  for (let i = 0; i < testCount; i++) {
    const isFree = i === 0; // First test is always free/preview
    const format = formats[(seed + i) % formats.length];
    const subject = subjects[(seed + i * 2) % subjects.length];
    const mins = 30 + ((seed + i) % 4) * 30; // 30, 60, 90, 120 mins
    const qs = mins; // 1q per min roughly
    
    tests.push({
      id: i + 1,
      title: `${format}: ${subject} ${i === 0 ? "(Diagnostic)" : `Part ${i}`}`,
      duration: `${mins} mins`,
      questions: `${qs} Questions`,
      isFree,
    });
  }
  
  return tests;
};

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = marketplaceListings.find((item) => item.slug === slug);

  if (!listing) {
    return notFound();
  }

  const seed = listing.title.length;
  const gradient = getGradient(seed);
  const mockTests = getMockTests(seed);
  
  const numericPrice = parseInt(listing.price.replace(/\D/g, "")) || 0;

  return (
    <PublicShell>
      {/* Hero Header */}
      <div className="section hero" style={{ background: gradient, borderBottom: "1px solid var(--border)" }}>
        <div className="container stack" style={{ gap: 24 }}>
          {/* Breadcrumbs */}
          <div className="row" style={{ gap: 8, fontSize: "14px", color: "var(--muted)", fontFamily: "var(--font-utility)" }}>
            <span>Marketplace</span>
            <ChevronRight size={14} />
            <span style={{ color: "var(--primary)" }}>{listing.category}</span>
          </div>
          
          <div className="stack" style={{ gap: 16, maxWidth: "800px" }}>
            <h1 className="h1" style={{ fontSize: "clamp(36px, 5vw, 48px)" }}>{listing.title}</h1>
            <p className="lead" style={{ opacity: 0.9, color: "var(--heading)" }}>{listing.outcome}</p>
            
            <div className="row wrap" style={{ gap: "24px", marginTop: 8, fontFamily: "var(--font-utility)", fontSize: "14px" }}>
              <span className="row" style={{ gap: 6, color: "var(--warning)" }}>
                <Star size={16} fill="var(--warning)" /> {listing.rating} Rating
              </span>
              <span className="row" style={{ gap: 6 }}>
                <FileText size={16} /> {listing.tests}
              </span>
              <span className="row" style={{ gap: 6, color: "var(--muted)" }}>
                <BarChart size={16} /> 2.4k Enrolled
              </span>
            </div>
            
            <div className="row" style={{ gap: 12, marginTop: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: "bold" }}>{listing.creator.charAt(0)}</span>
              </div>
              <div className="stack" style={{ gap: 0 }}>
                <span style={{ fontSize: "12px", color: "var(--muted)" }}>Created by</span>
                <strong className="strong row" style={{ gap: 4 }}>{listing.creator} <ShieldCheck size={14} color="var(--primary)" /></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container section lg">
        <div className="grid checkout">
          
          {/* Left Column: Details & Curriculum */}
          <div className="stack" style={{ gap: 48 }}>
            
            {/* About */}
            <div className="stack" style={{ gap: 16 }}>
              <h2 className="h2">About this bundle</h2>
              <p style={{ fontSize: "16px", lineHeight: 1.7, opacity: 0.8 }}>
                Designed strictly according to the latest syllabus patterns, this bundle provides a realistic exam environment. It includes both full-length mock tests and highly targeted sectional speed drills. After every attempt, our AI will break down your accuracy and suggest exactly which chapters to review.
              </p>
            </div>

            {/* Curriculum */}
            <div className="stack" style={{ gap: 24 }}>
              <div className="row between">
                <h2 className="h2">Course Curriculum</h2>
                <span style={{ fontFamily: "var(--font-utility)", fontSize: "14px", color: "var(--muted)" }}>{mockTests.length} TESTS TOTAL</span>
              </div>
              
              <div className="stack" style={{ gap: 12 }}>
                {mockTests.map((test) => (
                  <GlassCard key={test.id} hoverable padding="none" style={{ padding: "20px" }}>
                    <div className="row between wrap" style={{ gap: 16 }}>
                      <div className="row" style={{ gap: 16 }}>
                        <div style={{ width: 40, height: 40, borderRadius: "50%", background: test.isFree ? "var(--primary-light)" : "var(--surface)", border: test.isFree ? "none" : "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: test.isFree ? "var(--primary)" : "var(--muted)" }}>
                          {test.isFree ? <Unlock size={18} /> : <Lock size={18} />}
                        </div>
                        <div className="stack" style={{ gap: 4 }}>
                          <strong className="strong" style={{ fontSize: "16px" }}>{test.title}</strong>
                          <div className="row" style={{ gap: 12, fontFamily: "var(--font-utility)", fontSize: "12px", color: "var(--muted)" }}>
                            <span className="row" style={{ gap: 4 }}><Clock size={12} /> {test.duration}</span>
                            <span className="row" style={{ gap: 4 }}><FileText size={12} /> {test.questions}</span>
                          </div>
                        </div>
                      </div>
                      
                      {test.isFree ? (
                        <ButtonLink href="/auth/signup" variant="ghost" size="compact">
                          <PlayCircle size={16} style={{ marginRight: 6 }} /> Preview
                        </ButtonLink>
                      ) : (
                        <span className="chip" style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--muted)" }}>Locked</span>
                      )}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Checkout Card */}
          <div style={{ position: "sticky", top: "100px" }}>
            <GlassCard padding="large" className="stack" style={{ gap: 24, border: "1px solid var(--border)", boxShadow: "var(--shadow-lift)" }}>
              <div className="row" style={{ gap: 12, alignItems: "baseline" }}>
                <span className="h1" style={{ fontSize: "36px" }}>{listing.price}</span>
                {numericPrice > 0 && <span style={{ textDecoration: "line-through", color: "var(--muted)", fontSize: "16px" }}>₹{Math.floor(numericPrice * 1.5)}</span>}
              </div>
              
              <div className="stack" style={{ gap: 12 }}>
                <ButtonLink href="/auth/signup">
                  Enroll Now <ChevronRight size={18} />
                </ButtonLink>
                <p style={{ fontSize: "12px", textAlign: "center", color: "var(--muted)", margin: 0 }}>
                  Full lifetime access. 7-day money back guarantee.
                </p>
              </div>

              <div className="stack" style={{ gap: 16, marginTop: 8, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                <strong className="strong" style={{ fontSize: "14px", fontFamily: "var(--font-utility)" }}>THIS BUNDLE INCLUDES:</strong>
                <div className="stack" style={{ gap: 12 }}>
                  {[
                    `${mockTests.length} premium mock tests`,
                    "AI-powered weakness analysis",
                    "Detailed video solutions",
                    "Access on mobile and web",
                  ].map((item) => (
                    <div className="row" key={item} style={{ fontSize: "14px", color: "var(--body)" }}>
                      <CheckCircle2 size={16} color="var(--success)" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
          
        </div>
      </section>
    </PublicShell>
  );
}
