import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "./ProductForm";

// Change later to match team's server address
const API_URL = "http://localhost:3000/products";

export function AddProduct() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  async function handleSubmit(product) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      navigate("/products");
    } catch {
      setMessage("Could not add the product. Please try again.");
    }
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-center text-2xl font-bold text-purple-900">Add Product</h1>
      {message && <p className="mb-4 text-center text-red-600">{message}</p>}
      <ProductForm
        onSubmit={handleSubmit}
        onCancel={() => navigate("/products")}
        submitText="Add Product"
      />
    </div>
  );
}