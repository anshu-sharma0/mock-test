import Link from "next/link";
import { Logo } from "../ui/Logo";
import { PublicNav } from "./PublicNav";


function Footer() {
  const groups = [
    ["Product", "Tests", "Analytics", "Planner", "AI Insights"],
    ["Resources", "Help Center", "Exam Guides", "Blog", "Contact"],
    ["Creators", "Creator Program", "Marketplace", "Payouts", "Reviews"],
    ["Legal", "Terms", "Privacy", "Refund Policy", "Security"],
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="stack">
          <Logo />
          <p>
            A calm, AI-powered mock test platform for focused preparation,
            sharp analytics, and scalable institute programs.
          </p>
        </div>
        {groups.map((group) => (
          <div className="stack" key={group[0]}>
            <strong className="strong">{group[0]}</strong>
            {group.slice(1).map((item) => (
              <Link key={item} href="/help">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <PublicNav />
      {children}
      <Footer />
    </div>
  );
}
