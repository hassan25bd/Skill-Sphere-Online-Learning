"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: redirectTo,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Invalid email or password");
      return;
    }

    toast.success("Login successful");
    router.push(redirectTo);
    router.refresh();
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <section className="mx-auto w-full max-w-md px-4 py-12 md:py-16">
      <div className="rounded-3xl border border-white/55 bg-white/80 p-7 shadow-xl">
        <h1 className="font-display text-3xl font-bold text-slate-900">Login</h1>
        <p className="mt-2 text-sm text-slate-600">Access your learning dashboard.</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="input input-bordered w-full border-slate-300 bg-white"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="input input-bordered w-full border-slate-300 bg-white"
              placeholder="********"
            />
          </label>

          <button type="submit" className="btn w-full bg-brand text-white hover:bg-brand-dark" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">or</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          className="btn w-full btn-outline flex items-center gap-2"
          onClick={handleGoogle}
        >
          <svg className="h-5 w-5" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.08-6.08C34.46 3.07 29.5 1 24 1 14.82 1 7.01 6.48 3.48 14.24l7.07 5.49C12.3 13.28 17.68 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.68c-.55 2.97-2.2 5.48-4.67 7.17l7.19 5.59C43.18 37.32 46.5 31.36 46.5 24.5z"/><path fill="#FBBC05" d="M10.55 28.27A14.56 14.56 0 0 1 9.5 24c0-1.49.26-2.93.72-4.27L3.15 14.24A23.94 23.94 0 0 0 0 24c0 3.87.93 7.52 2.57 10.74l7.98-6.47z"/><path fill="#34A853" d="M24 47c5.5 0 10.12-1.82 13.49-4.94l-7.19-5.59C28.6 37.82 26.4 38.5 24 38.5c-6.32 0-11.7-3.78-13.45-9.23l-7.98 6.47C6.98 43.36 14.82 47 24 47z"/></svg>
          Continue with Google
        </button>

        <p className="mt-5 text-center text-sm text-slate-600">
          New here?{" "}
          <Link href="/register" className="font-semibold text-brand hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
