import { apiClient } from "./config";

export const apiAddProduct = async (payload) => apiClient.post("/products", payload);