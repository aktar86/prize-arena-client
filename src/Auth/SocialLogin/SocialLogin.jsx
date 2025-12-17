import React from "react";
import GoogleIcon from "../../assets/google.png";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);

        //database
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          navigate(location?.state || "/");
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Login",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
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
