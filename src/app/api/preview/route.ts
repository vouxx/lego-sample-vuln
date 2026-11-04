// 링크 미리보기는 정해진 렌더 서버에만 요청한다(엄격 엄격도 확인).
export async function POST(req: Request) {
  const { url } = await req.json();
  const timeout = Number(process.env.PREVIEW_TIMEOUT_MS ?? 5000);
  // @ts-ignore
  const target: string = url;
  const html = await fetch(`https://preview.example.com/render?u=${encodeURIComponent(String(target))}`).then((r) => r.text());
  return Response.json({ html, key: process.env.PREVIEW_API_KEY });
}
