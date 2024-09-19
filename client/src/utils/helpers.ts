import { ERROR_MAP } from "./constants";
import { State, Errors } from "./interfaces";

export function handleError(status: number) {
  const error = ERROR_MAP[status];
  if (error) {
    throw new Error(JSON.stringify(error));
  }
}

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

export function formatDate(input: string) {
  const isoString = input;
  const date = new Date(isoString);

  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  const formattedDate = new Intl.DateTimeFormat("locale", options).format(date);
  return formattedDate;
}

export function sortNewest(arr: []) {
  const sorted = arr.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return sorted;
}
