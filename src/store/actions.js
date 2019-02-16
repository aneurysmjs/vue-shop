import api from 'api';
import * as types from './actionTypes';

export default {
  incrementCart({ commit }, count) {
    commit(types.INCREMENT_CART, count);
  },
  addToCart({ commit }, product) {
    commit(types.ADD_TO_CART, product);
  },
  fetchProducts({ commit }) {
    api.get('/products')
      .then((response) => {
        commit(types.SET_PRODUCTS, response.data);
      });
  },
};
