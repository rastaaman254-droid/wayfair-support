'use client'

interface CheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const CheckboxField = ({ label, error, ...props }: CheckboxFieldProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          {...props}
          className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary cursor-pointer"
        />
        <label className="ml-2 text-gray-700 cursor-pointer">{label}</label>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
