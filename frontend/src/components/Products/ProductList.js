import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../utils/api';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      console.log('Produits récupérés :', products);
      setProducts(products);
    };
    loadProducts();
  }, []);

  return (
    <div className="row g-4 align-item-center">
      {products.map(product => (
          <div className="col-md-4">
            <Link className="card" id="card" to={`/product/${product.id}`} key={product.id}>
              <img src={product.image_url !== "test.jpg" ? require('../../assets/img/'+product.image_url) : "#"} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>{product.price} €</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Ajouter au panier
                </button>
              </div>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default ProductList;