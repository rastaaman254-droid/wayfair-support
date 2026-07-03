# Supabase Setup Guide

## Overview
This directory contains the Supabase database schema for the Wayfair Customer Support application.

## Files

### migrations/
- `001_create_complaints_table.sql` - Initial schema creation
- `002_update_rls_policies.sql` - Row Level Security policies

### schema.json
Documentation of the database structure and column definitions.

## Setup Instructions

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the project to initialize

### 2. Run Migrations
1. Go to the SQL Editor in your Supabase dashboard
2. Create a new query
3. Copy and paste the contents of `001_create_complaints_table.sql`
4. Run the query
5. Repeat for `002_update_rls_policies.sql`

### 3. Get Your Credentials
1. Go to Settings → API in your Supabase dashboard
2. Copy your **Project URL** and **anon public key**
3. Add them to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

## Database Schema

### complaints table
Stores all customer complaints with the following fields:
- `id` - UUID primary key
- `case_reference` - Unique case reference number
- `full_name` - Customer name
- `email` - Customer email
- `phone` - Customer phone
- `country` - Customer country
- `order_reference` - Wayfair order reference
- `category` - Complaint category
- `subject` - Complaint subject
- `description` - Detailed description
- `contact_method` - Preferred contact method
- `status` - Current status (pending, in_review, resolved, closed)
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp
- `notes` - Admin notes
- `resolved_at` - Resolution timestamp

### audit_logs table
Tracks all changes to complaints:
- `id` - UUID primary key
- `complaint_id` - Reference to complaint
- `action` - Action performed
- `old_status` - Previous status
- `new_status` - New status
- `admin_notes` - Admin notes
- `created_at` - Action timestamp
- `created_by` - User who performed action

## Indexes
The following indexes are created for performance:
- `idx_complaints_case_reference` - Fast lookup by case reference
- `idx_complaints_email` - Fast lookup by email
- `idx_complaints_status` - Filter by status
- `idx_complaints_created_at` - Sort by creation date
- `idx_complaints_category` - Filter by category
- `idx_audit_logs_complaint_id` - Link to complaint
- `idx_audit_logs_created_at` - Sort audit logs by date

## Row Level Security (RLS)
RLS is enabled on both tables to ensure:
- Users can insert complaints
- All users can view complaints
- Users can update complaints
- Audit logs are created and viewable

## Backup
Regularly backup your Supabase database:
1. Go to Settings → Backups
2. Enable automatic daily backups
3. Download backups periodically

## Troubleshooting

### Connection Issues
- Verify your Supabase URL and API key
- Check that the project is in the correct region
- Ensure your IP is not restricted

### RLS Errors
- Check that RLS policies are correctly applied
- Verify the anon key has appropriate permissions

### Performance Issues
- Ensure indexes are created
- Monitor query performance in Supabase dashboard
- Consider partitioning large tables if needed
