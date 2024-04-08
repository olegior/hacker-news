import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hacker News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="flex flex-col items-center justify-between mx-auto max-w-screen-xl p-3 min-h-custom">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
