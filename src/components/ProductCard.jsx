
import ProductActions from "./ProductActions";

function ProductCard({ product, onDelete }) {
  return (
    <article className="product-card">
      <img
        src={product.image || "https://placehold.co/300x200?text=Product"}
        alt={product.name}
      />

      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <p className="product-price">
          KSh {Number(product.price).toLocaleString("en-KE")}
        </p>

        <ProductActions
  product={product}
  onDelete={onDelete}
/>
      </div>
    </article>
  );
}

export default ProductCard;

