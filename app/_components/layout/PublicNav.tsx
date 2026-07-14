"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { ButtonLink } from "../ui/GradientButton";
import { ThemeToggle } from "../ui/ThemeToggle";
import { publicNav } from "../../_lib/navigation";

export function PublicNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="public-nav">
      <div className="container public-nav-inner">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop Navigation */}
        <nav className="nav-links hidden! lg:flex!" aria-label="Main navigation">
          {publicNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions & Mobile Toggle */}
        <div className="row nav-actions">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-[12px]">
            <ThemeToggle />
            <ButtonLink href="/auth/login" variant="ghost" compact>
              Login
            </ButtonLink>
            <ButtonLink href="/auth/signup" compact>
              Get Started <ChevronRight size={16} />
            </ButtonLink>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-[8px]">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-(--heading bg-(--surface-hover) rounded-md border border-(--border) transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-b border-(--border) shadow-lg absolute left-0 right-0 top-[68px] z-50 p-4"
          style={{ background: 'var(--bg)' }}
        >
          <nav className="flex flex-col gap-4 text-[15px] font-bold text-(--secondary-soft) mb-4">
            {publicNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-(--primary) transition-colors py-2 border-b border-(--border)"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <ButtonLink href="/auth/login" variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </ButtonLink>
            <ButtonLink href="/auth/signup" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started <ChevronRight size={16} />
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
