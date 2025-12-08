import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import useAuth from "../hooks/useAuth";
import Loder from "../components/Loder/Loder";

const MainLayout = () => {
  const { loading } = useAuth();
  return (
    <div>
      {loading ? (
        <Loder />
      ) : (
        <>
          {" "}
          <Header />
          <div>
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
