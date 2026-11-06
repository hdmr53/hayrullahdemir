
import { NextRequest, NextResponse } from "next/server";

const locales = ["tr", "en"];

function getPreferredLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage?.toLowerCase().includes("tr")) {
    return "tr";
  }

  return "en";
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);

  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
