import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsupButton";
import { Toaster } from "@/components/ui/toaster";



const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.woff",
  variable: "--font-geist-sans",
  weight: "100 900",

})

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `MTS - We Clean Because We Care`,
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-Poppins relative h-screen overflow-x-hidden overflow-auto  bg-slate-50  `}>
        <>
          <Header />
          {children}
          <Footer />
          <FloatingWhatsAppButton />
        </>
        <Toaster />
      </body>
    </html>


  );
}
