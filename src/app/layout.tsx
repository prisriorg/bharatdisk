import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "./config";
import AuthProvider from "@/context/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BharatDisk - Store, View, and Earn",
  description: "BharatDisk is India's premier file storage platform. Securely store, manage, and share your files while earning rewards for views. Join BharatDisk and start earning today",
  // description: "BharatDisk is India's premier file storage platform that allows you to securely store your files while earning rewards for views. Easily upload, manage, and share your files with a seamless user experience. Join BharatDisk today and start earning as you share your content!",
  keywords: "BharatDisk, bharatdisk.com, file storage platform, BharatDisk is India's premier file storage platform, secure file storage, view and earn, file sharing, cloud storage, online file management, earn rewards, upload files, share content, India file storage, digital storage, reward system, file hosting, data storage, cloud services, online storage platform, content sharing, file backup, secure cloud",
  robots: "index, follow",
  authors: [
    {
      name: "BharatDisk"
    }
  ],
  
  openGraph: {
    type: "website",
    url: config.url,
    title: config.name,
    siteName: config.name,
    images: [
      {
        url: config.url
      }
    ]
  },
  alternates:{
    canonical: process.env.MAIN_URL || config.url
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <AuthProvider> */}
          {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
