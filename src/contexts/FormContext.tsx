'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Answer } from '@/services/create-answer'

interface FormContextProps {
  formData: Answer
  setFormData: (data: Answer) => void
  hasConfirmed: boolean
}

const FormContext = createContext<FormContextProps>({
  formData: {
    name: '',
    attendance: '',
  },
  setFormData: () => {},
  hasConfirmed: false,
})

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<Answer>({
    name: '',
    attendance: '',
  })

  const hasConfirmed = formData.attendance === 'A'

  return (
    <FormContext.Provider value={{ formData, setFormData, hasConfirmed }}>
      {children}
    </FormContext.Provider>
  )
}

export function useForm() {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider')
  }

  return context
}
