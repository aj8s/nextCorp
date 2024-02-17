"use client";

import { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return <div>Snippet Edit Form with title {snippet.title}</div>;
}
