import { NextResponse, type NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", req.headers.get("origin") ?? "*");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  return res;
}
