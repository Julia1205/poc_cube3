import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Mon Application
        </Link>
        
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Accueil
          </Link>
          <Link 
            to="/products" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Produits
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;