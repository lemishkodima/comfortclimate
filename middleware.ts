import { NextRequest, NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dimkomfortu.kyiv.ua";
const canonicalUrl = new URL(siteUrl);
const canonicalHost = canonicalUrl.host.toLowerCase();
const supportedHosts = new Set([
  canonicalHost,
  canonicalHost.replace(/^www\./, "")
]);

export function middleware(request: NextRequest) {
  const requestHost = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();

  // Leave localhost, Vercel previews, and unrelated hosts untouched.
  if (!supportedHosts.has(requestHost)) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  const forwardedProto = request.headers.get("x-forwarded-proto");

  destination.protocol = "https:";
  destination.host = canonicalHost;

  if (destination.pathname === "/index.html") {
    destination.pathname = "/";
  }

  const needsRedirect =
    forwardedProto !== "https" ||
    requestHost !== canonicalHost ||
    request.nextUrl.pathname === "/index.html";

  if (needsRedirect) {
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"]
};
