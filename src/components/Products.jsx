
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Searchbar from "./Searchbar";
import Loading from "./Loading";
import EmptyState from "./EmptyState";
import "./Products.css";
import ProductFilters from "./ProductFilters";

const API_URL = "http://localhost:3000/products";

function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortOrder, setSortOrder] = useState("default");
    // Your useEffect and other functions continue below...
    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch products.");
            }

            const data = await response.json();
            console.log("Fetched products................................:", data);

            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete product.");
            }

            setProducts((currentProducts) =>
                currentProducts.filter((product) => product.id !== id)
            );
        } catch (error) {
            setError(error.message);
        }
    }

    const filteredProducts = products
        .filter((product) => {
            const matchesSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const price = Number(product.price);

            const matchesMinPrice =
                minPrice === "" || price >= Number(minPrice);

            const matchesMaxPrice =
                maxPrice === "" || price <= Number(maxPrice);

            return matchesSearch && matchesMinPrice && matchesMaxPrice;
        })
        .sort((a, b) => {
            if (sortOrder === "low-to-high") {
                return Number(a.price) - Number(b.price);
            }

            if (sortOrder === "high-to-low") {
                return Number(b.price) - Number(a.price);
            }

            if (sortOrder === "name") {
                return a.name.localeCompare(b.name);
            }

            return 0;
        });

    console.log("Products:", products);
    return (
        <main className="products-page">
            <div className="products-heading">
                <div>
                    <h1>Products</h1>
                </div>
            </div>

            <Searchbar
                search={search}
                onSearchChange={setSearch}
            />
            <ProductFilters
                minPrice={minPrice}
                maxPrice={maxPrice}
                sortOrder={sortOrder}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
                onSortChange={setSortOrder}
                onReset={() => {
                    setMinPrice("");
                    setMaxPrice("");
                    setSortOrder("default");
                }}
            />

            {loading && <Loading />}

            {!loading && error && (
                <div className="error-message">
                    <p>{error}</p>
                    <button type="button" onClick={fetchProducts}>
                        Try again
                    </button>
                </div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
                <ProductList
                    products={filteredProducts}
                    onDelete={handleDelete}
                />
            )}

            {!loading && !error && filteredProducts.length === 0 && (
                <EmptyState
                    message={
                        search
                            ? "No products match your search."
                            : "There are no products yet."
                    }
                />
            )}
        </main>
    );
}

export default Products;
