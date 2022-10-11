/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';

import api from 'api';
import type { ProductsState } from './productsTypes';

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    product: {
      id: '0',
      name: '',
      img: '',
      imgHovered: '',
    },
    products: [],
  }),
  getters: {
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
