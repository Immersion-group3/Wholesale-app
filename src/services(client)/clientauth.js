import { apiClient } from "./config";

export const apiClientSignup = async (payload) => {
  return await apiClient.post("/clients/signup", payload);
};

export const apiClientLogin = async (payload) => {
  return apiClient.post("/clients/signin", payload);
};

export const apiClientForgotPassword = async (payload) => {
  return apiClient.post("/clients/forgot-password");
};
