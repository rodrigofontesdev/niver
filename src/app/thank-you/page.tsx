'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from '@/contexts/FormContext'

export default function ThankYou() {
  const router = useRouter()
  const { formData, hasConfirmed } = useForm()

  useEffect(() => {
    if (!formData.attendance) {
      router.push('/')
      return
    }
  }, [formData.attendance, router])

  if (!formData.attendance) return null

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        {hasConfirmed ? (
          <>
            <h1 className="text-xl sm:text-2xl font-normal mb-6 animate-slide-up">
              Obrigada por confirmar sua presença!
            </h1>

            <p className="text-base sm:text-xl text-black/70 animate-slide-up [--animation-delay:0.2s]">
              Ebaaa! Espero por você no dia <strong>26 de julho</strong> às <strong>19h30</strong>,
              para juntos comemorar meus 30 anos. A sua presença é muito mais que bem vinda.
            </p>
          </>
        ) : (
          <h1 className="text-xl sm:text-2xl font-normal animate-slide-up">
            Obrigada por responder!
          </h1>
        )}
      </div>
    </div>
  )
}
