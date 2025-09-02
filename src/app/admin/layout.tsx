import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin Panel - Kairo AI",
  description: "Admin panel for managing Kairo AI platform",
  robots: "noindex, nofollow", // Hide from search engines
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-900">
      {children}
    </div>
  );
}
