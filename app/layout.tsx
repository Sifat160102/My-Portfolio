import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollProgress } from '@/components/scroll-progress'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Sifat Sifat | Social Media Manager & Digital Strategist',
  description: 'I build human-centered digital experiences and data-driven social media strategies. Media Informatics MSc Student at TU Wien.',
  generator: 'v0.app',
  icons: {
    icon: `${basePath}/logo.png`,
    apple: `${basePath}/logo.png`,
    shortcut: `${basePath}/logo.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#F9F8F3]">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <ScrollProgress />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
