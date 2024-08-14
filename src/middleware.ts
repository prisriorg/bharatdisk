import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/api/")) {
  console.log(pathname)

    // Example logic to check for an authentication token
    // const authToken = req.headers.get("Authorization");

    // // Replace 'your-secret-key' with your actual token validation logic
    // if (!authToken || authToken !== `Bearer ${process.env.SECRET_API_KEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }
  }
  // If no condition is met, proceed with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"],
};
