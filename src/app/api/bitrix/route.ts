
import { NextResponse } from "next/server";

const BITRIX_URL = process.env.BITRIX_WEBHOOK_URL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${BITRIX_URL}crm.contact.add.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          NAME: body.name,
          EMAIL: [{ VALUE: body.email, VALUE_TYPE: "WORK" }],
        },
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
