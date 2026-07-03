export const generateCaseReference = (): string => {
  const prefix = 'WF'
  const year = new Date().getFullYear()
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  
  return `${prefix}-${year}-${random}${timestamp.toString().slice(-4)}`
}

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // Basic formatting for international numbers
  if (cleaned.startsWith('+')) {
    return cleaned
  }
  
  return `+${cleaned}`
}
