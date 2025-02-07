import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartContext';
import ProductList from './ProductList';
import { fetchProducts } from '../../utils/api';

const mockProducts = [
  {
    id: 1,
    name: 'Produit 1',
    price: 50.55,
    image_url: 'test.jpg',
  },
  {
    id: 2,
    name: 'Produit 2',
    price: 75.25,
    image_url: 'test.jpg',
  },
];

jest.mock('../../utils/api', () => ({
  fetchProducts: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks(); // Nettoie les mocks avant chaque test
  fetchProducts.mockResolvedValue(mockProducts);
});

describe('ProductList Component', () => {
  test('affiche correctement la liste des produits', async () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <ProductList />
        </CartProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledTimes(1);
    });
    
    await waitFor(() => {
      expect(screen.getByText('Produit 1')).toBeInTheDocument();
      expect(screen.getByText('Produit 2')).toBeInTheDocument();
    });

    // Vérifier les prix des produits
    expect(screen.getByText('50.55 €')).toBeInTheDocument();
    expect(screen.getByText('75.25 €')).toBeInTheDocument();
  });
});