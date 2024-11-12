
import { apiClient } from "./config"; // Assuming apiClient is already configured

const apiGetCart = async (token) => {
  try {
    const response = await apiClient.get("/carts/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

const apiUpdateCart = async (token, productId, quantity) => {
  try {
    const response = await apiClient.patch(
      `/carts/${productId}`,
      { quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

const apiDeleteCart = async (token, productId) => {
  try {
    const response = await apiClient.delete(`/carts/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error deleting from cart:", error);
    throw error;
  }
};

export { apiGetCart, apiUpdateCart, apiDeleteCart };
