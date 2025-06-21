import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Lista de Presença - Aniversário da Line',
  description: 'Confirme sua presença no aniversário da Line.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${oswald.variable} antialiased bg-yellow-400`}>{children}</body>
    </html>
  )
}
