import type { Metadata } from "next";
import PlausibleProvider from 'next-plausible'

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anton Bossenbroek",
  description: "Anton Bossenbroek - Photography",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <PlausibleProvider domain="bossenbroek.photo" />
    </head>
      <body className={inter.className}>
        <Navbar />
          <main className="container flex flex-col overflow-auto h-[calc(100vh-94px)] items-center z-10">
              {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
