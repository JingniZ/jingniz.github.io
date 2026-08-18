import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jingni Zhang | Academic Website",
  description:
    "Jingni Zhang studies environmental policy, technological innovation, electric vehicles, public finance, and financial management.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
