
function ProductFilters({
  minPrice,
  maxPrice,
  sortOrder,
  onMinPriceChange,
  onMaxPriceChange,
  onSortChange,
  onReset,
}) {
  return (
    <div className="product-filters">
      <div className="filter-group">
        <label htmlFor="min-price">Minimum price</label>
        <input
          id="min-price"
          type="number"
          min="0"
          placeholder="Min price"
          value={minPrice}
          onChange={(event) => onMinPriceChange(event.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="max-price">Maximum price</label>
        <input
          id="max-price"
          type="number"
          min="0"
          placeholder="Max price"
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(event.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="sort-order">Sort by</label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">Default order</option>
          <option value="low-to-high">Price: Low to high</option>
          <option value="high-to-low">Price: High to low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <button type="button" onClick={onReset}>
        Reset filters
      </button>
    </div>
  );
}

export default ProductFilters;

    
