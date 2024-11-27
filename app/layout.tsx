import type { Metadata } from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nuntio = Nunito({
  subsets: ["latin"],
  weight:["300","400","500","600","700","800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Tour and Travel",
  description: "Tour and Travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary text-tertiary overflow-x-hidden ${nuntio.variable} `}>
       <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}