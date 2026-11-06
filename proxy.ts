
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/tr") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/tr/")) {
    const newPath = pathname.replace(/^\/tr/, "");
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
