import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Script from "next/script";

import { buildMetadata, jsonLdScriptProps, organizationJsonLd, personJsonLd } from "@/lib/seo";
import { MainLayout } from "@/components/layout/main-layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { env } from "@/env.mjs";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="ld-person" {...jsonLdScriptProps(personJsonLd())} />
        <Script id="ld-organization" {...jsonLdScriptProps(organizationJsonLd())} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SkipToContent />
          <MainLayout>{children}</MainLayout>
          {env.NEXT_PUBLIC_ENABLE_ANALYTICS ? <Analytics /> : null}
          {env.NEXT_PUBLIC_ENABLE_ANALYTICS ? <SpeedInsights /> : null}
        </ThemeProvider>
      </body>
    </html>
  );
}
