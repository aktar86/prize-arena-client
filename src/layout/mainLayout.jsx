import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import useAuth from "../hooks/useAuth";
import Loder from "../components/Loder/Loder";
import { ToastContainer } from "react-toastify";
import { SearchProvider } from "../context/SearchContext";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  const { darkMode, loading } = useAuth();
  
  // Apply dark class to body for scrollbar styling
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('dark');
    };
  }, [darkMode]);
  
  return (
    <SearchProvider>
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
              <ScrollToTop />
            </div>
            <ToastContainer />
          </>
        )}
      </div>
    </SearchProvider>
  );
};

export default MainLayout;
