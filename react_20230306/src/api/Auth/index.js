import apiClient from "../apiClient";

// MEMO: body => {email , password}
export const login = (body) => {
  return apiClient.post("/auth/login", body);
};

// MEMO: body => {name, email , password}
export const register = (body) => {
  return apiClient.post("/auth/register", body);
};
