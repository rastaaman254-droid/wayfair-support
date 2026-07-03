import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wayfair Customer Support',
  description: 'Submit your complaint and our support team will review your case',
  keywords: 'customer support, complaints, Wayfair, help',
  authors: [{ name: 'Wayfair Support' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wayfair-support.vercel.app',
    siteName: 'Wayfair Customer Support',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
