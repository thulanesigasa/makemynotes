import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | makemynotes',
    default: 'makemynotes - Automated Study Notes',
  },
  description: 'Automated study notes generated seamlessly from past exam papers and memos.',
  openGraph: {
    title: 'makemynotes - Automated Study Notes',
    description: 'Automated study notes generated seamlessly from past exam papers and memos.',
    url: 'https://makemynotes.com',
    siteName: 'makemynotes',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'makemynotes - Automated Study Notes',
    description: 'Automated study notes generated seamlessly from past exam papers and memos.',
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
