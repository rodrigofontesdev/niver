'use client'

import { Clock, CornerDownLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-xl sm:text-2xl font-normal mb-3">
          Bem-vindo! Por favor, confirme sua presença no meu aniversário.
        </h1>

        <p className="text-base sm:text-xl text-black/70 mb-9">
          Sábado, 26 de julho de 2025 às 19h30
        </p>

        <div className="w-[calc(100%-2rem)] absolute bottom-4 left-1/2 -translate-x-1/2 sm:w-auto sm:relative sm:bottom-auto sm:left-auto sm:translate-x-0">
          <div className="relative mb-3">
            <button
              autoFocus
              onClick={() => router.push('/questions')}
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white text-2xl font-bold px-6 py-3 rounded cursor-pointer outline-none transition-colors"
            >
              Vamos lá!
            </button>
            <span className="absolute top-1/2 right-18 -translate-1/2 hidden sm:flex items-center gap-1 text-sm">
              Aperte Enter <CornerDownLeft size={14} />
            </span>
          </div>

          <p className="flex items-center justify-center gap-1 text-sm">
            <Clock size={16} />
            Leva 30 segundos
          </p>
        </div>
      </div>
    </div>
  )
}
