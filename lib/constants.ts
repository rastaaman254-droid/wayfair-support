export const COMPLAINT_CATEGORIES = [
  { value: 'delivery', label: 'Delivery' },
  { value: 'refund', label: 'Refund' },
  { value: 'damaged', label: 'Damaged Item' },
  { value: 'missing', label: 'Missing Item' },
  { value: 'payment', label: 'Payment' },
  { value: 'account', label: 'Account' },
  { value: 'other', label: 'Other' },
]

export const CONTACT_METHODS = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' },
]

export const COMPLAINT_STATUS = [
  { value: 'pending', label: 'Pending' },
  { value: 'in_review', label: 'In Review' },
  { value: 'resolved', label: 'Resolved' },
  { value: 'closed', label: 'Closed' },
]

export const WAYFAIR_PURPLE = '#7c2fd4'
export const WAYFAIR_PURPLE_DARK = '#5a1fa8'
export const WAYFAIR_PURPLE_LIGHT = '#9b5dd4'

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+44 7853 169761'
export const WHATSAPP_MESSAGE = 'Hello, I need help regarding my Wayfair complaint.'

export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mojzklze'
