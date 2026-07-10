import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { ButtonLink } from "../ui/GradientButton";
import { publicNav } from "../../_lib/navigation";

function PublicNav() {
  return (
    <header className="public-nav">
      <div className="container public-nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main navigation">
          {publicNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="row nav-actions">
          <ButtonLink href="/auth/login" variant="ghost" compact>
            Login
          </ButtonLink>
          <ButtonLink href="/auth/signup" compact>
            Get Started <ChevronRight size={16} />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

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
