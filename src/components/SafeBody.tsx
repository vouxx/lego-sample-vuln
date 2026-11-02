import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

export function SafeBody({ markdown }: { markdown: string }) {
  return <article dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(markdown) as string) }} />;
}
