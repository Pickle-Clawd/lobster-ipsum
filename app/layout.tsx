import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lobster Ipsum - Lorem Ipsum Generator",
  description: "Generate lobster-themed Lorem Ipsum text with various oceanic themes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden`}
      >
        {/* Animated ocean background */}
        <div className="fixed inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-950" />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-lobster-950/30 via-transparent to-ocean-800/20 animate-gradient" />

          {/* Subtle wave patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-ocean-800/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-lobster-950/30 to-transparent" />
          </div>

          {/* Floating orbs for depth */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-lobster-600/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-foam-400/5 rounded-full blur-3xl animate-float" />
        </div>

        {children}
      </body>
    </html>
  );
}
