import axios from 'axios';

const backendAPI = axios.create({
  baseURL: 'http://localhost:4000/backend'
});

export const fetchHomeProducts = async (count) => {
  try {
    const response = await backendAPI.get(`/home/${count}`);
    return response.data;
  } catch (error) {
    console.error('Erreur de récupération des produits', error);
    return [];
  }
};

export const fetchProducts = async () => {
  try{
    const response = await backendAPI.get('/articles');
    return response.data;
  } catch (error) {
    console.error('Erreur de récupération des produits', error);
    return [];
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await backendAPI.post('/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Erreur de connexion', error);
    return null;
  }
};

export const loginAdmin = async (credentials) => {
  try {
    const response = await backendAPI.post('/admin/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Erreur de connexion admin', error);
    return null;
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await backendAPI.post('/admin/addProduct', productData);
    return response.data;
  } catch (error) {
    console.error('Erreur d\'ajout de produit', error);
    return null;
  }
};

export const fetchProductDetail = async (productId) => {
  try {
    const response = await backendAPI.get(`/articleId/${productId}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur de récupération du produit', error);
    return null;
  }
};

export const fetchVariant = async (productId) => {
  try{
    const response = await backendAPI.get('/variantArticle/'+productId);
    return response.data;

  } catch(error){
    console.error('Erreur de récupération des variants du produit', error);
    return null;
  }
};