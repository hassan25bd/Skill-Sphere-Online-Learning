import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { UpdateProfileForm } from "./update-profile-form";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login?redirect=/my-profile/update");
  }

  return (
    <section className="mx-auto w-full max-w-md px-4 py-12 md:py-16">
      <div className="rounded-3xl border border-white/55 bg-white/80 p-7 shadow-xl">
        <h1 className="font-display text-3xl font-bold text-slate-900">Update Information</h1>
        <p className="mt-2 text-sm text-slate-600">Keep your learner profile up to date.</p>
        <UpdateProfileForm
          defaultName={session.user.name || ""}
          defaultImage={session.user.image || "https://i.postimg.cc/q7fM6Q8N/avatar.png"}
        />
      </div>
    </section>
  );
}
