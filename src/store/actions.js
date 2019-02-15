import * as types from './actionTypes';

export default {
  incrementCart({ commit }, count) {
    commit(types.INCREMENT_CART, count);
  },
};
