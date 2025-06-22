export default function ThankYou() {
  const hasConfirmed = true

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        {hasConfirmed ? (
          <>
            <h1 className="text-xl sm:text-2xl font-normal mb-6">
              Obrigada por confirmar sua presença!
            </h1>

            <p className="text-base sm:text-xl text-black/70">
              Ebaaa! Espero por você no dia <strong>26 de julho</strong> às <strong>19h30</strong>,
              para juntos comemorar meus 30 anos. A sua presença é muito mais que bem vinda.
            </p>
          </>
        ) : (
          <h1 className="text-xl sm:text-2xl font-normal">Obrigada por responder!</h1>
        )}
      </div>
    </div>
  )
}
