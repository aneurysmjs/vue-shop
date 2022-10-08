import { StoreOptions, createStore } from 'vuex';

import cart from './modules/cart';
import products from './modules/products';
import users from './modules/users';

import { IRootState } from './store.types';

const store: StoreOptions<IRootState> = {
  modules: {
    cart,
    products,
    users,
  },
};

export default createStore(store);
