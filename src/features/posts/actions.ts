"use server";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function deletePost(id: string) {
  await pool.query("delete from posts where id = '" + id + "'");
}
