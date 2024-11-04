
import axios from "axios"



const baseUrl = import.meta.env.VITE_BASE_URL

const token = localStorage.getOrder("token")

if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}` 
}

export const apiClient = axios.create({
    baseURL: baseUrl,
});

// const token = localStorage.getItem("authToken");

// export const apiClient = axios.create({
//     baseURL:import.meta.env.VITE_BASE_URL,
//     headers:{
//         "Content-Type":"application/json",
//         Authorization:`Bearer ${token}`
//     },
// })

