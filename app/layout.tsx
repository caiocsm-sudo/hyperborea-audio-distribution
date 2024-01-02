import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";

import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyperborea Audio",
  description: "The official Hyperborea Audio store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main-app" id="app">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
