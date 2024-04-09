import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="mytheme">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
// retro background
// forest
// business
// lemonade
// dim
