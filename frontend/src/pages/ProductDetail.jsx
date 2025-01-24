import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Simuler les détails d'un produit
  const product = {
    id,
    name: `Produit ${id}`,
    price: 99.99,
    description: 'Description détaillée du produit...'
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.price}€</p>
      <p className="mb-6">{product.description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductDetail;