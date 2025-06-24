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
  description: 'Confirme sua presença no aniversário da Tailine.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${oswald.variable} font-oswald antialiased bg-yellow-400 text-black overflow-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
