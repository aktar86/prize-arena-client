import React from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

//download from lottie
import forbiddenAnim from "/public/404ReactLottie.json";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center ">
      <div className="max-w-md w-full text-center">
        {/* Lottie Animation Container */}
        <div className="w-full">
          <Lottie
            animationData={forbiddenAnim}
            loop={true}
            className=" w-full"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-2xl md:text-3xl font-semibold text-red-500 my-3 ">
          Access Denied
        </h1>

        <p className="text-lg text-gray-600 mb-5 ">
          Sorry, you don't have permission to access this page. This is a
          restricted area.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-2 bg-primary text-white"
          >
            Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-2 bg-secondary text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
