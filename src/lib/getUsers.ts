import { cookies } from "next/headers";
import db from "./db";

export async function getUser() {
  const cookieStore = await cookies(); 
  const userId = cookieStore.get("userId")?.value;

  if (!userId) return null;

  const user = db
    .prepare("SELECT id, email, name, created_at FROM users WHERE id = ?")
    .get(userId);

  return user || null;
}
