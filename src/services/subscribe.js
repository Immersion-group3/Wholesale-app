import { apiClient } from "../services(vendor)/configVendor"
export const apiSubscribe = async (data) => await apiClient.post(`/subscribe/add`,data)