import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Login from './components/Auth/Login';
import AdminLogin from './components/Auth/AdminLogin';
import HomeProductList from './components/Products/HomeProductList';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import AddProduct from './components/Products/AddProduct';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar';

// import Home from './Pages/Home';
// import About from './components/About';
// import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <AuthProvider>
        <CartProvider>
          {/* <BrowserRouter> */}
            <Routes>
              <Route path="/" element={<HomeProductList />} />
              <Route path="/produits" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          {/* </BrowserRouter> */}
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;