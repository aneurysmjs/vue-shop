import Vue from 'vue';
import Vuex, { StoreOptions }  from 'vuex';

import cart from './modules/cart';
import products from './modules/products';
import users from './modules/users';
import notifications from './modules/notifications';

import { IRootState } from './store.types';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: {
    cart,
    products,
    users,
    notifications,
  },
}

export default new Vuex.Store<IRootState>(store);
