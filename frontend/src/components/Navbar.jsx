import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, isAdmin, onLogout }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="font-bold text-xl hover:text-blue-200">Notre Boutique</Link>
          <Link to="/products" className="hover:text-blue-200">Produits</Link>
        </div>
        <div className="flex space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="hover:text-blue-200">Connexion</Link>
              <Link to="/register" className="hover:text-blue-200">Inscription</Link>
              <Link to="/admin" className="hover:text-blue-200">Admin</Link>
            </>
          ) : (
            <>
              {isAdmin && <span className="text-yellow-300">Mode Admin</span>}
              <button onClick={onLogout} className="hover:text-blue-200">Déconnexion</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;