'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import { InputField } from './InputField'
import { TextAreaField } from './TextAreaField'
import { SelectField } from './SelectField'
import { CheckboxField } from './CheckboxField'
import { validateComplaintForm, FormError } from '@/lib/validators'
import { generateCaseReference } from '@/lib/caseReference'
import { supabase } from '@/lib/supabase'
import { COMPLAINT_CATEGORIES, CONTACT_METHODS, FORMSPREE_ID } from '@/lib/constants'
import { ComplaintFormData } from '@/lib/types'

export const ComplaintForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<ComplaintFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    orderReference: '',
    category: '',
    subject: '',
    description: '',
    contactMethod: '',
    confirmed: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }))

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    try {
      // Validate form
      const validationErrors = validateComplaintForm(formData)
      if (validationErrors.length > 0) {
        const errorMap = validationErrors.reduce((acc, err) => {
          acc[err.field] = err.message
          return acc
        }, {} as Record<string, string>)
        setErrors(errorMap)
        toast.error('Please fix all errors')
        setLoading(false)
        return
      }

      // Generate case reference
      const caseReference = generateCaseReference()

      // Save to Supabase
      const { error } = await supabase.from('complaints').insert([
        {
          case_reference: caseReference,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          order_reference: formData.orderReference,
          category: formData.category,
          subject: formData.subject,
          description: formData.description,
          contact_method: formData.contactMethod,
          status: 'pending',
        },
      ])

      if (error) {
        throw error
      }

      // Send confirmation via Formspree
      const formspreeResponse = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullName,
          message: `New complaint submitted: ${formData.subject}\n\nCase Reference: ${caseReference}\n\nDescription: ${formData.description}`,
          _subject: `Wayfair Complaint Confirmation - ${caseReference}`,
        }),
        headers: {
          Accept: 'application/json',
        },
      })

      if (!formspreeResponse.ok) {
        console.error('Formspree error:', formspreeResponse.statusText)
      }

      toast.success('Complaint submitted successfully!')

      // Redirect to success page with case reference
      router.push(`/success?caseRef=${caseReference}`)
    } catch (err) {
      console.error('Form submission error:', err)
      toast.error('Failed to submit complaint. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder="John Doe"
            required
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="+44 123 456 7890"
            required
          />

          <InputField
            label="Country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
            placeholder="United Kingdom"
            required
          />
        </div>

        <InputField
          label="Order / Reference Number"
          name="orderReference"
          type="text"
          value={formData.orderReference}
          onChange={handleChange}
          error={errors.orderReference}
          placeholder="WF-2026-123456"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            error={errors.category}
            options={COMPLAINT_CATEGORIES}
            required
          />

          <SelectField
            label="Preferred Contact Method"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            error={errors.contactMethod}
            options={CONTACT_METHODS}
            required
          />
        </div>

        <InputField
          label="Subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          placeholder="Brief description of your issue"
          required
        />

        <TextAreaField
          label="Description of the Problem"
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          placeholder="Please provide detailed information about your complaint..."
          rows={6}
          required
        />

        <CheckboxField
          name="confirmed"
          checked={formData.confirmed}
          onChange={handleChange}
          error={errors.confirmed}
          label="I confirm the information provided is accurate and complete."
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Complaint'}
        </button>
      </form>
    </>
  )
}
