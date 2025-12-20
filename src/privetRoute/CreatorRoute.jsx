import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loder from "../components/Loder/Loder";
import Forbidden from "../components/ForBidden/ForBidden";

const CreatorRoute = ({ children }) => {
  const { loading } = useAuth();
  const { roleLoading, role } = useRole();

  if (loading || roleLoading) {
    return <Loder />;
  }

  if (role !== "creator") {
    <Forbidden />;
  }

  return children;
};

export default CreatorRoute;
