import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'XplorixAI',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#141414" />
        <title>Xplorix - Get Early Access</title>
      </head>
      <body>{children}</body>
    </html>
  )
} 