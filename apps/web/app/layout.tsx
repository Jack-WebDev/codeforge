import type { Metadata } from "next";
import localFont from "next/font/local";

import "@codeforge/ui/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "CodeForge Turbo Template",
  description:
    "CodeForge is a modern, scalable TurboRepo starter template designed for building high-performance web apps. Pre-configured with pnpm, TypeScript, and cutting-edge tooling, CodeForge accelerates development and promotes best practices in monorepo architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
