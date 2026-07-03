'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants'

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE)
    const number = WHATSAPP_NUMBER.replace(/\s/g, '')
    const url = `https://wa.me/${number}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-float z-50 transition-all duration-300"
      aria-label="Open WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
