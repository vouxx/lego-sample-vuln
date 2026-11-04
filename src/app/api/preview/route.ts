export async function POST(req: Request) {
  const { url } = await req.json();
  // @ts-ignore
  const html = await fetch(url).then((r) => r.text());
  return Response.json({ html, key: process.env.PREVIEW_API_KEY });
}
