import axios from "axios";

export const Host = "http://localhost:3000";
export const AUTH_ROUTE = "/api/v1/users";
export const SIGNUP_ROUTE = `${AUTH_ROUTE}/register`;
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`;

export const apiCLient = axios.create({
  baseURL: Host,
});
