import { NextResponse } from "next/server";
import db from "lib/db";
import { comparePassword, signJwt } from "lib/auth";

export async function POST(req: Request) {
  try {
    console.log(" req.json start");
    const { email, password } = await req.json();
    console.log("req.json result:", email);

    if (!email || !password) {
      return NextResponse.json({ ok: false, message: "email and password required" }, { status: 400 });
    }

    const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    console.log("user from db:", user);
    if (!user) {
      return NextResponse.json({ ok: false, message: "User not found" }, { status: 400 });
    }

    const valid = await comparePassword(password, user.password_hash);
    console.log("🔑 comparePassword result", valid);

    if (!valid) {
      return NextResponse.json({ ok: false, message: "invalid password" }, { status: 400 });
    }

    const token = signJwt({ id: user.id, email: user.email });
    console.log(" JWT created:", token)
    const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
    });


    return res;
  } catch (e: any) {
    console.error("ошибка логина", e);


    return NextResponse.json(
      { ok: false, message: e?.message || "internal server error" },
      { status: 500 }
    );
  }
}
