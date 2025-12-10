import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxios = () => {
  const { user } = useAuth();

  useEffect(() => {
    const reqInterceptors = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user?.getIdToken();
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }
    );

    const resInterceptors = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptors);
      axiosSecure.interceptors.request.eject(resInterceptors);
    };
  }, [user]);
  return axiosSecure;
};

export default useAxios;
