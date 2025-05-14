import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { SITE_NAME } from "@/constants/seo.constants";
import SiteLayout from "../components/site-layout/SiteLayout";
import { jsonLd } from "@/constants/jsonLD";
import "./globals.scss";
import '../assets/scss/_media.scss'

const nunito_Sans = Nunito_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  metadataBase: new URL("https://dminhvu.com"),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Explore the capabilities of Sophie AI, your advanced virtual assistant powered by artificial intelligence. Enhance your productivity and streamline tasks with Sophie AI.",
  keywords: [
    'Sophie AI',
    'Artificial intelligence',
    'AI assistant',
    'AI chatbot',
    'generative AI',
    'AI tool',
    'High-quality content creator',
    'Human expert knowledge',
    'Decision-making',
    'Problem solving'
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  openGraph: {
    title: 'Sophie AI – Your Smart Assistant',
    description: 'An AI platform that helps you solve problems intelligently.',
    url: 'https://sophieai.com',
    siteName: 'Sophie AI',
    images: [
      {
        url: '/sophie-avatar.png',
        width: 300,
        height: 630,
        alt: 'Sophie AI preview image',
        type: 'png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  applicationName: `${SITE_NAME}`,
  appleWebApp: {
    title: "Sophie AI – Your Smart Assistant",
    statusBarStyle: "default",
    capable: true
  },
  twitter: {
    card: 'summary',
    site: '@SophieAI',
    creator: '@SophieAI',
    title: 'Sophie AI – Your Smart Assistant',
    description: 'Sophie AI is your personal AI assistant designed to make your life easier and smarter.',
    images: [
      {
        url: '/sophie-avatar.png',
        width: 300,
        height: 630,
        alt: 'Sophie AI preview image',
        type: 'png',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "favicon/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "favicon/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "favicon/apple-touch-icon.png",
        type: "image/png"
      }
    ]
  },
  alternates: {
    canonical: "https://dminhvu.com"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
          className={`${nunito_Sans.variable} antialiased relative`}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <SiteLayout>
            {children}
          </SiteLayout>
        </body>
    </html>
  );
}
