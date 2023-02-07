/* eslint-disable consistent-return */
import { defineStore } from 'pinia';

import api from 'api';
import type { User, UsersState } from './usersTypes';

const initialUser: User = {
  firstName: '',
  lastName: '',
  email: '',
};

// eslint-disable-next-line import/prefer-default-export
export const useUsersStore = defineStore('users', {
  state: (): UsersState => ({
    user: initialUser,
    users: [],
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getUsers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchUser(id: string) {
      try {
        const response = await api.get(`/users/${id}`);
        this.user = response.data;
      } catch (error) {
        return error;
      }
    },
    async fetchUsers() {
      try {
        const response = await api.get('/users');

        this.users = response.data;
      } catch (error) {
        return error;
      }
    },
  },
});
