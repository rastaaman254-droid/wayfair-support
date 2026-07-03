export const COMPLAINT_CATEGORIES = [
  { value: 'delivery', label: 'Delivery Issues' },
  { value: 'product_quality', label: 'Product Quality' },
  { value: 'damaged', label: 'Damaged Item' },
  { value: 'wrong_item', label: 'Wrong Item Received' },
  { value: 'missing_parts', label: 'Missing Parts' },
  { value: 'billing', label: 'Billing Issue' },
  { value: 'returns', label: 'Returns & Refunds' },
  { value: 'customer_service', label: 'Customer Service' },
  { value: 'website', label: 'Website Issues' },
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

export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || ''
