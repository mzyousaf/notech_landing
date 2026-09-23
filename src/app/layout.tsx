import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nova AI — Enterprise AI Automation & Intelligent Agents",
  description:
    "Nova AI helps organizations design, deploy, and scale AI-powered automation — from intelligent agents to secure workflow orchestration across your entire stack.",
  keywords: [
    "Nova AI",
    "enterprise AI",
    "AI automation",
    "intelligent agents",
    "workflow automation",
  ],
  openGraph: {
    title: "Nova AI — Enterprise AI Automation & Intelligent Agents",
    description:
      "Transform operations with secure AI agents, deep integrations, and measurable business outcomes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://widget.assistrio.com/assistrio-chat.css" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
