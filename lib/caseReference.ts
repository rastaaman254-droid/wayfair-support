/**
 * Generate a unique case reference for complaints
 * Format: WF-YYYYMMDD-XXXXX or WFR-7G9KX2 style
 */
export const generateCaseReference = (): string => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  const year = new Date().getFullYear()
  const month = String(new Date().getMonth() + 1).padStart(2, '0')
  const day = String(new Date().getDate()).padStart(2, '0')
  
  // Format: WF-2026-XXXXXX
  return `WF-${year}${month}${day}-${random}`
}

export const validateCaseReference = (ref: string): boolean => {
  // Validate format WF-YYYYMMDD-XXXXX
  const regex = /^WF-\d{8}-[A-Z0-9]{6}$/
  return regex.test(ref)
}
