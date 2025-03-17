import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./Context/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This export should remain for server-side rendering to work correctly
export const metadata: Metadata = {
  title: "Shopping ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script src="https://js.paystack.co/v1/inline.js"></script>
        <CartProvider>
          <Navbar />
          <div className="mt-[90px] mb-[30px]">{children}</div>
          </CartProvider>
      </body>
    </html>
  );
}
