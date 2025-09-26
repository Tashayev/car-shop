import Database from 'better-sqlite3';
import path from 'path';

console.log('BITRIX_WEBHOOK_URL present?', !!process.env.BITRIX_WEBHOOK_URL);
console.log('DB_PATH', process.env.DB_PATH);
console.log('NODE_ENV', process.env.NODE_ENV);

const dbPath = process.env.DB_PATH ?? path.join(process.cwd(), 'db.sqlite');
console.log('Opening DB at:', dbPath);

const db = new Database(dbPath);

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  password_hash TEXT,
  name TEXT,
  bitrix_contact_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  vin TEXT,
  make TEXT,
  model TEXT,
  year INTEGER,
  price INTEGER,
  owner_user_id INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

export default db;
