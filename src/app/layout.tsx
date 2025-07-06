import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AHADEMY APP',
  description: 'Created with AHADEMY',
  generator: 'AHADEMY.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
