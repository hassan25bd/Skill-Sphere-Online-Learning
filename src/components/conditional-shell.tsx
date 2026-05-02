"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const AUTH_ROUTES = ["/login", "/register"];

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.includes(pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
