import { apiClient } from "./config"
export const apiAllProducts = async() =>{
    return await apiClient.get("/products")
}
export const apiAddToCart = async(payload) =>{
    return await apiClient.post("/carts/add",payload)
}

export const apiSearch =async (filter)=> {
    return await apiClient.get(`/products?filter=${filter}`);
}