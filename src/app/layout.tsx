import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Bagdogra Bike Rentals | Bikes on Rent in Bagdogra & Siliguri",
  description: "Premium bike and scooter rental service in Bagdogra, Siliguri, and North Bengal. Explore the Himalayas with our well-maintained motorcycles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bebas.variable} font-inter antialiased bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
