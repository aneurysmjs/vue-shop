export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserResponse {
  data: User;
}

export interface UsersState {
  user: User;
  users: User[];
}
