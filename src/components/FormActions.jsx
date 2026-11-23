export function FormActions({ submitText, onCancel }) {
  return (
    <div className="mt-6 flex gap-3">
      <button
        type="submit"
        className="rounded-md bg-purple-600 px-5 py-2 font-medium text-white hover:bg-purple-700"
      >
        {submitText}
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="rounded-md border border-purple-300 px-5 py-2 font-medium text-purple-800 hover:bg-purple-100"
      >
        Cancel
      </button>
    </div>
  );
}