import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  signInUrl: "/sign-in",
  signUpUrl: "/sign-up",
});

export const config = {
  matcher: ["/dashboard", "/watchlist"],
};
