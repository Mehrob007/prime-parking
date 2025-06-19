import axios from "axios";

const BUSE_URL = import.meta.env.VITE_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: BUSE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default apiClient;
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // document.location.href = "./login";
//       // localStorage.removeItem("token");
//       // console.warn("Unauthorized, redirecting to login...");
//     }
//     return Promise.reject(error);
//   },
// );
