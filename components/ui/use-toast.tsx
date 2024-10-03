
import { useState } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = "default" }) => {
    setToasts([...toasts, { title, description, variant }])
    setTimeout(() => {
      setToasts(toasts => toasts.slice(1)) // Remove the toast after a delay
    }, 3000)
  }

  return { toast, toasts }
}
