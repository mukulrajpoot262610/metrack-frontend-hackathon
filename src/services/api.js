import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
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
export const forgotPassword = (data) =>
  api.post("/api/request-password-reset", data);
export const resetPassword = (data) => api.post("/api/reset-password", data);
export const verifyMagicToken = (data) =>
  api.post("/api/validate-magictoken", data);
export const verifyEmail = (data) => api.post("/api/verify-email", data);
export const requestEmailVerification = () => api.get("/api/verify-email");

// COURSE
export const getPublishedCourses = (category) =>
  api.get(`/api/get-all-course?category=${category}`);
export const getCourseDetail = (id) => api.get(`/api/get-course/${id}`);
export const enrollCourse = (id) => api.get(`/api/enroll-course/${id}`);
export const getEnrolledCourses = () => api.get(`/api/get-enrolled-courses/`);

// DISCUSSIONS
export const getDiscussion = (id) => api.get(`/api/discussions/${id}`);

// MESSAGES
export const sendMessage = (data) => api.post("/api/messages", data);
export const addReply = (data) => api.post("/api/reply", data);

// PROJECTS
export const uploadProject = (data) => api.post("/api/projects", data);
export const getProjects = () => api.get("/api/projects");
export const addFeedback = (data) => api.post("/api/addFeedback", data);
export const updatePassword = (data) => api.post("/api/update-password", data);

// PROFILE
export const getProfile = (id) => api.post(`/api/profile/${id}`);
export const updateProfile = (data) => api.put(`/api/profile`, data);
export const updateAvatar = (data) => api.post(`/api/set-avatar`, data);
export const checkUsername = (username) => api.post(`/api/check-username`, username);

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
