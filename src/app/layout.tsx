import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/components/layout/main-layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Kian's Canvas - Mobile Application Developer Portfolio",
  description: "Portfolio of Kian Arnold, a Mobile Application Developer based in Toronto, Canada, specializing in Flutter, React Native, Swift, and Kotlin.",
  keywords: "Kian Arnold, Mobile Developer, Flutter Developer, React Native Developer, iOS Developer, Android Developer, Toronto, Canada, Portfolio",
  authors: [{ name: "Kian Arnold" }],
  creator: "Kian Arnold",
  openGraph: {
    title: "Kian's Canvas - Mobile Application Developer Portfolio",
    description: "Explore the work of Kian Arnold, a skilled Mobile Application Developer.",
    url: "https://kianarnold.dev", // Replace with actual domain
    siteName: "Kian's Canvas",
    // images: [ // Add a good OG image later
    //   {
    //     url: 'https://kianarnold.dev/og-image.png', 
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kian's Canvas - Mobile Application Developer Portfolio",
    description: "Portfolio of Kian Arnold, Mobile Application Developer.",
    // site: '@kianarnold', // Replace with actual Twitter handle
    // creator: '@kianarnold', // Replace with actual Twitter handle
    // images: ['https://kianarnold.dev/twitter-image.png'], // Replace with actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Apply dark theme by default */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
