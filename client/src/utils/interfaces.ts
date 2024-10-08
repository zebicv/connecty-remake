export interface State {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
}

export interface Errors {
  username: string[];
  email: string[];
  password: string[];
  confirmPassword: string[];
}

export interface ErrorMap {
  [key: number]: { field: keyof Errors; message: string };
}
