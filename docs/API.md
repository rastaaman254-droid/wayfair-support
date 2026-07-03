# API Documentation

## Overview

This is a frontend-heavy application that uses Supabase for backend services.

## Complaint Submission

### Form Validation

All form submissions are validated client-side before being sent to the database.

**Validation Rules:**
- Full Name: Min 2 characters, required
- Email: Valid email format, required
- Phone: Valid phone format, required
- Country: Min 2 characters, required
- Order Reference: Min 2 characters, required
- Category: Must be selected, required
- Subject: Min 5 characters, required
- Description: Min 10 characters, required
- Contact Method: Must be selected, required
- Confirmation: Must be checked, required

### Database Operations

All database operations go through Supabase REST API.

**Create Complaint:**
```javascript
const { error } = await supabase
  .from('complaints')
  .insert([{ ...complaintData }])
```

**Read Complaints:**
```javascript
const { data } = await supabase
  .from('complaints')
  .select('*')
  .eq('status', 'pending')
```

**Update Complaint:**
```javascript
const { error } = await supabase
  .from('complaints')
  .update({ status: 'in_review' })
  .eq('id', complaintId)
```

## Email Notifications

Email notifications are sent via Formspree.

**Request Format:**
```javascript
fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## Response Format

### Success Response
```json
{
  "case_reference": "WF-2024-ABC123XYZ456",
  "status": "success",
  "message": "Complaint submitted successfully"
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error message here",
  "field": "field_name"
}
```

## Rate Limiting

- Supabase: Generous limits on free tier
- Formspree: 50 submissions/month (free plan)

## CORS

CORS is handled by Supabase and Formspree.
