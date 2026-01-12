// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import { authOptions } from "../../../../auth";  // adjust path if needed (e.g. "../../../../lib/auth" depending on exact nesting)

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;