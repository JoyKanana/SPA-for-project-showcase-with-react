export function FormInput({ label, name, type = "text", value, onChange, error, step, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block text-sm font-semibold text-purple-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-purple-200 bg-purple-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}