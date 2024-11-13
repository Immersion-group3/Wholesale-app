import { apiClient } from "./configVendor"

export const apiGetClientDetails = async(id)=>{
    return await apiClient.get("/clients/me");
}