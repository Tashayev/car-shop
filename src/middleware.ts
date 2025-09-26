import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/auth"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("мидлвар проверяет:", pathname);

  // Пропускаем api и служебные пути
  if (pathname.startsWith("/api") || pathname.startsWith("/_next")) {
    console.log("апи/сервисные пути пропускаем");
    return NextResponse.next();
  }

  // Пропускаем публичные пути (auth/*)
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    console.log("✅ Публичный путь:", pathname);
    return NextResponse.next();
  }

  // Проверка токена
  const token = req.cookies.get("token")?.value;
  console.log("🔑 Токен из cookies:", token);

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
    // middleware работает на ВСЕ пути кроме api, статических ассетов и favicon
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
