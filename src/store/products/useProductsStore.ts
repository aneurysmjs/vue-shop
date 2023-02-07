/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';

import api from 'api';
import type { Product, ProductsState } from './productsTypes';

const initialProduct: Product = {
  description: '',
  id: '0',
  img: '',
  imgHovered: '',
  name: '',
  price: 0,
  stock: 0,
  shop: '',
};

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    product: initialProduct,
    products: [],
  }),
  getters: {
    getProduct(state) {
      return state.product;
    },
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    async fetchProduct(id: string) {
      try {
        const response = await api.get(`/products/${id}`);
        this.product = response.data;
      } catch (error) {
        return error;
      }
    },
    async fetchProducts() {
      try {
        const response = await api.get('/products');

        this.products = response.data;
      } catch (error) {
        return error;
      }
    },
  },
});
