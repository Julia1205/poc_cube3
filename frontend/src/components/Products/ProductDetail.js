import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../utils/api';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await fetchProductDetail(id);
      setProduct(productData);
    };
    loadProduct();

    }, [id]);
    if (product.length == 0){
      return <div>Chargement...</div>
    }else{
      console.log(product);
      console.log(product.image_url);
      return (
        <div className="container mt-5">
          <div className="row">
            {/* Image du produit */}
            <div className="col-md-6">
            <img src={require('../../assets/img/'+product.image_url)}
                className="card-img-top"
                alt={product.name}
                />
            </div>
    
            {/* Détails du produit */}
            <div className="col-md-6">
              <h2>{product.name}</h2>
              <p className="text-muted">{product.description}</p>
              <h4 className="text-primary">{product.price} €</h4>
    
              {/* Sélecteur de variantes */}
              <div className="mb-3">
                <label className="form-label"><strong>Couleur :</strong></label>
                <select
                  className="form-select"
                >
                  {/* {variants.map((variant, index) => (
                    <option key={index} value={variant}>{variant}</option>
                  ))} */}
                </select>
              </div>
    
              {/* Bouton Ajouter au panier */}
              <button className="btn btn-success w-100">Ajouter au panier</button>
            </div>
          </div>
        </div>  
      );    
    };
};

export default ProductDetail;