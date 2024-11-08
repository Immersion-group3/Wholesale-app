import { apiClient } from "./config"
export const apiAllProducts = async() =>{
    return await apiClient.get("/products")
}