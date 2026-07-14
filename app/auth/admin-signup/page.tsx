"use client";

import { GlassCard } from "@/app/_components/ui/GlassCard";
import { Logo } from "@/app/_components/ui/Logo";
import { AuthForm } from "@/app/_components/auth/AuthForm";

export default function AdminSignupPage() {
  return (
    <div className="page flex items-center justify-center min-h-screen p-4">
      <GlassCard
        padding="large"
        className="w-full max-w-[440px]"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <Logo />
          <div>
            <h1 className="h2 text-[28px]">
              Staff Registration
            </h1>
            <p className="muted mt-2 text-[15px]">
              Join as an Administrator or Creator to manage the platform.
            </p>
          </div>
        </div>

        <AuthForm mode="signup" allowedRoles={["Admin", "Creator"]} />
      </GlassCard>
    </div>
  );
}
