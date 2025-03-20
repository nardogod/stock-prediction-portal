import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;

const axiosInstance = axios.create({
    baseURL: baseURL,
});

// Interceptor para adicionar o token automaticamente
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
