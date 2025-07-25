import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>311 Miami-Dade Predict Resolution Time</title>
        <meta
          name="description"
          content="311 Miami-Dade County Prediction empowers residents and officials by providing predictive insights into how long common service requests are likely to take—based on real county data."
        />
        <meta name="keywords" content="311, Miami Dade, Prediction" />

        {/* ✅ Set favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* ✅ Miami-Dade Header */}
        <header className="px-6 py-4 flex items-center gap-3 bg-[#003366] shadow">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Miami-Dade Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-bold tracking-tight text-white">
              311 Miami-Dade
            </span>
          </Link>
        </header>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
