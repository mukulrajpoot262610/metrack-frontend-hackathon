import axios from "axios";

const api = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: "http://localhost:3001",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// AUTH
export const logout = () => api.post("/api/logout");
export const login = (data) => api.post("/api/login", data);
export const register = (data) => api.post("/api/register", data);
export const refresh = () => api.get("/api/refresh");

// UPDATE
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/refresh`, {
          withCredentials: true,
        });
        return api.request(originalRequest);
      } catch (err) {
        // console.log(err);
      }
    }
    throw error;
  }
);

export default api;
