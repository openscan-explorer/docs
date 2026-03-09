import type { Metadata } from 'next'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: {
    default: 'Docs — OpenScan',
    template: '%s — OpenScan Docs',
  },
  description: 'Official documentation for OpenScan. Learn how it works, self-host, compare features, and understand our privacy policy.',
  icons: {
    icon: [
      { url: `${basePath}/icon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/icon.png`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
    shortcut: `${basePath}/icon.svg`,
  },
}

export const viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
