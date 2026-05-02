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

        <button className="btn mt-3 w-full btn-outline" onClick={handleGoogle}>
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
