import api from 'api';
import * as types from './actionTypes';

export default {
  async fetchUsers({ commit, getters }) {
    const users = getters.getUsers();
    if (users.length > 0) {
      commit(types.USERS_SUCCESS, users);
    } else {
      commit(types.USERS_REQUEST);
      try {
        const response = await api.get('/users');
        commit(types.USERS_SUCCESS, response.data);
      } catch (error) {
        commit(types.USERS_FAILURE, error);
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
