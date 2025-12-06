import React from "react";
import { AuthContext } from "./AuthContext";
import useMode from "../hooks/useMode";

const AuthProvider = ({ children }) => {
  const { darkMode, toggleDarkMode } = useMode();
  const authInfo = {
    toggleDarkMode,
    darkMode,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
