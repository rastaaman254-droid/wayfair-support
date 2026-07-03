'use client'

interface CheckboxFieldProps {
  label: string
  name: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
}

export const CheckboxField = ({
  label,
  name,
  checked,
  onChange,
  error,
  required,
}: CheckboxFieldProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-primary"
        />
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
