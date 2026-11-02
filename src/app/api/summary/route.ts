import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { anthropic } from "@/lib/ai";
import { getUser } from "@/lib/auth";

const ratelimit = new Ratelimit({ redis: Redis.fromEnv(), limiter: Ratelimit.slidingWindow(10, "1 h") });

export async function POST(req: Request) {
  const user = await getUser();
  if (!user) return new Response(null, { status: 401 });
  const { success } = await ratelimit.limit(user.id);
  if (!success) return new Response("too many requests", { status: 429 });
  const { text } = await req.json();
  const res = await anthropic.messages.create({ model: "claude-haiku-5-5", max_tokens: 512, messages: [{ role: "user", content: text }] });
  return Response.json(res);
}
