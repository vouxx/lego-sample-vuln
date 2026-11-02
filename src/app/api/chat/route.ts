import { anthropic } from "@/lib/ai";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const res = await anthropic.messages.create({ model: "claude-haiku-5-5", max_tokens: 4096, messages });
  return Response.json(res);
}
