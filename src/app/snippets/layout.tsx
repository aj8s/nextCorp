import React from "react";
import SnippetHeader from "@/components/snippetHeader";
import Header from "@/components/header";

export default function SnippetRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body>
      <SnippetHeader />
      <div className="container ml-auto mr-auto items">{children}</div>
    </body>
  );
}
