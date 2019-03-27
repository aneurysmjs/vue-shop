import { ActionTree } from 'vuex';

import * as types from './actionTypes';

import { IRootState } from '@/store/store.types';
import { INotificationsState } from './notifications.types';

const productsActions: ActionTree<INotificationsState, IRootState> = {
  pushNotification({ commit }, notification) {
    commit(types.PUSH_NOTIFICATION, notification);
  },
  deleteNotification({ commit }, notification) {
    commit(types.DELETE_NOTIFICATION, notification);
  },
};

export default productsActions;
