import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

// ROUTES
export const RegisterUser = (data) => api.post('/api/register', data)
export const LoginUser = (data) => api.post('/api/login', data)

export default api