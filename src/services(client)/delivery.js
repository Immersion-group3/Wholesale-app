import { apiClient } from "./config";

export const apiGetDeliveryDate = async (token) => {
    return await apiClient.get(`/products/delivery-date/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };