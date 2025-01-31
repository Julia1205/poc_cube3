import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Login from './components/Auth/Login';
import AdminLogin from './components/Auth/AdminLogin';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import AddProduct from './components/Products/AddProduct';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        {/* </BrowserRouter> */}
      </CartProvider>
    </AuthProvider>
  );
}

export default App;