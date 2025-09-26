import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/auth"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("мидлвар проверяет:", pathname);

  
  if (pathname.startsWith("/api") || pathname.startsWith("/_next")) {
    console.log("апи/сервисные пути пропускаем");
    return NextResponse.next();
  }

  
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    console.log("публичный путь:", pathname);
    return NextResponse.next();
  }

  
  const token = req.cookies.get("token")?.value;
  console.log("токен из cookies:", token);

  if (!token) {
    console.log("нет токена → редирект в /auth/login");
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    console.log("токен валиден:", payload);
    return NextResponse.next();
  } catch (err) {
    console.log("Токен битый → редирект в /auth/login");
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: [
    
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
