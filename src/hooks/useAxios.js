import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
