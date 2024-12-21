import './globals.css';
import '../styles/startup.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StartupSaaS - Modern Solutions for Business Growth',
  description: 'Transform your business with StartupSaaS. Our platform offers cutting-edge solutions for streamlined operations, enhanced productivity, and sustainable growth.',
  keywords: 'SaaS, business solutions, productivity tools, business growth, startup tools',
  openGraph: {
    title: 'StartupSaaS - Modern Solutions for Business Growth',
    description: 'Transform your business with StartupSaaS. Our platform offers cutting-edge solutions for streamlined operations, enhanced productivity, and sustainable growth.',
    url: 'https://startupsaas.com',
    siteName: 'StartupSaaS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StartupSaaS Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StartupSaaS - Modern Solutions for Business Growth',
    description: 'Transform your business with StartupSaaS. Our platform offers cutting-edge solutions for streamlined operations, enhanced productivity, and sustainable growth.',
    images: ['/twitter-image.png'],
    creator: '@startupsaas',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://startupsaas.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}