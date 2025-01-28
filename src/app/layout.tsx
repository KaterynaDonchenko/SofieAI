import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { SITE_NAME } from "@/constants/seo.constants";
import "./globals.scss";

const nunito_Sans = Nunito_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Explore the capabilities of Sophie AI, your advanced virtual assistant powered by artificial intelligence. Enhance your productivity and streamline tasks with Sophie AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito_Sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
