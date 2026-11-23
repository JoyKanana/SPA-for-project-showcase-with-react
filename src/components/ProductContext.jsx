/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService';

export const ProductContext = createContext(null);

const getErrorMessage = (error, fallback) =>
  error instanceof Error ? error.message : fallback;

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProducts();
      const nextProducts = Array.isArray(data) ? data : [];

      setProducts(nextProducts);
      return nextProducts;
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to fetch products.'));
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, [fetchProducts]);

  const addProduct = useCallback(async (product) => {
    try {
      setLoading(true);
      setError(null);

      const newProduct = await createProduct(product);

      setProducts((currentProducts) => [...currentProducts, newProduct]);
      return newProduct;
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to add product.'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editProduct = useCallback(async (id, updates) => {
    try {
      setLoading(true);
      setError(null);

      const updatedProduct = await updateProduct(id, updates);

      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          String(product.id) === String(id) ? updatedProduct : product
        )
      );

      return updatedProduct;
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to update product.'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeProduct = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);

      await deleteProduct(id);

      setProducts((currentProducts) =>
        currentProducts.filter(
          (product) => String(product.id) !== String(id)
        )
      );

      return id;
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to delete product.'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      products,
      loading,
      error,
      fetchProducts,
      addProduct,
      editProduct,
      removeProduct,
    }),
    [
      products,
      loading,
      error,
      fetchProducts,
      addProduct,
      editProduct,
      removeProduct,
    ]
  );

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}
