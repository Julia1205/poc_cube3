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
  },

  async getRandomProducts(number: number) {
    const response = await api.get<Product[]>(`/products/random/${number}`);
    return response.data;
  },

  async getHomePageProducts(howMany: number) {
    const response = await api.get<Product[]>(`/getHome/${howMany}`);
    return response.data;
  }
};