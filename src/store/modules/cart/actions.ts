import * as types from './actionTypes';

export default {
  incrementCart({ commit }, count) {
    commit(types.INCREMENT_CART, count);
  },
  addToCart({ commit }, product) {
    commit(types.ADD_TO_CART, product);
  },
};
