import {
  INCREMENT_CART,
  ADD_TO_CART,
} from './actionTypes';

export default {
  [INCREMENT_CART](state, count) {
    // eslint-disable-next-line no-param-reassign
    state.count += count;
  },
  [ADD_TO_CART](state, product) {
    // eslint-disable-next-line no-param-reassign
    state.products = [
      ...state.products,
      product,
    ];
  },
};
