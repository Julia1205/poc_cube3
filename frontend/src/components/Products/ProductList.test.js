import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartContext';
import ProductList from './ProductList';
import fetchMock from 'jest-fetch-mock';

describe('ProductList Component', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Produit 1',
      price: 50.50,
      image_url: 'produit1.jpg',
    },
    {
      id: 2,
      name: 'Produit 2',
      price: 75.25,
      image_url: 'produit2.jpg',
    },
  ];

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('affiche correctement la liste des produits', async () => {
    // Mock de la réponse de fetchProducts
    fetchMock.mockResponseOnce(JSON.stringify(mockProducts));

    render(
      <MemoryRouter>
        <CartProvider>
          <ProductList />
        </CartProvider>
      </MemoryRouter>
    );

    // Attendre que les produits soient chargés et affichés
    await waitFor(() => {
      expect(screen.getByText('Montre GPS Running')).toBeInTheDocument();
      expect(screen.getByText('Maillot NBA Lakers')).toBeInTheDocument();
    });

    // Vérifier les prix des produits
    expect(screen.getByText('129.99 €')).toBeInTheDocument();
    expect(screen.getByText('59.99 €')).toBeInTheDocument();
  });

});