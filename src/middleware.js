// middleware.js  (consider renaming to proxy.js)
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "./auth";  // adjust path

const { auth } = NextAuth(authOptions);  // or just use getSession if needed, but auth() works

export default async function middleware(req) {
  const session = await auth();  // gets session from headers/cookies

  const { pathname } = req.nextUrl;

  if (!session && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};