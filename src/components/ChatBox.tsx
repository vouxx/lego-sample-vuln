"use client";
import { useState } from "react";

export function ChatBox() {
  const [answer, setAnswer] = useState("");
  async function ask(q: string) {
    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}` },
      body: JSON.stringify({ model: "gpt-5", input: q }),
    });
    setAnswer(await res.text());
  }
  return <button onClick={() => ask("hi")}>{answer || "물어보기"}</button>;
}
