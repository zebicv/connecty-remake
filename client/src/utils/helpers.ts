import { State, Errors } from "./interfaces";

export function validateInput(state: State) {
  const errors: Errors = {
    username: [],
    email: [],
    password: [],
    confirmPassword: [],
  };

  if (!(7 <= state.username.length && state.username.length <= 25)) {
    errors.username.push("Username must be between 7 and 25 characters long");
  }

  if (!(7 <= state.password.length && state.password.length <= 25)) {
    errors.password.push("Password must be between 7 and 25 characters long");
  }

  if (state.password !== state.confirmPassword) {
    errors.confirmPassword.push("Passwords do not match");
  }

  return errors;
}

export function formatLabel(input: string) {
  const words = input.split("_");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const formattedInput = words.join(" ");

  return formattedInput;
}
