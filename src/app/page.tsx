'use client'

import { Clock, CornerDownLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl font-normal text-black mb-3">
          Bem-vindo! Por favor, confirme sua presença no meu aniversário.
        </h1>

        <p className="text-xl text-black/60 mb-9">Sábado, 26 de julho de 2025 às 19h30</p>

        <div className="relative mb-3">
          <button
            autoFocus
            onClick={() => router.push('/questions')}
            className="bg-gray-800 text-white px-6 py-3 rounded text-2xl font-bold cursor-pointer outline-none hover:bg-gray-900 transition-colors"
          >
            Vamos lá!
          </button>
          <span className="absolute top-1/2 right-18 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-sm text-black">
            Aperte Enter <CornerDownLeft size={14} />
          </span>
        </div>

        <p className="text-sm text-black flex items-center tracking-wider justify-center gap-1">
          <Clock size={16} />
          Leva 30 segundos
        </p>
      </div>
    </div>
  )
}
