import React from "react";
import Header from "@/components/header";

export default function CloudRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body>
      <Header />
      {children}
    </body>
  );
}
