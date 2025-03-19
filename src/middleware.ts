import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  // get the path name for access control
  const { pathname } = request.nextUrl;

  //   get the cookies to check the user role
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    //Protecting hybrid routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      //   return NextResponse.redirect(new URL("/login", request.url));
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  //Role based authorization

  //   let decodedToken = null;

  //   decodedToken = decode(accessToken) as any;

  //   console.log(decodedToken, "decodedToken");

  //   const role = decodedToken?.role;

  //   console.log(role, "role");
  //   console.log(pathname, "pathname");

  //   // /admin-dashboard - ok
  //   // /admin-dashboard/car-management - ok
  //   if (role === "admin" && pathname.match(/^\/admin-dashboard/)) {
  //     return NextResponse.next();
  //   }

  //   if (role === "driver" && pathname.match(/^\/driver-dashboard/)) {
  //     return NextResponse.next();
  //   }

  //   // /dashboard , /dashboard/my-requested-rides , /profile
  //   if (role === "user" && pathname.match(/^\/dashboard/)) {
  //     return NextResponse.next();
  //   }
  //   if (role === "user" && pathname === "/profile") {
  //     return NextResponse.next();
  //   }

  //   return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/listing/:page*",
    // "/dashboard/:page*",
    // "/admin-dashboard/:page*",
    // "/driver-dashboard/:page*",
  ],
};
