import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Forbidden from "../components/ForBidden/ForBidden";
import Loder from "../components/Loder/Loder";

const UserRoute = ({ children }) => {
  const { loading } = useAuth();
  const { roleLoading, role } = useRole();

  if (loading || roleLoading) {
    return <Loder />;
  }

  if (role !== "user") {
    return <Forbidden />;
  }

  return children;
};

export default UserRoute;
