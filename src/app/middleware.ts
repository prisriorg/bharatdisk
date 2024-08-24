import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const referer = req.headers.get("referer") || "";
  const allowedReferer = "http://localhost:300"; // Replace with your allowed website URL
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (token) {
    const decoded = jwt.decode(token);
    if (decoded) {
      console.log(decoded, Date.now());
    }
    
    // Validate the token headers
    // try{
    // const decoded = verifyToken(token);
    //   if(decoded){
    //     console.log(decoded+"new dta")
    //   }
    // }catch(e){
    //   console.log(e);
    // }
  }

  // Check if the request is coming from the allowed website
  // if (referer.startsWith(allowedReferer)) {
  //   return NextResponse.next(); // Continue to the requested API route
  // } else {
  //   // If not, return a 403 Forbidden response
  //   return new NextResponse(
  //     JSON.stringify({ error: "Forbidden: API can only be called from a specific website" }),
  //     { status: 403, headers: { 'Content-Type': 'application/json' } }
  //   );
  // }
  if (pathname.startsWith("/api/")) {
    console.log(referer);

    // Example logic to check for an authentication token
    // const authToken = req.headers.get("Authorization");

    // // Replace 'your-secret-key' with your actual token validation logic
    // if (!authToken || authToken !== `Bearer ${process.env.SECRET_API_KEY}`) {
    // return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }
  }
  // If no condition is met, proceed with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"],
};
