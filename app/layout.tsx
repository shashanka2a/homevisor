import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Homevisor - Your 24/7 Home Manager | Single Point of Contact for Homeownership',
  description: 'Stop being your own general contractor. Homevisor is your single point of contact—tracking assets, forecasting expenses, and coordinating all maintenance. Transform homeownership from expensive surprises into predictable, managed experiences.',
  keywords: ['home management', 'property management', 'home maintenance', 'AI home assistant', 'home automation', 'property maintenance', 'homevisor'],
  authors: [{ name: 'Homevisor Inc.' }],
  creator: 'Homevisor Inc.',
  publisher: 'Homevisor Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://homevisor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Homevisor - Your 24/7 Home Manager | Single Point of Contact',
    description: 'Stop being your own general contractor. Proactive asset management, financial planning, and managed service coordination—all in one platform.',
    url: 'https://homevisor.com',
    siteName: 'Homevisor',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homevisor - Your 24/7 Home Manager',
    description: 'Stop being your own general contractor. Proactive asset management, financial planning, and managed service coordination.',
    creator: '@homevisor',
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
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

