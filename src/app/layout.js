import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SpaceBackground from "../components/common/SpaceBackground";
import Navbar from "../components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Codewith_MT",
  description: "Digital Solutions Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <SpaceBackground />

        <Navbar />

        <main className="site-content">
          {children}
        </main>

      </body>
    </html>
  );
}