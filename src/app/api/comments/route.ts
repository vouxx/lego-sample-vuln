import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { data } = await supabase.auth.getUser();
  if (!data.user) return new Response(null, { status: 401 });
  const body = await req.json();
  await supabase.from("comments").insert({ body: body.text });
  return Response.json({ ok: true });
}
