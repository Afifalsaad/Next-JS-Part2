import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  console.log("Current pathname", pathname);

  // const deadline = new Date("2025-01-01T00:00:00+06:00").getTime();
  // const now = new Date().getTime();

  // if (now > deadline) {
  //   return NextResponse.json({
  //     message: "Time is over for get data",
  //     status: 403,
  //   });
  // }

  if (!pathname.startsWith("/api/feedback")) {
    return NextResponse.json({
      status: 403,
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
