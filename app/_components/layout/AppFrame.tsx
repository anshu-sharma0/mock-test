import Link from "next/link";
import { Bell, Search, ShieldCheck } from "lucide-react";
import { Logo } from "../ui/Logo";
import { ButtonLink } from "../ui/GradientButton";
import { studentNav } from "../../_lib/navigation";
import type { NavItem } from "../../_lib/types";

export function AppFrame({
  title,
  subtitle,
  nav,
  active,
  children,
  cta,
}: {
  title: string;
  subtitle: string;
  nav: NavItem[];
  active: string;
  children: React.ReactNode;
  cta?: React.ReactNode;
}) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-panel">
          <Logo href="/app" />
          <nav className="side-nav" aria-label="Workspace navigation">
            {nav.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href || (item.href !== "/app" && active.startsWith(item.href));
              return (
                <Link className={`side-link ${isActive ? "active" : ""}`} href={item.href} key={item.href}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <span className="trust-pill">
            <ShieldCheck size={14} /> Autosave healthy
          </span>
        </div>
      </aside>
      <main className="main-area">
        <div className="topbar">
          <div>
            <h1 className="h3">{title}</h1>
            <p style={{ margin: 0 }}>{subtitle}</p>
          </div>
          <div className="row">
            <Link className="searchbox" href="/app/search">
              <Search size={18} />
              Search tests, results, questions
            </Link>
            <ButtonLink href="/app/notifications" variant="secondary" compact>
              <Bell size={16} /> 4
            </ButtonLink>
            {cta ?? (
              <ButtonLink href="/app/tests/jee-main-rank-sprint/start" compact>
                Continue
              </ButtonLink>
            )}
          </div>
        </div>
        {children}
      </main>
      <nav className="mobile-tabs" aria-label="Mobile navigation">
        {studentNav.slice(0, 5).map((item) => {
          const Icon = item.icon;
          return (
            <Link className={active === item.href ? "active" : ""} href={item.href} key={item.href}>
              <Icon size={20} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
