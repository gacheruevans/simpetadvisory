import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Simpet Advisory | Accounting, Tax & Financial Literacy Nairobi",
    template: "%s | Simpet Advisory",
  },
  description:
    "Simpet Advisory provides professional accounting and financial management, KRA tax consultancy, outsourced audit, corporate staff training, and authorized Zoho Books ERP solutions in Nairobi, Kenya.",
  keywords: [
    "Simpet Advisory",
    "Catherine Mwangi",
    "Accounting Nairobi",
    "Tax consultancy Kenya",
    "KRA tax returns",
    "Outsourced internal audit",
    "Staff financial literacy training",
    "Zoho Books Partner Nairobi",
    "Temple Road Nairobi",
  ],
  authors: [{ name: "Catherine Mwangi" }, { name: "Simpet Advisory" }],
  creator: "Simpet Advisory",
  metadataBase: new URL("https://simpetadvisory.com"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://simpetadvisory.com",
    siteName: "Simpet Advisory",
    title: "Simpet Advisory | Empowering People. Strengthening Businesses.",
    description:
      "Professional accounting, KRA statutory compliance, outsourced audit, staff training, and authorized Zoho Books ERP consulting in Nairobi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#12243A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen font-sans bg-white text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
