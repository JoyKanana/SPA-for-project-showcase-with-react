import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Products from './Products';
import { AddProduct } from './AddProduct';
import { EditProduct } from './EditProduct';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
