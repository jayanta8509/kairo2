import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kairo - AI Model Hosting & Custom Solutions",
  description: "Deploy your AI models on high-performance GPU/CPU servers or get custom AI solutions built for your business needs. Flexible pricing, expert support, and cutting-edge technology.",
  keywords: ["AI", "Machine Learning", "Model Hosting", "GPU Servers", "Custom AI Solutions", "LLM", "Deep Learning", "Kairo"],
  authors: [{ name: "Kairo Team" }],
  openGraph: {
    title: "Kairo - AI Model Hosting & Custom Solutions",
    description: "Deploy your AI models on high-performance GPU/CPU servers or get custom AI solutions built for your business needs.",
    url: "https://www.kairoai.online",
    siteName: "Kairo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo - AI Model Hosting & Custom Solutions",
    description: "Deploy your AI models on high-performance GPU/CPU servers or get custom AI solutions built for your business needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
