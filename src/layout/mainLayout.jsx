import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import useAuth from "../hooks/useAuth";
import Loder from "../components/Loder/Loder";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const { darkMode, loading } = useAuth();
  return (
    <div
      className={`flex ${
        darkMode ? "bg-black text-white" : "bg-white"
      } flex-col min-h-screen`}
    >
      {loading ? (
        <Loder />
      ) : (
        <>
          <div className="overflow-x-hidden">
            <Header />
            <div className="flex-1">
              <Outlet />
            </div>
            <Footer />
          </div>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
