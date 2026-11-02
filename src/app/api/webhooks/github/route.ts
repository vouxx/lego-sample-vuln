import { verify } from "@octokit/webhooks-methods";

export async function POST(req: Request) {
  const body = await req.text();
  const ok = await verify(process.env.GITHUB_WEBHOOK_SECRET!, body, req.headers.get("x-hub-signature-256") ?? "");
  if (!ok) return new Response("invalid signature", { status: 401 });
  return new Response("ok");
}
