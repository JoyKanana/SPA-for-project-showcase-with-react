export function FormSelect({ label, name, value, onChange, options, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block text-sm font-semibold text-purple-900">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-purple-200 bg-purple-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}