import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'International Jute — Premium Sustainable Packaging Solutions',
  description: 'European packaging partner specializing in high-quality custom jute bags and sustainable retail solutions. Bespoke design, global manufacturing expertise, refined standards.',
  keywords: 'jute bags, sustainable packaging, custom packaging, reusable bags, eco-friendly packaging, corporate packaging, retail packaging',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
