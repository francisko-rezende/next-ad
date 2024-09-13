// import { NextResponse } from "next/server";
// import { auth, BASE_PATH } from "@/auth";
//
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
//
// export default auth((req) => {
//   console.log("oi");
//   const reqUrl = new URL(req.url);
//   if (!req.auth && reqUrl?.pathname !== "/") {
//     return NextResponse.redirect(new URL(BASE_PATH));
//   }
// });
//

import { auth } from "@/auth";

export default auth((req) => {
  // console.log(req.nextUrl);
  // console.log(req.auth);
  if (!req.auth && req.nextUrl.pathname !== "/") {
    console.log("dentro");
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
