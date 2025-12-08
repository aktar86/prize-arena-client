import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const mainLayout = () => {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default mainLayout;
