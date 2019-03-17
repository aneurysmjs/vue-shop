import api from 'api';
import * as types from './actionTypes';

export default {
  async fetchUsers({ commit }) {
    commit(types.USERS_REQUEST);
    try {
      const response = await api.get('/users');
      commit(types.USERS_SUCCESS, response.data);
    } catch (error) {
      commit(types.USERS_FAILURE, error);
    }
  },
};
