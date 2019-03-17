import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';
import products from './modules/products';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products,
    users,
  },
});
