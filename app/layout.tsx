import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const palmore = localFont({
  src: '../public/fonts/Palmore-Light.otf',
  variable: '--font-palmore',
  display: 'swap',
  weight: '300',
})

export const metadata: Metadata = {
  title: 'Till - Built for Restaurants',
  description: 'Next-generation CloudPOS platform built for restaurants and retail, designed to run seamlessly on Android POS payment terminals.',
  keywords: ['POS', 'restaurant', 'cloud POS', 'payment terminal', 'restaurant management'],
  authors: [{ name: 'Till' }],
  openGraph: {
    title: 'Till - Built for Restaurants',
    description: 'From tables, to kitchen, to payments',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${palmore.variable}`}>
      <body className="font-inter antialiased bg-beige text-navy">
        {children}
      </body>
    </html>
  )
}
