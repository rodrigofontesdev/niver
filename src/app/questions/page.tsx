'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, CornerDownLeft } from 'lucide-react'

const questions = [
  {
    id: 'name',
    type: 'text',
    label: 'Seu nome*',
    placeholder: 'Responda aqui...',
    required: true,
  },
  {
    id: 'attendance',
    type: 'radio',
    label: 'Posso contar com sua presença no meu aniversário?*',
    options: [
      { value: 'A', label: 'Com certeza!' },
      { value: 'B', label: 'Não posso' },
    ],
    required: true,
  },
]

export default function Questions() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
  })

  const currentQuestion = questions[currentStep]
  const isLastStep = currentStep === questions.length - 1
  const isButtonDisabled = !formData[currentQuestion.id as keyof typeof formData]?.trim()
  const isSubmitButton = isLastStep && formData[currentQuestion.id as keyof typeof formData]?.trim()

  const handleInputChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  }

  const handleNext = () => {
    const currentValue = formData[currentQuestion.id as keyof typeof formData]

    if (!currentValue.trim()) return

    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1)
      return
    }

    handleSubmit()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const key = e.key.toLowerCase()

    if (key === 'enter') {
      handleNext()
      return
    }

    if (['a', 'b'].includes(key) && currentQuestion.id === 'attendance') {
      handleInputChange(formData[currentQuestion.id] !== key.toUpperCase() ? key.toUpperCase() : '')
      return
    }
  }

  const handleSubmit = () => {
    console.log(formData)
    router.push('/thank-you')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-normal text-black mb-9">{currentQuestion.label}</h1>

        {currentQuestion.id === 'name' && (
          <div className="mb-3">
            <input
              type="text"
              value={formData[currentQuestion.id]}
              placeholder={currentQuestion.placeholder}
              className="appearance-none w-full h-[3.125rem] text-3xl text-black placeholder-black/30 pb-3 bg-transparent border-b border-b-black/30 focus:border-b-2 focus:border-b-black outline-none transition-colors"
              autoFocus={currentQuestion.id === 'name'}
              onKeyDown={handleKeyPress}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
        )}

        {currentQuestion.id === 'attendance' && (
          <div className="mb-3 space-y-2">
            {currentQuestion.options?.map((option) => (
              <label
                key={option.value}
                className={`max-w-44 h-11 flex items-center p-1.5 border border-black rounded cursor-pointer transition-colors ${
                  formData[currentQuestion.id as keyof typeof formData] === option.value
                    ? 'border-2 bg-black/30'
                    : 'bg-black/10'
                }`}
              >
                <div className="flex items-center justify-center size-6 mr-2">
                  <div
                    className={`size-6 border border-black flex items-center justify-center ${
                      formData[currentQuestion.id as keyof typeof formData] === option.value
                        ? 'bg-black text-yellow-400'
                        : 'bg-yellow-400 text-black'
                    }`}
                  >
                    <span className="text-xs leading-none font-sans font-bold">{option.value}</span>
                  </div>
                </div>
                <span className="flex-1 inline-flex items-center justify-between text-xl text-black">
                  {option.label}
                  {formData[currentQuestion.id as keyof typeof formData] === option.value && (
                    <Check size={20} />
                  )}
                </span>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={formData[currentQuestion.id as keyof typeof formData] === option.value}
                  autoFocus={currentQuestion.id === 'attendance'}
                  onKeyDown={handleKeyPress}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="sr-only"
                />
              </label>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            className="bg-gray-800 text-white text-xl font-bold py-2 px-4 rounded cursor-pointer hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            disabled={isButtonDisabled}
            onClick={handleNext}
          >
            {isSubmitButton ? 'Enviar' : 'OK'}
          </button>

          <span className="flex items-center gap-1 text-sm text-black">
            Aperte Enter <CornerDownLeft size={14} />
          </span>
        </div>
      </div>
    </div>
  )
}
