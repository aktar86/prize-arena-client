import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import useAuth from "../hooks/useAuth";
import Loder from "../components/Loder/Loder";

const MainLayout = () => {
  const { loading } = useAuth();
  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <Loder />
      ) : (
        <>
          <Header />
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
