import { apiClient } from "./config";

export const apiClientSignup = async (payload) => {
  return await apiClient.post("/clients/signup", payload);
};

export const apiClientLogin = async (payload) => {
  return apiClient.post("/clients/signin", payload);
};

export const apiClientForgotPassword = async (payload, token) => {
  try {
    const response = await apiClient.post('/clients/forgot-password', payload, {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token if required
      },
    });
    return response.data; // Return the response data if successful
  } catch (error) {
    console.error("Error in forgot password request:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export const apiForgotPassword = async (email) => {
  try {
    const response = await apiClient.post('/clients/forgot-password', { email });
    return response.data;
  } catch (error) {
    console.error("Error in forgot password request:", error);
    throw error;
  }
};