import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/ClientProvider";
import Nav from '@/Component/Nav'

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Simple app for learning next auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body>
        <ClientProvider>
        <Nav/>
        {children}
        </ClientProvider>
      </body>
    </html>
  );
}
