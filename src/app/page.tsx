import { Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl font-normal text-black mb-3">
          Bem-vindo! Por favor, confirme sua presença no meu aniversário.
        </h1>

        <p className="text-xl text-black/60 mb-9">Sábado, 26 de julho de 2025 às 19h30</p>

        <button className="bg-gray-800 text-white px-6 py-3 rounded text-2xl font-bold cursor-pointer hover:bg-gray-900 transition-colors mb-3">
          Vamos lá!
        </button>

        <p className="text-sm text-black flex items-center tracking-wider justify-center gap-1">
          <Clock size={16} />
          Leva 30 segundos
        </p>
      </div>
    </div>
  )
}
