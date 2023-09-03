import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Comfortaa } from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--cormorant-garamond",
  display: 'swap'
});
export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--comfortaa",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
