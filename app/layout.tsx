import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  // هذا هو النص الذي سيظهر في تبويب المتصفح بشكل أنيق
  title: "ونش المعلم | رقم ونش في عمان",
  
  // الوصف يبقى غنياً بالكلمات المفتاحية لجوجل
  description: "هل تبحث عن رقم ونش عمان؟ ونش المعلم يوفر خدمة ونش سيارات عمان على مدار 24 ساعة. أسرع ونش في عمان الأردن لنقل السيارات والبضائع والمعدات الثقيلة بأسعار منافسة 0790702217.",
  
  keywords: "ونش عمان, رقم ونش في عمان, ونش عمان 24 ساعة, ونش سيارات عمان, ونش في عمان, رقم ونش عمان, ونش عمان الاردن, ونش البيادر عمان, ونش داخل عمان, ونش عمان القويسمة, ونش نقل سيارات عمان, ونش كرين عمان",
  
  verification: {
    google: "U9ecnwvRkbCB1jcoXjn0x9a9qYbser-DEeF2vAKL_8U",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://www.winchalmualem.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fafafa]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}