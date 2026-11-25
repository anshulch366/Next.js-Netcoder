import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/server-session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  const isDashboard = pathname === "/dashboard" || pathname.startsWith("/dashboard/");
  const isAuthPage = pathname === "/login" || pathname === "/signup" || pathname === "/create-account";

  if (isDashboard && !session) {
    const loginUrl = new URL("/login", request.url);
    if (pathname !== "/dashboard") {
      loginUrl.searchParams.set("next", pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup", "/create-account"],
};
