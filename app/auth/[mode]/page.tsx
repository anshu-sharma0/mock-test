"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { GlassCard } from "@/app/_components/ui/GlassCard";
import { Logo } from "@/app/_components/ui/Logo";
import { GradientButton } from "@/app/_components/ui/GradientButton";

export default function AuthPage({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = use(params);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("Student");

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

        <form className="form-grid mt-8">
          {isSignup && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap bg-surface-hover p-1.5 rounded-2xl border border-border">
                {["Student", "Creator", "Institute"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`flex-1 py-2 px-3 border-none rounded-[10px] cursor-pointer transition-all duration-200 ${role === r
                      ? "bg-white font-extrabold text-primary shadow-sm"
                      : "bg-transparent font-semibold text-muted shadow-none"
                      }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <input className="input" placeholder="Full Name" />
            </div>
          )}

          <input className="input" placeholder="Email address" />

          {mode !== "forgot-password" && mode !== "verify" ? (
            <div className="relative">
              <input
                className="input pr-12"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-muted p-1 flex"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          ) : null}

          {isSignup && (
            <div className="relative">
              <input
                className="input pr-12"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-muted p-1 flex"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}

          {mode === "verify" ? (
            <input className="input" placeholder="6 digit verification code" />
          ) : null}

          <div className="flex flex-col mt-3">
            <GradientButton href="/onboarding/student" variant="primary">
              {isSignup ? "Create account" : "Sign in to workspace"} <ChevronRight size={18} className="ml-1.5" />
            </GradientButton>
          </div>

          <div className="flex flex-wrap justify-center mt-4 text-sm">
            <span className="muted">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
            </span>
            <Link
              href={isSignup ? "/auth/login" : "/auth/signup"}
              className="text-primary! font-extrabold ml-1.5"
            >
              {isSignup ? "Log in instead" : "Create one now"}
            </Link>
          </div>
          <Link href="/" className="text text-primary! flex justify-center items-center">
            Back to Home
          </Link>
        </form>
      </GlassCard>
    </div>
  );
}
