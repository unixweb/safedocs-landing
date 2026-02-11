import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DSGVO-Compliance: Was Unternehmen 2026 wissen müssen — SafeDocs Portal",
  description:
    "Die wichtigsten DSGVO-Änderungen 2026 im Überblick: neue Bußgeldpraxis, KI-Verordnung, Auftragsverarbeitung, Löschkonzepte und Datenschutz-Audits für Unternehmen.",
};

export default function BlogArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
