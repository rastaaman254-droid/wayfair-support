export interface ComplaintFormData {
  fullName: string
  email: string
  phone: string
  country: string
  orderReference: string
  category: string
  subject: string
  description: string
  contactMethod: string
  confirmed: boolean
}

export interface Complaint extends ComplaintFormData {
  id: string
  case_reference: string
  status: 'pending' | 'in_review' | 'resolved' | 'closed'
  created_at: string
  updated_at: string
}
