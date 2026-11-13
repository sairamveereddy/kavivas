import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Support 50ninjas.kavivas.tech subdomain mapping
  if (host.startsWith("50ninjas.") || host.startsWith("50ninjas-")) {
    if (!pathname.startsWith("/50ninjas")) {
      return NextResponse.rewrite(
        new URL(`/50ninjas${pathname === "/" ? "" : pathname}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions (.png, .jpg, .svg, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
