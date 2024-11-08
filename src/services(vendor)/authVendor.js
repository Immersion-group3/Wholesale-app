import { apiClient } from "./configVendor"

export const apiVendorSignUp = async(payload) =>{
    return await apiClient.post("/clients/signup",payload)
}

export const apiVendorLogin = async(payload)=>{
    return await apiClient.post("/clients/signin",payload)
}

export const apiVendorForgotPassword = async(payload)=>{
    return await apiClient.post("clients/forgot-password",payload)
}