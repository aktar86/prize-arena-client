import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxios();

  const { isLoading: roleLoading, data: role } = useQuery({
    queryKey: ["user-role", user?.email],

    enabled: !loading && !!user?.email,
    queryFn: async () => {
      console.log("Fetching for:", user?.email);
      try {
        const res = await axiosSecure.get(`/users/${user?.email}`);
        console.log("Hook response data:", res.data);
        return res.data?.role;
      } catch (error) {
        console.error("Query function error:", error);
        return "user";
      }
    },
  });

  console.log(role);
  return { roleLoading, role: role || "user" };
};

export default useRole;
