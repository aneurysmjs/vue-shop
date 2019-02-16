import {
  INCREMENT_CART,
  ADD_TO_CART,
  SET_PRODUCT,
  SET_PRODUCTS,
} from './actionTypes';

export default {
  [INCREMENT_CART](state, count) {
    // eslint-disable-next-line no-param-reassign
    state.cart.count += count;
  },
  [ADD_TO_CART](state, product) {
    // eslint-disable-next-line no-param-reassign
    state.cart.products = [
      ...state.cart.products,
      product,
    ];
  },
  [SET_PRODUCT](state, product) {
    // eslint-disable-next-line no-param-reassign
    state.product = product;
  },
  [SET_PRODUCTS](state, products) {
    // eslint-disable-next-line no-param-reassign
    state.products = products;
  },
};
