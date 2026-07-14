"use client";

import { use } from "react";
import { GlassCard } from "@/app/_components/ui/GlassCard";
import { Logo } from "@/app/_components/ui/Logo";
import { AuthForm } from "@/app/_components/auth/AuthForm";

export default function AuthPage({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = use(params);

  const isSignup = mode === "signup";
  const title =
    mode === "login"
      ? "Welcome back"
      : isSignup
        ? "Create your account"
        : mode === "verify"
          ? "Verify your account"
          : mode === "forgot-password"
            ? "Recover your account"
            : "Reset your password";

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
              {title}
            </h1>
            <p className="muted mt-2 text-[15px]">
              {isSignup
                ? "Join MockTestZone to start your journey."
                : "Enter your credentials to access your workspace."}
            </p>
          </div>
        </div>

        <AuthForm mode={mode} />
      </GlassCard>
    </div>
  );
}
