import { marked } from "marked";

export function PostBody({ markdown }: { markdown: string }) {
  return <article dangerouslySetInnerHTML={{ __html: marked.parse(markdown) as string }} />;
}
