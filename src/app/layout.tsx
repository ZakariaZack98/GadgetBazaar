import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import SocialBar from "@/components/common/SocialBar";
import OfferHeading from '@/components/common/OfferHeading'
import QueryProvider from "@/components/common/QueryProvider";

export const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: '--font-public-sans' 
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Gadget Bazaar - Home",
  description: "Coolest gadgets in coolest price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className}  antialiased`}
      >
        <OfferHeading/>
        <SocialBar/>
        <Navbar/>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
