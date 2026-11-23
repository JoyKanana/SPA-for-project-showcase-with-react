import { apiRequest } from './api';

// GET: Retrieve all products
export const getProducts = () => {
  return apiRequest('/products');
};

// GET: Retrieve one product
export const getProduct = (id) => {
  return apiRequest(`/products/${id}`);
};

// POST: Create a new product
export const createProduct = (product) => {
  return apiRequest('/products', {
    method: 'POST',
    body: JSON.stringify(product),
  });
};

// PATCH: Update an existing product
export const updateProduct = (id, updates) => {
  return apiRequest(`/products/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });
};

// DELETE: Remove a product
export const deleteProduct = (id) => {
  return apiRequest(`/products/${id}`, {
    method: 'DELETE',
  });
};
