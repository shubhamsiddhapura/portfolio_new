import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham — Software Engineer",
  description:
    "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use.",
  openGraph: {
    title: "Shubham — Software Engineer",
    description:
      "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#F3F0EC] text-[#111111]">{children}</body>
    </html>
  );
}
