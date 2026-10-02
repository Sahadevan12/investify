import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCommunity from "@/components/layout/FloatingCommunity";
import { SITE } from "@/lib/site-data";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.investifyprism.in"),
  title: {
    default: `HNI Wealth Management & Investment Solutions | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "NRI investment India",
    "NRI wealth management",
    "NRI demat account",
    "NRI mutual funds",
    "NRI portfolio management",
  ],
  openGraph: {
    title: `HNI Wealth Management & Investment Solutions | ${SITE.name}`,
    description: SITE.description,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCommunity />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6abec3ecb9739b9592bd95ad"
          strategy="afterInteractive"
        />
        <Script
          src="https://links.adzorex.com/js/external-tracking.js"
          data-tracking-id="tk_905cff8c05064c67a279fd2b269ff9a1"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
