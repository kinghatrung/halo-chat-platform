import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const axiosClient = axios.create({
  baseURL: '/api',
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: unknown) => Promise.reject(error),
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig | undefined;
    const isAuthRoute =
      originalRequest?.url?.includes('/auth/refresh') ||
      originalRequest?.url?.includes('/auth/login');

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !isAuthRoute
    ) {
      originalRequest._retry = true;
      try {
        await axiosClient.post('/auth/refresh');
        return axiosClient(originalRequest);
      } catch (refreshError) {
        const isPublicPage =
          typeof window !== 'undefined' &&
          (window.location.pathname === '/signin' || window.location.pathname === '/signup');

        if (typeof window !== 'undefined' && !isPublicPage) {
          // Full reload on purpose: drops every cached query/socket of the expired session.
          // eslint-disable-next-line @next/next/no-location-assign-relative-destination
          window.location.href = '/signin';
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
