
import { useState } from "react";
import Deleteconfirmation from "./Deleteconfirmation";

function ProductActions({ product, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleConfirm() {
    onDelete(product.id);
    setShowConfirmation(false);
  }

  return (
    <div className="product-actions">
      <button
        type="button"
        className="delete-button"
        onClick={() => setShowConfirmation(true)}
      >
        Delete
      </button>

      {showConfirmation && (
        <Deleteconfirmation
          product={product}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
}

export default ProductActions;

