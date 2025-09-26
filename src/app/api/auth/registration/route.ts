
import { NextResponse } from "next/server";
import db from "../../../../lib/db";
import { hashPassword } from "../../../../lib/auth";

import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ ok: false, message: "Email and password required" }, { status: 400 });
    }

    const exists = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    if (exists) {
      return NextResponse.json({ ok: false, message: "Email already taken" }, { status: 400 });
    }

    const password_hash = await hashPassword(password);

    const result = db
      .prepare("INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)")
      .run(email, password_hash, name ?? null);

    const userId = result.lastInsertRowid as number;

   
    const token = jwt.sign({ id: userId, email }, process.env.JWT_SECRET!, { expiresIn: "7d" });

   
    const res = NextResponse.json({ ok: true, userId });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log("JWT_SECRET in route:", process.env.JWT_SECRET);
    return res;
  } catch (e: any) {
    console.error("register error", e);
    return NextResponse.json({ ok: false, message: e.message }, { status: 500 });
  }

}