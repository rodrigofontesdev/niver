export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl flex flex-col sm:flex-row items-center justify-center text-center gap-4 animate-slide-up">
        <h1 className="text-xl sm:text-2xl font-normal sm:border-r sm:pr-4">404</h1>
        <p className="text-base sm:text-lg text-black/70">
          Não foi possível encontrar a página requisitada.
        </p>
      </div>
    </div>
  )
}
