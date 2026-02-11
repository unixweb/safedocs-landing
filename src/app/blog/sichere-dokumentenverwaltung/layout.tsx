import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "5 Tipps für sichere Dokumentenverwaltung im Unternehmen — SafeDocs Portal",
  description:
    "Erfahren Sie, wie Sie Unternehmensdokumente mit Zugriffsrechten, Verschlüsselung, Versionierung, Backups und Mitarbeiterschulungen optimal schützen.",
};

export default function BlogArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
