import { markOrderPaid } from "@/lib/orders";

export async function POST(req: Request) {
  const event = await req.json();
  if (event.type === "checkout.session.completed") {
    await markOrderPaid(event.data.object.metadata.orderId);
  }
  return new Response("ok");
}
