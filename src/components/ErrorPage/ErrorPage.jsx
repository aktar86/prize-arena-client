import React from "react";
import { useNavigate } from "react-router";

import errorAnimation from "../../../public/errorpage-animation.json"; // Download a JSON from Lottiefiles
import Lottie from "lottie-react";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        {/* Lottie Animation Container */}
        <div className="w-full h-64 md:h-80 mb-8">
          <Lottie
            animationData={errorAnimation}
            loop={true}
            className="h-full w-full"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Oops! You're Lost
        </h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          The arena you're looking for doesn't exist. Maybe it was closed, or
          the link is broken. Don't worry, let's get you back!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-primary  text-white font-bold py-3 px-8 rounded-full transition-all  "
          >
            Go Back Home
          </button>

          <button
            onClick={() => navigate(-1)} // Takes user back to previous page
            className="bg-secondary text-white font-bold py-3 px-8 rounded-full transition-all "
          >
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
