import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    const redirectTo = request.nextUrl.pathname;
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(redirectTo)}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/:id*", "/my-profile/:path*"],
};
