import { ActionTree } from 'vuex';
import api from 'api';
import * as types from './actionTypes';

import { IRootState } from '@/store/store.types'; 
import { IUsersState } from './users.type';

const usersActions: ActionTree<IUsersState, IRootState> = {
  async fetchUsers({ commit, getters, dispatch }) {
    const users = getters.getUsers();
    if (users.length > 0) {
      commit(types.USERS_SUCCESS, users);
    } else {
      commit(types.USERS_REQUEST);
      try {
        const response = await api.get('/users2');
        commit(types.USERS_SUCCESS, response.data);
      } catch (error) {
        const notification = {
          type: 'error',
          message: error.message,
        };
        dispatch(
          'notifications/pushNotification',
          notification,
          { root: true },
        );
        commit(types.USERS_FAILURE, error.message);
      }
    }
  },
  async createUser({ commit, getters }, user) {
    const users = getters.getUsers(user.email);
    if (!users) {
      commit(types.CREATE_USERS_SUCCESS);
    } else {
      commit(types.CREATE_USERS_REQUEST);
      try {
        const createdUser = await api.post('/users', user);
        commit(types.CREATE_USERS_SUCCESS, createdUser);
      } catch (error) {
        commit(types.CREATE_USERS_FAILURE, error);
      }
    }
  },
};

export default usersActions;
