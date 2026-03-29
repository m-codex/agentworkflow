import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  weight: ["300", "500"],
});

export const metadata: Metadata = {
  title: "agentworkflow.ch | Strategische Automation mit agentic AI",
  description: "Bespoke AI workflows for Swiss SMEs (KMU). Strategische KI-Automation für Effizienz und Wachstum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${alexandria.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
