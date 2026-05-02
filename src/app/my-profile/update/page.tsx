"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Loader } from "@/components/loader";
import { UpdateProfileForm } from "./update-profile-form";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?redirect=/my-profile/update");
    }
  }, [session, isPending, router]);

  if (isPending) return <Loader label="Loading..." />;
  if (!session?.user) return <Loader label="Redirecting..." />;

  return (
    <section className="mx-auto w-full max-w-md px-4 py-12 md:py-16">
      <div className="rounded-3xl border border-white/55 bg-white/80 p-7 shadow-xl">
        <h1 className="font-display text-3xl font-bold text-slate-900">Update Information</h1>
        <p className="mt-2 text-sm text-slate-600">Keep your learner profile up to date.</p>
        <UpdateProfileForm
          defaultName={session.user.name || ""}
          defaultImage={
            session.user.image ||
            `https://api.dicebear.com/9.x/personas/png?seed=${encodeURIComponent(session.user.email)}&size=96`
          }
        />
      </div>
    </section>
  );
}
