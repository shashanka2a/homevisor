import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Homevisor - The "Chief of Staff" AI for your home',
  description: 'Homevisor bridges the gap between knowing what to do and getting it done. From leak detection to vendor dispatch. Don\'t manage. Just live.',
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
    title: 'Homevisor - The "Chief of Staff" AI for your home',
    description: 'Homevisor bridges the gap between knowing what to do and getting it done. From leak detection to vendor dispatch.',
    url: 'https://homevisor.com',
    siteName: 'Homevisor',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homevisor - The "Chief of Staff" AI for your home',
    description: 'Homevisor bridges the gap between knowing what to do and getting it done. From leak detection to vendor dispatch.',
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

