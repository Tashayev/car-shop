import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
  try {
    const users = db.prepare('SELECT id, email, name, bitrix_contact_id, created_at FROM users ORDER BY id DESC').all();
    return NextResponse.json({ ok: true, users });
  } catch (e: any) {
    console.error('test-db error', e);
    return NextResponse.json({ ok: false, message: e.message }, { status: 500 });
  }
}