import { apiClient } from "./config";

export const apiGetall = async (token) => {
    return await apiClient.get("/products", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  
 
  
  