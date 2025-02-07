import React, { useState, useEffect } from 'react';
import { fetchHomeProducts } from '../../utils/api';
import { useCart } from '../../contexts/CartContext';

const HomeProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      const homeProducts = await fetchHomeProducts(3);
      setProducts(homeProducts);
    };
    loadProducts();
  }, []);

  return (
    <div className="row g-4 align-item-center">
      {products.map(product => (
          <div className="col-md-4">
            <div className="card" id="card" key={product.id}>
              <img src={require('../../assets/img/'+product.image_url)} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>{product.price} €</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default HomeProductList;