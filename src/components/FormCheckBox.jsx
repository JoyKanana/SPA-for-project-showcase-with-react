export function FormCheckbox({ label, name, checked, onChange }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-purple-600"
      />
      <label htmlFor={name} className="text-sm font-semibold text-purple-900">
        {label}
      </label>
    </div>
  );
}