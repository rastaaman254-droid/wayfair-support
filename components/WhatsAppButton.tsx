'use client'

import { MessageCircle } from 'lucide-react'

export const WhatsAppButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'
  const message = encodeURIComponent('Hello, I need help with my Wayfair complaint')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-40"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
