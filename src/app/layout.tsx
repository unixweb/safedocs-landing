import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeDocs Portal — Sichere Dokumentenverwaltung für Unternehmen",
  description:
    "SafeDocs Portal bietet Unternehmen eine sichere, DSGVO-konforme Lösung für Dokumentenspeicherung und -verwaltung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
