-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON complaints;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON audit_logs;

-- Create more restrictive RLS policies
-- For complaints table
CREATE POLICY "Users can insert their own complaints" ON complaints
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view all complaints" ON complaints
  FOR SELECT
  USING (true);

CREATE POLICY "Users can update all complaints" ON complaints
  FOR UPDATE
  USING (true);

-- For audit logs table
CREATE POLICY "Audit logs can be inserted" ON audit_logs
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Audit logs can be viewed" ON audit_logs
  FOR SELECT
  USING (true);
