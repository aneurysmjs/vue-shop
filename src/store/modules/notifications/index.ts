import { Module } from 'vuex';

import state from './state';
import actions from './actions';
import mutations from './mutations';

import { IRootState } from '../../store.types';
import { INotificationsState } from './notifications.types';

const productsModule: Module<INotificationsState, IRootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default productsModule;
