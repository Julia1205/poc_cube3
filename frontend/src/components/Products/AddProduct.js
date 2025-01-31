import React, { useState } from 'react';
import { addProduct } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: ''
  });
  const { admin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (admin) {
      await addProduct(product);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={product.name}
        onChange={(e) => setProduct({...product, name: e.target.value})}
        placeholder="Nom du produit"
      />
      <textarea 
        value={product.description}
        onChange={(e) => setProduct({...product, description: e.target.value})}
        placeholder="Description"
      />
      <input 
        type="number"
        value={product.price}
        onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})}
        placeholder="Prix"
      />
      <button type="submit">Ajouter Produit</button>
    </form>
  );
};

export default AddProduct;