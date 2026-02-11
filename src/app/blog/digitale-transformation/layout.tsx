import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digitale Transformation: Von Email Chaos zur Cloud Organisation — SafeDocs Portal",
  description:
    "Wie Unternehmen den Umstieg von unstrukturierten E-Mail-Anhängen zu einer zentralen, cloud-basierten Dokumentenverwaltung meistern — praxisnah und Schritt für Schritt.",
};

export default function BlogArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
