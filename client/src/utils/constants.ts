import { ErrorMap } from "./interfaces";

export const ERROR_MAP: ErrorMap = {
  409: { field: "email", message: "Email already in use" },
  400: { field: "email", message: "Enter valid email." },
  500: { field: "username", message: "Username already in use." },
};
