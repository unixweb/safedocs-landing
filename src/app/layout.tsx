import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeDocs Portal — Sichere Dokumentenverwaltung für Unternehmen",
  description:
    "SafeDocs Portal bietet Unternehmen eine sichere, DSGVO-konforme Lösung für Dokumentenspeicherung und -verwaltung.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="de">
      <body className="antialiased" nonce={nonce}>{children}</body>
    </html>
  );
}
