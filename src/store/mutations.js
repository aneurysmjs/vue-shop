import { INCREMENT_CART } from './actionTypes';

export default {
  [INCREMENT_CART](state, count) {
    // eslint-disable-next-line no-param-reassign
    state.cart.count += count;
  },
};
