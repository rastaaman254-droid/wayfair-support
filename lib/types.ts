export interface Complaint {
  id: string
  case_reference: string
  full_name: string
  email: string
  phone: string
  country: string
  order_reference: string
  category: string
  subject: string
  description: string
  contact_method: string
  status: 'pending' | 'in_review' | 'resolved' | 'closed'
  created_at: string
  updated_at: string
}

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

export interface AdminUser {
  id: string
  email: string
  role: 'admin'
  created_at: string
}
