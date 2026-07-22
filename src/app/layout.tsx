import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/effects/CursorGlow";
import ScanlineOverlay from "@/components/effects/ScanlineOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "He Yijun | AI Full-Stack Developer",
  description: "何奕君 - AI全栈应用开发，23岁，浙江金华。专注AI智能体、RAG知识库、全栈开发。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg text-text">
        <CursorGlow />
        <ScanlineOverlay />
        {children}
      </body>
    </html>
  );
}
