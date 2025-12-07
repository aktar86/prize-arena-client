import React from "react";
import GoogleIcon from "../../assets/google.png";

const SocialLogin = () => {
  return (
    <div>
      <button
        className="btn w-full border hover:border-0 border-primary hover:text-white hover:bg-linear-to-r from-primary to-secondary  transform transition ease-in-out duration-200
      "
      >
        <span>
          <img src={GoogleIcon} alt={GoogleIcon} className="w-5 h-5" />
        </span>
        <span className="ml-5">Sign in with google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
