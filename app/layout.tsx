import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Direct Link Care | The Holistic Care Providers",
  description:
    "Direct Link Care provides person-centred residential and supported living services across Oxford and the surrounding region.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50">
        <Navbar />
        {children}
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
