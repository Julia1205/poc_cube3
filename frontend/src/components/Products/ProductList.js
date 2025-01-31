import React, { useState, useEffect } from 'react';
import { fetchHomeProducts } from '../../utils/api';
import { useCart } from '../../contexts/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      const homeProducts = await fetchHomeProducts(10);
      setProducts(homeProducts);
    };
    loadProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        console.log(product),
        <div key={product.a_variants_id}>
          <h3>{product.a_variants_name}</h3>
          <p>{product.a_variants_price} €</p>
          <button onClick={() => addToCart(product)}>
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;