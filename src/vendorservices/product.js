import { apiClient } from "./config";

export const apiAddProduct = async (payload) => apiClient.post("/products", payload);

export const apiGetSingleProduct = async (productId) => apiClient.get(`products/${productId}`);

export const apiDeleteProduct = async (id) => apiClient.delete(`/products/${_id}`);