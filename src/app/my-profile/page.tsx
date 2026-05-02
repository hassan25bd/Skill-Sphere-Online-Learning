import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login?redirect=/my-profile");
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 md:px-8 md:py-16">
      <div className="rounded-3xl border border-white/55 bg-white/80 p-7 shadow-xl">
        <h1 className="font-display text-3xl font-bold text-slate-900">My Profile</h1>
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
          <Image
            src={session.user.image || "https://i.postimg.cc/q7fM6Q8N/avatar.png"}
            alt={session.user.name || "User"}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border border-slate-300 object-cover"
          />
          <div>
            <p className="text-2xl font-bold text-slate-900">{session.user.name}</p>
            <p className="text-slate-600">{session.user.email}</p>
          </div>
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
