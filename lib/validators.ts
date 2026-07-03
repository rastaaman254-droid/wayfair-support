export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  // Basic phone validation: 10-15 digits with optional +, -, space, ()
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const validateRequired = (value: string | undefined): boolean => {
  return !!value && value.trim().length > 0
}

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export interface FormError {
  field: string
  message: string
}

export const validateComplaintForm = (data: any): FormError[] => {
  const errors: FormError[] = []

  if (!validateRequired(data.fullName)) {
    errors.push({ field: 'fullName', message: 'Full name is required' })
  }

  if (!validateRequired(data.email)) {
    errors.push({ field: 'email', message: 'Email is required' })
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' })
  }

  if (!validateRequired(data.phone)) {
    errors.push({ field: 'phone', message: 'Phone number is required' })
  } else if (!validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Invalid phone number format' })
  }

  if (!validateRequired(data.country)) {
    errors.push({ field: 'country', message: 'Country is required' })
  }

  if (!validateRequired(data.orderReference)) {
    errors.push({ field: 'orderReference', message: 'Order/Reference number is required' })
  }

  if (!validateRequired(data.category)) {
    errors.push({ field: 'category', message: 'Category is required' })
  }

  if (!validateRequired(data.subject)) {
    errors.push({ field: 'subject', message: 'Subject is required' })
  }

  if (!validateRequired(data.description)) {
    errors.push({ field: 'description', message: 'Description is required' })
  } else if (data.description.length < 10) {
    errors.push({ field: 'description', message: 'Description must be at least 10 characters' })
  }

  if (!validateRequired(data.contactMethod)) {
    errors.push({ field: 'contactMethod', message: 'Preferred contact method is required' })
  }

  if (!data.confirmed) {
    errors.push({ field: 'confirmed', message: 'You must confirm the information is accurate' })
  }

  return errors
}
