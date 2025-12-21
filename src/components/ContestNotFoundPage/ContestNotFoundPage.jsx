import React from "react";
import { Link, useNavigate } from "react-router";

const ContestNotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-[calc(100vh-336px)] flex flex-col justify-center items-center">
      <p className="h-full text-primary text-3xl font-semibold">
        No contest <span className="text-secondary">found!</span>
      </p>

      <button
        className="bg-linear-to-r from-primary to-secondary px-5 py-2  text-white mt-5"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
};

export default ContestNotFoundPage;
