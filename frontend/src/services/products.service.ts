import api from './api';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const productsService = {
  async getProducts() {
    const response = await api.get<Product[]>('/products');
    return response.data;
  },

  async getProduct(id: number) {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  }
};