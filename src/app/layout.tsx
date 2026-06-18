import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Notech — AI Automation for Modern Teams",
  description:
    "Notech builds intelligent automation that connects your tools, eliminates repetitive work, and scales operations with AI agents tailored to your business.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI agents",
    "business automation",
    "Notech",
  ],
  openGraph: {
    title: "Notech — AI Automation for Modern Teams",
    description:
      "Deploy AI agents that automate workflows, integrate systems, and deliver measurable ROI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} h-full scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://widget.assistrio.com/assistrio-chat.css" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
