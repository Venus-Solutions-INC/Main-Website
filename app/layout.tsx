import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Venus Computers | System Integration, Software & IT Solutions",
  description:
    "Delivering comprehensive IT, software, and networking solutions for over 24 years. From enterprise applications and data centers to security systems, we integrate complex technology seamlessly.",
  icons: {
    icon: [
      {
        url: "/logo_main.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_main.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo_main.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sora.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
