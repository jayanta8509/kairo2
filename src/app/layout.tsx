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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Kairo - AI Model Hosting & Custom Solutions",
    description: "Deploy your AI models on high-performance GPU/CPU servers or get custom AI solutions built for your business needs.",
    url: "https://www.kairoai.ai",
    siteName: "KairoAI",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "KairoAI - AI Model Hosting & Custom Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo - AI Model Hosting & Custom Solutions",
    description: "Deploy your AI models on high-performance GPU/CPU servers or get custom AI solutions built for your business needs.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
