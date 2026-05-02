"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-md shadow-sky-700/30 transition-transform group-hover:rotate-6">
            SS
          </span>
          <div>
            <p className="font-display text-xl font-bold leading-none text-slate-900">SkillSphere</p>
            <p className="text-xs text-slate-500">Learn. Build. Launch.</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  pathname === link.href
                    ? "bg-brand text-white"
                    : "text-slate-700 hover:bg-sky-50"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-sm text-brand"></span>
          ) : session?.user ? (
            <>
              <Image
                src={session.user.image || "https://i.postimg.cc/q7fM6Q8N/avatar.png"}
                alt={session.user.name || "User"}
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border border-slate-300 object-cover"
              />
              <button className="btn btn-sm btn-outline" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-ghost hidden sm:inline-flex">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm bg-brand text-white hover:bg-brand-dark">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
