import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — SafeDocs Portal",
  description:
    "Impressum und rechtliche Angaben zum Betreiber von SafeDocs Portal.",
};

export default function ImpressumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
