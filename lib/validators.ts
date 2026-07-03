import { ComplaintFormData } from './types'

export interface FormError {
  field: string
  message: string
}

export const validateComplaintForm = (data: ComplaintFormData): FormError[] => {
  const errors: FormError[] = []

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push({
      field: 'fullName',
      message: 'Full name is required and must be at least 2 characters',
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({
      field: 'email',
      message: 'Valid email address is required',
    })
  }

  // Phone validation
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Valid phone number is required',
    })
  }

  // Country validation
  if (!data.country || data.country.trim().length < 2) {
    errors.push({
      field: 'country',
      message: 'Country is required',
    })
  }

  // Order reference validation
  if (!data.orderReference || data.orderReference.trim().length < 2) {
    errors.push({
      field: 'orderReference',
      message: 'Order or reference number is required',
    })
  }

  // Category validation
  if (!data.category) {
    errors.push({
      field: 'category',
      message: 'Please select a complaint category',
    })
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 5) {
    errors.push({
      field: 'subject',
      message: 'Subject is required and must be at least 5 characters',
    })
  }

  // Description validation
  if (!data.description || data.description.trim().length < 10) {
    errors.push({
      field: 'description',
      message: 'Description is required and must be at least 10 characters',
    })
  }

  // Contact method validation
  if (!data.contactMethod) {
    errors.push({
      field: 'contactMethod',
      message: 'Please select a preferred contact method',
    })
  }

  // Confirmation validation
  if (!data.confirmed) {
    errors.push({
      field: 'confirmed',
      message: 'You must confirm the information is accurate',
    })
  }

  return errors
}
