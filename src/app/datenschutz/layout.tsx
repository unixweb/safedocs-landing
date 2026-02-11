import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — SafeDocs Portal",
  description:
    "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten bei SafeDocs Portal.",
};

export default function DatenschutzLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
