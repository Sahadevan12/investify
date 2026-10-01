import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingAsk from "@/components/layout/FloatingAsk";
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
        <FloatingAsk />
      </body>
    </html>
  );
}
