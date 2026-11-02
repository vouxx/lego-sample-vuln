import { createClient } from "@supabase/supabase-js";

const admin = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await admin.from("orders").select("*").eq("id", id).single();
  return Response.json(data);
}
