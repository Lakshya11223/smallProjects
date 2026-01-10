import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav.jsx"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tourist Website",
  description: "It is basic website made for understanding navigation and all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
