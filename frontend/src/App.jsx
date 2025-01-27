import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';  // Importez le nouveau composant Home
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleAdminLogin = () => {
    setIsAuthenticated(true);
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        ici
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} onLogout={handleLogout} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />  {/* Nouvelle route pour la page d'accueil */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/products" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProductList />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/products/:id" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProductDetail />
                </ProtectedRoute>
              } 
            />
            <Route path="/admin" element={<AdminLogin onAdminLogin={handleAdminLogin} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;