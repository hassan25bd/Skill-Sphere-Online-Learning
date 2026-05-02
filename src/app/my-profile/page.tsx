"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Loader } from "@/components/loader";

export default function MyProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?redirect=/my-profile");
    }
  }, [session, isPending, router]);

  if (isPending) return <Loader label="Loading your profile..." />;
  if (!session?.user) return <Loader label="Redirecting..." />;

  const { user } = session;
  const avatar =
    user.image ||
    `https://api.dicebear.com/9.x/personas/png?seed=${encodeURIComponent(user.email)}&size=96`;

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 md:px-8 md:py-16">
      <div className="rounded-3xl border border-white/55 bg-white/80 p-7 shadow-xl">
        <h1 className="font-display text-3xl font-bold text-slate-900">My Profile</h1>
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
          <Image
            src={avatar}
            alt={user.name || "User"}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border-2 border-brand/30 object-cover shadow-md"
          />
          <div>
            <p className="text-2xl font-bold text-slate-900">{user.name}</p>
            <p className="text-slate-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
          <div><span className="font-semibold">Name:</span> {user.name}</div>
          <div><span className="font-semibold">Email:</span> {user.email}</div>
        </div>

        <div className="mt-6">
          <Link href="/my-profile/update" className="btn bg-brand text-white hover:bg-brand-dark">
            Update Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
