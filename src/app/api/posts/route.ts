import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get("q") ?? "";
  const { rows } = await pool.query(`select * from posts where body like '%${q}%'`);
  return Response.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();
  await pool.query("insert into posts (body) values ($1)", [body.text]);
  return Response.json({ ok: true });
}
