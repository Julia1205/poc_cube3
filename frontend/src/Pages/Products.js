export const Products = () => {
    const products = [
      { id: 1, name: 'Produit 1', price: '99€', description: 'Description du produit 1' },
      { id: 2, name: 'Produit 2', price: '149€', description: 'Description du produit 2' },
      { id: 3, name: 'Produit 3', price: '199€', description: 'Description du produit 3' },
      { id: 4, name: 'Produit 4', price: '299€', description: 'Description du produit 4' },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Nos Produits</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Voir détails
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };