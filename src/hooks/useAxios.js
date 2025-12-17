import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxios = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

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
        console.log(error);
        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptors);
      axiosSecure.interceptors.response.eject(resInterceptors);
    };
  }, [user, logOut, navigate]);
  return axiosSecure;
};

export default useAxios;
