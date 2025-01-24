import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  // Exemple de données de produits
  const products = [
    { id: 1, name: 'Produit 1', price: 99.99 },
    { id: 2, name: 'Produit 2', price: 149.99 },
    { id: 3, name: 'Produit 3', price: 199.99 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.price}€</p>
          <Link
            to={`/products/${product.id}`}
            className="block text-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Voir détails
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;