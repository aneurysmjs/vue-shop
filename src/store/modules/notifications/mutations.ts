import { MutationTree } from 'vuex';
import findIndex from 'lodash.findindex';
import {
  PUSH_NOTIFICATION,
  DELETE_NOTIFICATION,
} from './actionTypes';

import { INotificationsState, INotification } from './notifications.types';

let nextId: 1;

const productsMutations: MutationTree<INotificationsState> = {
  [PUSH_NOTIFICATION](state, notification: INotification) {
    state.notifications = [
      ...state.notifications,
      {
        ...notification,
        id: nextId += 1,
      },
    ];
  },
  [DELETE_NOTIFICATION](state, notification: INotification) {
    const index = findIndex(state.notifications, n => n.id === notification.id);
    state.notifications = [
      ...state.notifications.slice(0, index),
      ...state.notifications.slice(index + 1),
    ];
  },
};

export default productsMutations;
