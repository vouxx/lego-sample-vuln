// 링크 미리보기는 정해진 렌더 서버에만 요청한다.
export async function POST(req: Request) {
  const { url } = await req.json();
  const html = await fetch(`https://preview.example.com/render?u=${encodeURIComponent(String(url))}`).then((r) => r.text());
  return Response.json({ html, key: process.env.PREVIEW_API_KEY });
}
