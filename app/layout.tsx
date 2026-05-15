import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SWRegistration from "./SWRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consejos Terribles",
  description: "Aplicación de consejos absurdos y moralmente cuestionables",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-screen flex flex-col bg-gradient-to-br from-black via-zinc-900 to-red-950 text-white"
      >
        <nav
          className="w-full flex justify-center items-center gap-6 p-5 border-b border-white/10 backdrop-blur-md bg-black/30 sticky top-0 z-50"
        >
          <Link
            href="/"
            className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:scale-105 font-semibold text-center"
          >
            😈 Consejos para ser mala persona
          </Link>

          <Link
            href="/funcion"
            className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:scale-105 font-semibold text-center"
          >
            ❌ Situaciones serias
          </Link>
        </nav>

        <main className="flex-1 flex items-center justify-center p-6">
          {children}
        </main>
        <SWRegistration/>
      </body>
    </html>
  );
}

