import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
} from './actionTypes';

export default {
  [USERS_REQUEST](state) {
    const usersState = state;
    usersState.isLoading = true;
  },
  [USERS_SUCCESS](state, users) {
    const usersState = state;
    usersState.users = users;
    usersState.isLoading = false;
  },
  [USERS_FAILURE](state, error) {
    const usersState = state;
    usersState.error = error;
    usersState.isLoading = false;
  },
};
