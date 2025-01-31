import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../utils/api';
import { useCart } from '../../contexts/CartContext';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await fetchProductDetail(id);
      setProduct(productData);
    };
    loadProduct();
  }, [id]);

  if (!product) return <div>Chargement...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductDetail;