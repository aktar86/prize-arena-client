import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loder from "../components/Loder/Loder";
import Forbidden from "../components/ForBidden/ForBidden";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { roleLoading, role } = useRole();

  if (loading || roleLoading) {
    <Loder />;
  }

  if (role !== "admin") {
    return <Forbidden />;
  }

  return children;
};

export default AdminRoute;
