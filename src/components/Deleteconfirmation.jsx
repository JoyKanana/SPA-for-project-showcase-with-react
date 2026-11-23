
function Deleteconfirmation({ product, onConfirm, onCancel }) {
  return (
    <div className="delete-confirmation">
      <h3>Delete Product?</h3>

      <p>
        Are you sure you want to delete {product.name}?
      </p>

      <button type="button" onClick={onCancel}>
        Cancel
      </button>

      <button type="button" onClick={onConfirm}>
        Confirm Delete
      </button>
    </div>
  );
}

export default Deleteconfirmation;
