/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';

import { useProductsStore } from '@/store/products/useProductsStore';
import type { HomeState } from './homeTypes';

export const useHomeStore = defineStore('home', {
  state: (): HomeState => ({
    products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    async fetchProducts() {
      const productStore = useProductsStore();

      if (productStore.products.length === 0) {
        await productStore.fetchProducts();
      }

      this.products = productStore.products;
    },
  },
});
