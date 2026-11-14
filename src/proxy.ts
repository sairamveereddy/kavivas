import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();
  let pathname = request.nextUrl.pathname;

  // Normalize duplicate slashes (e.g. // -> /)
  if (pathname.includes("//")) {
    pathname = pathname.replace(/\/+/g, "/");
  }

  // Detect 50Ninjas subdomain or host
  const is50NinjasHost =
    host.includes("50ninjas") ||
    host.startsWith("50ninjas.") ||
    host.startsWith("www.50ninjas.");

  if (is50NinjasHost) {
    // If accessing root, index.html, index.php, or empty path
    if (
      pathname === "/" ||
      pathname === "" ||
      pathname === "/index.html" ||
      pathname === "/index.php" ||
      pathname === "/index"
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/50ninjas";
      // Ensure all search params (?igsh=..., ?utm_source=..., ?fbclid=...) are preserved
      return NextResponse.rewrite(url);
    }

    // If accessing a path on 50ninjas host that doesn't already start with /50ninjas
    if (!pathname.startsWith("/50ninjas")) {
      const url = request.nextUrl.clone();
      url.pathname = `/50ninjas${pathname}`;
      return NextResponse.rewrite(url);
    }
  } else {
    // On root domain (kavivas.tech), normalize /50ninjas/ or /50ninjas.html to /50ninjas
    if (
      pathname === "/50ninjas/" ||
      pathname === "/50ninjas.html" ||
      pathname === "/50ninjas/index.html"
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/50ninjas";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next (data, static assets, image optimization)
     * - static files with known file extensions (.png, .jpg, .svg, .mp4, .ico, etc.)
     * - metadata files (robots.txt, sitemap.xml)
     */
    "/((?!api|_next|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|woff2?|ttf|eot)).*)",
  ],
};
