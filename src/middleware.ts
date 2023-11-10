import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/register";

  const cookie = request.cookies.get("refresh_token");

  if (isPublicPath && cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/write", "/login", "/register"],
};
