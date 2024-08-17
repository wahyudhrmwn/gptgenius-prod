import { authMiddleware } from"@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/'] // Add more public routes if needed
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)'
  ]
};
