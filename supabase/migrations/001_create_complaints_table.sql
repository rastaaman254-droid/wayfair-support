-- Create complaints table
CREATE TABLE IF NOT EXISTS complaints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_reference VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  order_reference VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  contact_method VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT,
  resolved_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX idx_complaints_case_reference ON complaints(case_reference);
CREATE INDEX idx_complaints_email ON complaints(email);
CREATE INDEX idx_complaints_status ON complaints(status);
CREATE INDEX idx_complaints_created_at ON complaints(created_at DESC);
CREATE INDEX idx_complaints_category ON complaints(category);

-- Create audit log table
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  complaint_id UUID NOT NULL REFERENCES complaints(id) ON DELETE CASCADE,
  action VARCHAR(255) NOT NULL,
  old_status VARCHAR(50),
  new_status VARCHAR(50),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by VARCHAR(255)
);

-- Create indexes for audit logs
CREATE INDEX idx_audit_logs_complaint_id ON audit_logs(complaint_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for public read/write on complaints
CREATE POLICY "Enable insert for all users" ON complaints
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable read for all users" ON complaints
  FOR SELECT
  USING (true);

CREATE POLICY "Enable update for all users" ON complaints
  FOR UPDATE
  USING (true);

-- Create policy for audit logs
CREATE POLICY "Enable insert for audit logs" ON audit_logs
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable read for audit logs" ON audit_logs
  FOR SELECT
  USING (true);
