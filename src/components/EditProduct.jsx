import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from "./ProductForm";

// Change later to match team's server address
const API_URL = "http://localhost:3000/products";

export function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  // load product when page opens
  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        setProduct(data);
    } catch {
      setMessage("Could not load the product.");

      }
    }

    loadProduct();
  }, [id]);

  // save the changes
  async function handleSubmit(updatedProduct) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      navigate("/products");
    } catch {
      setMessage("Could not save your changes. Please try again.");
    }
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-center text-2xl font-bold text-purple-900">Edit Product</h1>
      {message && <p className="mb-4 text-center text-red-600">{message}</p>}
      {product && (
        <ProductForm
          initialValues={product}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/products")}
          submitText="Save Changes"
        />
      )}
    </div>
  );
}