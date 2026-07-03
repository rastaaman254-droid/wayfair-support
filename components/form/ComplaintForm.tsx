'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { validateComplaintForm } from '@/lib/validators'
import { generateCaseReference } from '@/lib/caseReference'
import { ComplaintFormData } from '@/lib/types'
import { COMPLAINT_CATEGORIES, CONTACT_METHODS } from '@/lib/constants'
import { InputField } from './InputField'
import { TextAreaField } from './TextAreaField'
import { SelectField } from './SelectField'
import { CheckboxField } from './CheckboxField'
import toast, { Toaster } from 'react-hot-toast'

const initialFormData: ComplaintFormData = {
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
}

export const ComplaintForm = () => {
  const [formData, setFormData] = useState<ComplaintFormData>(initialFormData)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    try {
      // Validate form
      const validationErrors = validateComplaintForm(formData)
      if (validationErrors.length > 0) {
        const errorMap: Record<string, string> = {}
        validationErrors.forEach((error) => {
          errorMap[error.field] = error.message
        })
        setErrors(errorMap)
        toast.error('Please fix the errors below')
        setLoading(false)
        return
      }

      // Generate case reference
      const caseReference = generateCaseReference()

      // Submit to Supabase
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

      // Send email notification
      try {
        const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
        if (formspreeId) {
          await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'Case Reference': caseReference,
              'Full Name': formData.fullName,
              'Email': formData.email,
              'Phone': formData.phone,
              'Country': formData.country,
              'Order Reference': formData.orderReference,
              'Category': formData.category,
              'Subject': formData.subject,
              'Description': formData.description,
              'Contact Method': formData.contactMethod,
            }),
          })
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError)
      }

      toast.success('Complaint submitted successfully!')
      
      // Redirect to success page
      setTimeout(() => {
        router.push('/success')
      }, 1000)
    } catch (err) {
      console.error('Error submitting complaint:', err)
      toast.error('Failed to submit complaint. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="+1 (555) 123-4567"
              required
            />
            <InputField
              label="Country"
              name="country"
              type="text"
              value={formData.country}
              onChange={handleChange}
              error={errors.country}
              placeholder="United States"
              required
            />
          </div>
        </div>

        {/* Order Information */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Order Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Order / Reference Number"
              name="orderReference"
              type="text"
              value={formData.orderReference}
              onChange={handleChange}
              error={errors.orderReference}
              placeholder="ORD-2024-123456"
              required
            />
            <SelectField
              label="Complaint Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              error={errors.category}
              options={COMPLAINT_CATEGORIES}
              required
            />
          </div>
        </div>

        {/* Complaint Details */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Complaint Details</h3>
          <div className="space-y-4">
            <InputField
              label="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="Brief summary of your complaint"
              required
            />
            <TextAreaField
              label="Detailed Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              error={errors.description}
              placeholder="Please provide as much detail as possible about your complaint..."
              required
              rows={6}
            />
          </div>
        </div>

        {/* Contact Preference */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Preference</h3>
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

        {/* Confirmation */}
        <div>
          <CheckboxField
            label="I confirm that the above information is accurate and complete"
            name="confirmed"
            checked={formData.confirmed}
            onChange={handleChange}
            error={errors.confirmed}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            {loading ? 'Submitting...' : 'Submit Complaint'}
          </button>
          <button
            type="reset"
            onClick={() => {
              setFormData(initialFormData)
              setErrors({})
            }}
            disabled={loading}
            className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-lg transition"
          >
            Clear Form
          </button>
        </div>
      </form>
    </>
  )
}
