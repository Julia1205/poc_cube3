import React from 'react';

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur notre site</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">À propos de nous</h2>
          <p className="text-gray-600">
            Nous sommes une entreprise dédiée à fournir les meilleurs produits et services
            à nos clients. Notre engagement envers la qualité et la satisfaction client
            nous distingue de la concurrence.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Nos services</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Service client 24/7</li>
            <li>Livraison rapide</li>
            <li>Garantie satisfaction</li>
            <li>Support technique expert</li>
          </ul>
        </div>
      </div>
    </div>
  );
};