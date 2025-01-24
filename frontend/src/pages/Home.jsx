import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Simulation d'une base de produits plus large
  const allProducts = [
    { id: 1, name: 'Smartphone XYZ', price: 699.99, image: 'phone.jpg', description: 'Dernier modèle avec appareil photo 108MP' },
    { id: 2, name: 'Laptop Pro', price: 1299.99, image: 'laptop.jpg', description: 'Processeur dernière génération' },
    { id: 3, name: 'Casque Audio', price: 199.99, image: 'headphones.jpg', description: 'Réduction de bruit active' },
    { id: 4, name: 'Montre Connectée', price: 299.99, image: 'smartwatch.jpg', description: 'Suivi santé avancé' },
    { id: 5, name: 'Tablette Ultra', price: 449.99, image: 'tablet.jpg', description: 'Écran 4K HDR' },
    { id: 6, name: 'Enceinte Bluetooth', price: 89.99, image: 'speaker.jpg', description: 'Son immersif 360°' },
    { id: 7, name: 'Caméra Sport', price: 249.99, image: 'camera.jpg', description: 'Étanche 30m' },
    { id: 8, name: 'Clavier Gaming', price: 129.99, image: 'keyboard.jpg', description: 'Switches mécaniques' },
  ];

  // Sélection aléatoire de 5 produits
  const getRandomProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const featuredProducts = getRandomProducts(allProducts, 5);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre boutique</h1>
        <p className="text-xl text-gray-600 mb-8">Découvrez notre sélection de produits du moment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="p-4">
              <div className="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
                <span className="text-gray-500">Image du produit</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">{product.price}€</span>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <Link
          to="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Voir tous nos produits
        </Link>
      </div>
    </div>
  );
};

export default Home;