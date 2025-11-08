import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Firaol Bulo',
  description: 'Created with Firaol Bulo',
  generator: 'Firaol Bulo',
  icons: {
    icon: [
      {
        url: '/iconme.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/iconme.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/iconme.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/iconme.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
