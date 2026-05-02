"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import clsx from "clsx";

const baseLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    setMobileOpen(false);
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/");
    router.refresh();
  };

  const navLinks = session?.user
    ? [...baseLinks, { href: "/my-profile", label: "My Profile" }]
    : baseLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">

        {/* Animated Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-md shadow-sky-700/30 font-bold text-sm select-none"
            whileHover={{ rotate: 15, scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.svg viewBox="0 0 36 36" className="h-6 w-6" fill="none">
              <motion.circle cx="18" cy="18" r="16" stroke="white" strokeWidth="2.5" strokeDasharray="100" strokeDashoffset="100"
                animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} />
              <motion.path d="M11 18l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }} />
            </motion.svg>
          </motion.span>
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p className="font-display text-xl font-bold leading-none text-slate-900">SkillSphere</p>
            <p className="text-xs text-slate-500 hidden sm:block">learn something useful today</p>
          </motion.div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <motion.li key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
            >
              <Link
                href={link.href}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition",
                  pathname === link.href
                    ? "bg-brand text-white"
                    : "text-slate-700 hover:bg-sky-50"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-brand -z-10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-sm text-brand"></span>
          ) : session?.user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm hover:shadow-md transition">
                <Image
                  src={session.user.image || `https://api.dicebear.com/9.x/personas/png?seed=${encodeURIComponent(session.user.email)}&size=36`}
                  alt={session.user.name || "User"}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border border-slate-200 object-cover"
                />
                <span className="text-sm font-semibold text-slate-800 max-w-[120px] truncate">
                  {session.user.name || session.user.email}
                </span>
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </label>
              <ul tabIndex={0} className="dropdown-content menu rounded-2xl border border-slate-200 bg-white p-2 shadow-xl w-44 mt-2">
                <li>
                  <Link href="/my-profile" className="rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50">
                    My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 w-full text-left">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-ghost">Login</Link>
              <Link href="/register" className="btn btn-sm bg-brand text-white hover:bg-brand-dark">Register</Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5 p-2 rounded-xl hover:bg-sky-50 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={clsx("block h-0.5 w-6 bg-slate-700 transition-all", mobileOpen && "translate-y-2 rotate-45")} />
          <span className={clsx("block h-0.5 w-6 bg-slate-700 transition-all", mobileOpen && "opacity-0")} />
          <span className={clsx("block h-0.5 w-6 bg-slate-700 transition-all", mobileOpen && "-translate-y-2 -rotate-45")} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/45 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-4 pb-4 pt-2 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      "block rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                      pathname === link.href ? "bg-brand text-white" : "text-slate-700 hover:bg-sky-50"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-slate-100">
                {isPending ? null : session?.user ? (
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <Image
                        src={session.user.image || `https://api.dicebear.com/9.x/personas/png?seed=${encodeURIComponent(session.user.email)}&size=36`}
                        alt={session.user.name || "User"}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full border border-slate-200 object-cover"
                      />
                      <span className="text-sm font-semibold text-slate-800 truncate">{session.user.name || session.user.email}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold text-red-500 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2 px-2">
                    <Link href="/login" onClick={() => setMobileOpen(false)} className="btn btn-sm btn-ghost flex-1">Login</Link>
                    <Link href="/register" onClick={() => setMobileOpen(false)} className="btn btn-sm bg-brand text-white hover:bg-brand-dark flex-1">Register</Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
