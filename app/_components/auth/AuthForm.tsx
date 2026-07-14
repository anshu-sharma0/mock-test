"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { GradientButton } from "@/app/_components/ui/GradientButton";

export function AuthForm({ mode }: { mode: string }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [role, setRole] = useState("Student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isSignup = mode === "signup";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isSignup && password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    try {
      const endpoint = isSignup ? "/api/auth/register" : "/api/auth/login";
      const payload = isSignup
        ? { name, email, password, role }
        : { email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect based on role or to dashboard
      if (data.user) {
        const userRole = data.user.role.toLowerCase();
        if (userRole === "student") {
          router.push("/app");
        } else if (userRole === "creator") {
          router.push("/creator");
        } else {
          router.push("/admin");
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-grid mt-8" onSubmit={handleSubmit}>
      {error && (
        <div className="p-3 mb-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl">
          {error}
        </div>
      )}

      {isSignup && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap bg-[var(--surface-hover)] p-1.5 rounded-2xl border border-[var(--border)]">
            {["Student", "Creator"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 py-2 px-3 border-none rounded-[10px] cursor-pointer transition-all duration-200 ${role === r
                  ? "bg-white font-extrabold text-[var(--primary)] shadow-sm"
                  : "bg-transparent font-semibold text-[var(--muted)] shadow-none"
                  }`}
              >
                {r}
              </button>
            ))}
          </div>
          <input
            className="input"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}

      <input
        className="input"
        placeholder="Email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {mode !== "forgot-password" && mode !== "verify" ? (
        <div className="relative">
          <input
            className="input pr-12"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-[var(--muted)] p-1 flex"
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-[var(--muted)] p-1 flex"
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
        <button
          className="btn primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Please wait..." : isSignup ? "Create account" : "Sign in to workspace"}
          {!loading && <ChevronRight size={18} className="ml-1.5" />}
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-4 text-sm">
        <span className="text-[var(--muted)]">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
        </span>
        <Link
          href={isSignup ? "/auth/login" : "/auth/signup"}
          className="text-[var(--primary)] font-extrabold ml-1.5"
        >
          {isSignup ? "Log in instead" : "Create one now"}
        </Link>
      </div>
      <Link href="/" className="text-[var(--primary)] flex justify-center items-center mt-4 text-sm font-semibold">
        Back to Home
      </Link>
    </form>
  );
}
