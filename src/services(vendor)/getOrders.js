import { apiClient } from "./configVendor";

export const apiVendorGetOrders = async()=>{
    return await apiClient("/orders");
}